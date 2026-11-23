import React, { useEffect, useMemo, useState } from "react";
import {
  addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, updateDoc
} from "firebase/firestore";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, db, googleProvider, firebaseConfigured } from "./firebase";
import { CalendarDays, Clock3, LogIn, LogOut, Plus, Download, Trash2, Pencil, Wallet, Coffee, CircleHelp } from "lucide-react";

const RATE_STANDARD = 12.71;
const RATE_EXTRA = 10;
const LIMIT = 20;
const money = n => new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(n || 0);
const pad = n => String(n).padStart(2, "0");
const localDate = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const today = localDate(new Date());
const emptyForm = { date: today, start: "09:00", end: "17:00", breakMinutes: "30", note: "" };

function shiftMinutes(s) {
  const start = new Date(`${s.date}T${s.start}:00`);
  let end = new Date(`${s.date}T${s.end}:00`);
  if (end <= start) end.setDate(end.getDate() + 1);
  return Math.max(0, Math.round((end - start) / 60000) - Math.max(0, Number(s.breakMinutes || 0)));
}
function weekStart(dateString) {
  const d = new Date(`${dateString}T12:00:00`);
  const day = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - day);
  return localDate(d);
}
function payForShifts(shifts) {
  const sorted = [...shifts].sort((a,b) => (a.date+a.start).localeCompare(b.date+b.start));
  let used = 0, regularHours = 0, extraHours = 0, pay = 0;
  for (const s of sorted) {
    let mins = shiftMinutes(s);
    const regularMins = Math.min(mins, Math.max(0, LIMIT*60-used));
    const extraMins = mins - regularMins;
    regularHours += regularMins/60; extraHours += extraMins/60;
    pay += regularMins/60*RATE_STANDARD + extraMins/60*RATE_EXTRA;
    used += mins;
  }
  return { minutes: used, hours: used/60, regularHours, extraHours, pay };
}
const duration = mins => `${Math.floor(mins/60)}h ${pad(mins%60)}m`;
const dateLabel = d => new Date(`${d}T12:00:00`).toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"});

export default function App() {
  const [user,setUser] = useState(null);
  const [authReady,setAuthReady] = useState(!firebaseConfigured);
  const [shifts,setShifts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [form,setForm] = useState(emptyForm);
  const [editing,setEditing] = useState(null);
  const [error,setError] = useState("");
  const [week,setWeek] = useState(weekStart(today));
  const [showForm,setShowForm] = useState(false);

  useEffect(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, u => { setUser(u); setAuthReady(true); });
  }, []);
  useEffect(() => {
    if (!user || !db) { setShifts([]); return; }
    setLoading(true);
    const q = query(collection(db,"users",user.uid,"shifts"),orderBy("date","desc"));
    return onSnapshot(q, snap => {
      setShifts(snap.docs.map(d => ({id:d.id,...d.data()})));
      setLoading(false);
    }, e => { setError(e.message); setLoading(false); });
  }, [user]);
  const weekly = useMemo(() => shifts.filter(s => weekStart(s.date) === week), [shifts,week]);
  const totals = useMemo(() => payForShifts(weekly), [weekly]);
  const monthTotals = useMemo(() => payForShifts(shifts.filter(s => s.date.slice(0,7) === week.slice(0,7))), [shifts,week]);
  const sortedWeek = [...weekly].sort((a,b) => (b.date+b.start).localeCompare(a.date+a.start));

  async function login() {
    setError("");
    try { await signInWithPopup(auth,googleProvider); }
    catch(e) { setError(e.message); }
  }
  async function saveShift(e) {
    e.preventDefault(); setError("");
    if (!form.date || !form.start || !form.end) return setError("Please enter a date, clock-in and clock-out time.");
    const start = new Date(`${form.date}T${form.start}:00`);
    let end = new Date(`${form.date}T${form.end}:00`); if (end <= start) end.setDate(end.getDate()+1);
    const gross = (end-start)/60000;
    if (Number(form.breakMinutes||0) > gross) return setError("Break time cannot be longer than the shift.");
    const payload = {...form, breakMinutes:Math.max(0,Number(form.breakMinutes||0)), note:form.note.trim()};
    try {
      if (editing) await updateDoc(doc(db,"users",user.uid,"shifts",editing),payload);
      else await addDoc(collection(db,"users",user.uid,"shifts"),payload);
      setForm(emptyForm); setEditing(null); setShowForm(false);
    } catch(e) { setError(e.message); }
  }
  function editShift(s) { setEditing(s.id); setForm({date:s.date,start:s.start,end:s.end,breakMinutes:String(s.breakMinutes??0),note:s.note||""}); setShowForm(true); window.scrollTo({top:0,behavior:"smooth"}); }
  async function removeShift(id) {
    if (!confirm("Delete this shift? This cannot be undone.")) return;
    try { await deleteDoc(doc(db,"users",user.uid,"shifts",id)); } catch(e) { setError(e.message); }
  }
  function exportCSV() {
    const rows = [["Date","Clock in","Clock out","Unpaid break (minutes)","Paid hours","Notes","Estimated pay"]];
    [...weekly].sort((a,b)=>a.date.localeCompare(b.date)).forEach(s => {
      const one = payForShifts([s]);
      rows.push([s.date,s.start,s.end,s.breakMinutes, (shiftMinutes(s)/60).toFixed(2),s.note||"",one.pay.toFixed(2)]);
    });
    rows.push(["WEEK TOTAL","","","",totals.hours.toFixed(2),"",totals.pay.toFixed(2)]);
    const csv = rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv],{type:"text/csv;charset=utf-8"}));
    const a = document.createElement("a"); a.href=url; a.download=`shiftpay-week-${week}.csv`; a.click(); URL.revokeObjectURL(url);
  }
  function changeWeek(delta) { const d=new Date(`${week}T12:00:00`); d.setDate(d.getDate()+delta*7); setWeek(localDate(d)); }
  const weekEnd = (()=>{const d=new Date(`${week}T12:00:00`);d.setDate(d.getDate()+6);return localDate(d)})();
  const thresholdPct = Math.min(100,totals.hours/LIMIT*100);

  if (!firebaseConfigured) return <SetupScreen />;
  if (!authReady) return <div className="center-screen">Loading ShiftPay…</div>;
  if (!user) return <main className="login-wrap"><div className="login-card"><div className="brand-mark">£</div><p className="eyebrow">YOUR PERSONAL PAY TRACKER</p><h1>Know your hours.<br/><span>Know your pay.</span></h1><p className="muted">Track every restaurant shift, deduct unpaid breaks and see your weekly earnings automatically.</p><div className="rate-box"><div><small>FIRST 20 HOURS / WEEK</small><strong>£12.71 <small>per hour</small></strong></div><div><small>HOURS AFTER 20</small><strong>£10.00 <small>per hour</small></strong></div></div><button className="primary wide" onClick={login}><LogIn size={18}/> Continue with Google</button><p className="tiny">Your shifts are private to your Google account and sync across your devices.</p>{error&&<p className="error">{error}</p>}</div></main>;

  return <div className="app-shell">
    <header className="topbar"><div className="brand"><div className="brand-mark small">£</div><div><b>ShiftPay</b><small>Work hours tracker</small></div></div><div className="user-area"><img src={user.photoURL||""} alt="" referrerPolicy="no-referrer"/><span>{user.displayName||user.email}</span><button className="icon-btn" title="Sign out" onClick={()=>signOut(auth)}><LogOut size={18}/></button></div></header>
    <main className="content">
      <div className="welcome"><div><p className="eyebrow">YOUR WORK SUMMARY</p><h1>Weekly overview</h1><p className="muted">Your shifts and estimated earnings, all in one place.</p></div><button className="primary" onClick={()=>{setEditing(null);setForm({...emptyForm,date:today});setShowForm(!showForm);}}><Plus size={18}/> Add shift</button></div>
      {error&&<div className="alert">{error}<button onClick={()=>setError("")}>Dismiss</button></div>}
      {showForm&&<section className="panel form-panel"><div className="panel-heading"><div><h2>{editing?"Edit shift":"Add a shift"}</h2><p className="muted">Enter your clock-in, clock-out and unpaid break.</p></div><button className="text-btn" onClick={()=>{setShowForm(false);setEditing(null);setForm(emptyForm)}}>Close</button></div><form onSubmit={saveShift} className="shift-form">
        <label>Date<input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} required/></label>
        <label>Clock in<input type="time" value={form.start} onChange={e=>setForm({...form,start:e.target.value})} required/></label>
        <label>Clock out<input type="time" value={form.end} onChange={e=>setForm({...form,end:e.target.value})} required/><small>If you finish after midnight, enter the finish time on the same shift date.</small></label>
        <label>Unpaid break (minutes)<input type="number" min="0" step="1" value={form.breakMinutes} onChange={e=>setForm({...form,breakMinutes:e.target.value})}/></label>
        <label className="full">Note (optional)<input type="text" maxLength="100" placeholder="e.g. evening shift" value={form.note} onChange={e=>setForm({...form,note:e.target.value})}/></label>
        <div className="form-actions"><button className="primary" type="submit">{editing?"Save changes":"Save shift"}</button><button className="secondary" type="button" onClick={()=>{setShowForm(false);setEditing(null);setForm(emptyForm)}}>Cancel</button></div>
      </form></section>}
      <section className="week-nav panel"><button className="nav-arrow" onClick={()=>changeWeek(-1)}>‹</button><div><b>{dateLabel(week)} – {dateLabel(weekEnd)}</b><small>Monday to Sunday · {week===weekStart(today)?"Current week":"Selected week"}</small></div><button className="nav-arrow" onClick={()=>changeWeek(1)}>›</button><button className="today-btn" onClick={()=>setWeek(weekStart(today))}>This week</button></section>
      <section className="stats-grid">
        <Stat icon={<Clock3/>} label="Paid working hours" value={`${totals.hours.toFixed(2)} hrs`} detail={`${duration(totals.minutes)} after breaks`}/>
        <Stat icon={<Wallet/>} label="Estimated weekly pay" value={money(totals.pay)} detail="Before tax and deductions" accent/>
        <Stat icon={<CalendarDays/>} label="At £12.71/hour" value={`${totals.regularHours.toFixed(2)} hrs`} detail={money(totals.regularHours*RATE_STANDARD)}/>
        <Stat icon={<Wallet/>} label="Additional hours" value={`${totals.extraHours.toFixed(2)} hrs`} detail={money(totals.extraHours*RATE_EXTRA)}/>
      </section>
      <section className="panel progress-panel"><div className="progress-top"><div><h2>20-hour weekly threshold</h2><p className="muted">First 20 paid hours are calculated at £12.71/hour.</p></div><b>{totals.hours.toFixed(2)} / 20 hrs</b></div><div className="progress-track"><div style={{width:`${thresholdPct}%`}}/></div><div className="progress-foot"><span>{totals.hours>=20?"Threshold reached – additional hours at £10/hour":`${Math.max(0,20-totals.hours).toFixed(2)} hours remaining at £12.71/hour`}</span><span>{Math.round(thresholdPct)}%</span></div></section>
      <section className="panel shifts-panel"><div className="panel-heading"><div><h2>Shift history</h2><p className="muted">{weekly.length} shift{weekly.length===1?"":"s"} recorded this week</p></div><button className="secondary export" onClick={exportCSV} disabled={!weekly.length}><Download size={16}/> Export CSV</button></div>
        {loading?<p className="muted">Loading shifts…</p>:!sortedWeek.length?<div className="empty"><div className="empty-icon"><CalendarDays/></div><b>No shifts recorded this week</b><p className="muted">Add your first shift to start tracking your hours and pay.</p><button className="primary" onClick={()=>setShowForm(true)}><Plus size={17}/> Add your first shift</button></div>:<div className="shift-list">{sortedWeek.map(s=><ShiftRow key={s.id} shift={s} onEdit={()=>editShift(s)} onDelete={()=>removeShift(s.id)}/>)}</div>}
      </section>
      <section className="month-note"><Wallet size={18}/><div><b>Month-to-date snapshot</b><span>{money(monthTotals.pay)} estimated · {monthTotals.hours.toFixed(2)} paid hours in {week.slice(0,7)}</span></div></section>
      <p className="disclaimer"><CircleHelp size={14}/> Earnings are estimates based on the rates entered. They do not include tax, holiday pay, pension, or other payroll adjustments.</p>
    </main>
  </div>;
}
function Stat({icon,label,value,detail,accent}) {return <div className={`stat-card ${accent?"accent":""}`}><div className="stat-icon">{icon}</div><span>{label}</span><strong>{value}</strong><small>{detail}</small></div>}
function ShiftRow({shift:s,onEdit,onDelete}) {const mins=shiftMinutes(s);const p=payForShifts([s]);return <div className="shift-row"><div className="date-bubble"><b>{new Date(`${s.date}T12:00:00`).getDate()}</b><small>{new Date(`${s.date}T12:00:00`).toLocaleDateString("en-GB",{month:"short"})}</small></div><div className="shift-main"><b>{dateLabel(s.date)}</b><span>{s.start} – {s.end}{s.note?` · ${s.note}`:""}</span><small><Coffee size={13}/> {s.breakMinutes||0} min unpaid break · {duration(mins)} paid</small></div><div className="shift-pay"><b>{money(p.pay)}</b><small>{(mins/60).toFixed(2)} hrs</small></div><div className="row-actions"><button className="icon-btn" title="Edit shift" onClick={onEdit}><Pencil size={16}/></button><button className="icon-btn danger" title="Delete shift" onClick={onDelete}><Trash2 size={16}/></button></div></div>}
function SetupScreen(){return <main className="setup-wrap"><div className="setup-card"><div className="brand-mark">£</div><p className="eyebrow">ALMOST READY</p><h1>Connect your Firebase project</h1><p className="muted">Add your Firebase web app settings to enable Google sign-in and cloud sync. Follow the included README step by step.</p><ol><li>Create a Firebase project and register a Web app.</li><li>Enable Google under Authentication → Sign-in method.</li><li>Create a Firestore database and publish <code>firestore.rules</code>.</li><li>Copy <code>.env.example</code> to <code>.env</code> and fill in your Firebase config.</li><li>Run <code>npm install</code> and <code>npm run dev</code>.</li></ol><p className="tiny">No shifts are stored until you connect Firebase. Never share your Firebase private service-account key in this app.</p></div></main>}
