(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function h0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Zh={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function d0(){if(Xm)return ke;Xm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function C(O){return O===null||typeof O!="object"?null:(O=A&&O[A]||O["@@iterator"],typeof O=="function"?O:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,X={};function $(O,W,de){this.props=O,this.context=W,this.refs=X,this.updater=de||j}$.prototype.isReactComponent={},$.prototype.setState=function(O,W){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,W,"setState")},$.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function pe(){}pe.prototype=$.prototype;function he(O,W,de){this.props=O,this.context=W,this.refs=X,this.updater=de||j}var ae=he.prototype=new pe;ae.constructor=he,q(ae,$.prototype),ae.isPureReactComponent=!0;var Te=Array.isArray,Be=Object.prototype.hasOwnProperty,Ie={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function I(O,W,de){var Se,Re={},Oe=null,Fe=null;if(W!=null)for(Se in W.ref!==void 0&&(Fe=W.ref),W.key!==void 0&&(Oe=""+W.key),W)Be.call(W,Se)&&!D.hasOwnProperty(Se)&&(Re[Se]=W[Se]);var Ue=arguments.length-2;if(Ue===1)Re.children=de;else if(1<Ue){for(var qe=Array(Ue),Et=0;Et<Ue;Et++)qe[Et]=arguments[Et+2];Re.children=qe}if(O&&O.defaultProps)for(Se in Ue=O.defaultProps,Ue)Re[Se]===void 0&&(Re[Se]=Ue[Se]);return{$$typeof:i,type:O,key:Oe,ref:Fe,props:Re,_owner:Ie.current}}function R(O,W){return{$$typeof:i,type:O.type,key:W,ref:O.ref,props:O.props,_owner:O._owner}}function P(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function V(O){var W={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(de){return W[de]})}var x=/\/+/g;function S(O,W){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):W.toString(36)}function ee(O,W,de,Se,Re){var Oe=typeof O;(Oe==="undefined"||Oe==="boolean")&&(O=null);var Fe=!1;if(O===null)Fe=!0;else switch(Oe){case"string":case"number":Fe=!0;break;case"object":switch(O.$$typeof){case i:case e:Fe=!0}}if(Fe)return Fe=O,Re=Re(Fe),O=Se===""?"."+S(Fe,0):Se,Te(Re)?(de="",O!=null&&(de=O.replace(x,"$&/")+"/"),ee(Re,W,de,"",function(Et){return Et})):Re!=null&&(P(Re)&&(Re=R(Re,de+(!Re.key||Fe&&Fe.key===Re.key?"":(""+Re.key).replace(x,"$&/")+"/")+O)),W.push(Re)),1;if(Fe=0,Se=Se===""?".":Se+":",Te(O))for(var Ue=0;Ue<O.length;Ue++){Oe=O[Ue];var qe=Se+S(Oe,Ue);Fe+=ee(Oe,W,de,qe,Re)}else if(qe=C(O),typeof qe=="function")for(O=qe.call(O),Ue=0;!(Oe=O.next()).done;)Oe=Oe.value,qe=Se+S(Oe,Ue++),Fe+=ee(Oe,W,de,qe,Re);else if(Oe==="object")throw W=String(O),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Fe}function De(O,W,de){if(O==null)return O;var Se=[],Re=0;return ee(O,Se,"","",function(Oe){return W.call(de,Oe,Re++)}),Se}function $e(O){if(O._status===-1){var W=O._result;W=W(),W.then(function(de){(O._status===0||O._status===-1)&&(O._status=1,O._result=de)},function(de){(O._status===0||O._status===-1)&&(O._status=2,O._result=de)}),O._status===-1&&(O._status=0,O._result=W)}if(O._status===1)return O._result.default;throw O._result}var Ve={current:null},Y={transition:null},ue={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Y,ReactCurrentOwner:Ie};function ie(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:De,forEach:function(O,W,de){De(O,function(){W.apply(this,arguments)},de)},count:function(O){var W=0;return De(O,function(){W++}),W},toArray:function(O){return De(O,function(W){return W})||[]},only:function(O){if(!P(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ke.Component=$,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=he,ke.StrictMode=s,ke.Suspense=g,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,ke.act=ie,ke.cloneElement=function(O,W,de){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Se=q({},O.props),Re=O.key,Oe=O.ref,Fe=O._owner;if(W!=null){if(W.ref!==void 0&&(Oe=W.ref,Fe=Ie.current),W.key!==void 0&&(Re=""+W.key),O.type&&O.type.defaultProps)var Ue=O.type.defaultProps;for(qe in W)Be.call(W,qe)&&!D.hasOwnProperty(qe)&&(Se[qe]=W[qe]===void 0&&Ue!==void 0?Ue[qe]:W[qe])}var qe=arguments.length-2;if(qe===1)Se.children=de;else if(1<qe){Ue=Array(qe);for(var Et=0;Et<qe;Et++)Ue[Et]=arguments[Et+2];Se.children=Ue}return{$$typeof:i,type:O.type,key:Re,ref:Oe,props:Se,_owner:Fe}},ke.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},ke.createElement=I,ke.createFactory=function(O){var W=I.bind(null,O);return W.type=O,W},ke.createRef=function(){return{current:null}},ke.forwardRef=function(O){return{$$typeof:m,render:O}},ke.isValidElement=P,ke.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:$e}},ke.memo=function(O,W){return{$$typeof:v,type:O,compare:W===void 0?null:W}},ke.startTransition=function(O){var W=Y.transition;Y.transition={};try{O()}finally{Y.transition=W}},ke.unstable_act=ie,ke.useCallback=function(O,W){return Ve.current.useCallback(O,W)},ke.useContext=function(O){return Ve.current.useContext(O)},ke.useDebugValue=function(){},ke.useDeferredValue=function(O){return Ve.current.useDeferredValue(O)},ke.useEffect=function(O,W){return Ve.current.useEffect(O,W)},ke.useId=function(){return Ve.current.useId()},ke.useImperativeHandle=function(O,W,de){return Ve.current.useImperativeHandle(O,W,de)},ke.useInsertionEffect=function(O,W){return Ve.current.useInsertionEffect(O,W)},ke.useLayoutEffect=function(O,W){return Ve.current.useLayoutEffect(O,W)},ke.useMemo=function(O,W){return Ve.current.useMemo(O,W)},ke.useReducer=function(O,W,de){return Ve.current.useReducer(O,W,de)},ke.useRef=function(O){return Ve.current.useRef(O)},ke.useState=function(O){return Ve.current.useState(O)},ke.useSyncExternalStore=function(O,W,de){return Ve.current.useSyncExternalStore(O,W,de)},ke.useTransition=function(){return Ve.current.useTransition()},ke.version="18.3.1",ke}var Ym;function Ly(){return Ym||(Ym=1,Zh.exports=d0()),Zh.exports}var ct=Ly();const b=h0(ct);var Eu={},ed={exports:{}},Zt={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function f0(){return Jm||(Jm=1,(function(i){function e(Y,ue){var ie=Y.length;Y.push(ue);e:for(;0<ie;){var O=ie-1>>>1,W=Y[O];if(0<o(W,ue))Y[O]=ue,Y[ie]=W,ie=O;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var ue=Y[0],ie=Y.pop();if(ie!==ue){Y[0]=ie;e:for(var O=0,W=Y.length,de=W>>>1;O<de;){var Se=2*(O+1)-1,Re=Y[Se],Oe=Se+1,Fe=Y[Oe];if(0>o(Re,ie))Oe<W&&0>o(Fe,Re)?(Y[O]=Fe,Y[Oe]=ie,O=Oe):(Y[O]=Re,Y[Se]=ie,O=Se);else if(Oe<W&&0>o(Fe,ie))Y[O]=Fe,Y[Oe]=ie,O=Oe;else break e}}return ue}function o(Y,ue){var ie=Y.sortIndex-ue.sortIndex;return ie!==0?ie:Y.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],v=[],w=1,A=null,C=3,j=!1,q=!1,X=!1,$=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(Y){for(var ue=t(v);ue!==null;){if(ue.callback===null)s(v);else if(ue.startTime<=Y)s(v),ue.sortIndex=ue.expirationTime,e(g,ue);else break;ue=t(v)}}function Te(Y){if(X=!1,ae(Y),!q)if(t(g)!==null)q=!0,$e(Be);else{var ue=t(v);ue!==null&&Ve(Te,ue.startTime-Y)}}function Be(Y,ue){q=!1,X&&(X=!1,pe(I),I=-1),j=!0;var ie=C;try{for(ae(ue),A=t(g);A!==null&&(!(A.expirationTime>ue)||Y&&!V());){var O=A.callback;if(typeof O=="function"){A.callback=null,C=A.priorityLevel;var W=O(A.expirationTime<=ue);ue=i.unstable_now(),typeof W=="function"?A.callback=W:A===t(g)&&s(g),ae(ue)}else s(g);A=t(g)}if(A!==null)var de=!0;else{var Se=t(v);Se!==null&&Ve(Te,Se.startTime-ue),de=!1}return de}finally{A=null,C=ie,j=!1}}var Ie=!1,D=null,I=-1,R=5,P=-1;function V(){return!(i.unstable_now()-P<R)}function x(){if(D!==null){var Y=i.unstable_now();P=Y;var ue=!0;try{ue=D(!0,Y)}finally{ue?S():(Ie=!1,D=null)}}else Ie=!1}var S;if(typeof he=="function")S=function(){he(x)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,De=ee.port2;ee.port1.onmessage=x,S=function(){De.postMessage(null)}}else S=function(){$(x,0)};function $e(Y){D=Y,Ie||(Ie=!0,S())}function Ve(Y,ue){I=$(function(){Y(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Y){Y.callback=null},i.unstable_continueExecution=function(){q||j||(q=!0,$e(Be))},i.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Y?Math.floor(1e3/Y):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(Y){switch(C){case 1:case 2:case 3:var ue=3;break;default:ue=C}var ie=C;C=ue;try{return Y()}finally{C=ie}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Y,ue){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ie=C;C=Y;try{return ue()}finally{C=ie}},i.unstable_scheduleCallback=function(Y,ue,ie){var O=i.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?O+ie:O):ie=O,Y){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ie+W,Y={id:w++,callback:ue,priorityLevel:Y,startTime:ie,expirationTime:W,sortIndex:-1},ie>O?(Y.sortIndex=ie,e(v,Y),t(g)===null&&Y===t(v)&&(X?(pe(I),I=-1):X=!0,Ve(Te,ie-O))):(Y.sortIndex=W,e(g,Y),q||j||(q=!0,$e(Be))),Y},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(Y){var ue=C;return function(){var ie=C;C=ue;try{return Y.apply(this,arguments)}finally{C=ie}}}})(nd)),nd}var Zm;function p0(){return Zm||(Zm=1,td.exports=f0()),td.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function m0(){if(eg)return Zt;eg=1;var i=Ly(),e=p0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function C(n){return g.call(A,n)?!0:g.call(w,n)?!1:v.test(n)?A[n]=!0:(w[n]=!0,!1)}function j(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function q(n,r,a,c){if(r===null||typeof r>"u"||j(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];$[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){$[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){$[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){$[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){$[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){$[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function he(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(pe,he);$[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(pe,he);$[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(pe,he);$[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){$[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),$.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){$[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function ae(n,r,a,c){var d=$.hasOwnProperty(r)?$[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(q(r,a,d,c)&&(a=null),c||d===null?C(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Be=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),V=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),Ve=Symbol.for("react.offscreen"),Y=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,O;function W(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var de=!1;function Se(n,r){if(!n||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var k=`
`+d[_].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=_&&0<=T);break}}}finally{de=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function Re(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function Oe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Ie:return"Portal";case R:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case ee:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case x:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case De:return r=n.displayName||null,r!==null?r:Oe(n.type)||"Memo";case $e:r=n._payload,n=n._init;try{return Oe(n(r))}catch{}}return null}function Fe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ue(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Et(n){var r=qe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function lr(n){n._valueTracker||(n._valueTracker=Et(n))}function fs(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=qe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function xr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ai(n,r){var a=r.checked;return ie({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ps(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Ue(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Do(n,r){r=r.checked,r!=null&&ae(n,"checked",r,!1)}function Vo(n,r){Do(n,r);var a=Ue(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ms(n,r.type,a):r.hasOwnProperty("defaultValue")&&ms(n,r.type,Ue(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function sl(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ms(n,r,a){(r!=="number"||xr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ur=Array.isArray;function cr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ue(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Oo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function gs(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(ur(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Ue(a)}}function ys(n,r){var a=Ue(r.value),c=Ue(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function xo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function pt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?pt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var hr,Mo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=hr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Mr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ki=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(n){ki.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ri[r]=Ri[n]})});function Lo(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Ri.hasOwnProperty(n)&&Ri[n]?(""+r).trim():r+"px"}function bo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Lo(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Fo=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uo(n,r){if(r){if(Fo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function zo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ci=null;function _s(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var vs=null,hn=null,$n=null;function Es(n){if(n=ca(n)){if(typeof vs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ml(r),vs(n.stateNode,n.type,r))}}function Hn(n){hn?$n?$n.push(n):$n=[n]:hn=n}function jo(){if(hn){var n=hn,r=$n;if($n=hn=null,Es(n),r)for(n=0;n<r.length;n++)Es(r[n])}}function Pi(n,r){return n(r)}function Bo(){}var dr=!1;function $o(n,r,a){if(dr)return n(r,a);dr=!0;try{return Pi(n,r,a)}finally{dr=!1,(hn!==null||$n!==null)&&(Bo(),jo())}}function it(n,r){var a=n.stateNode;if(a===null)return null;var c=Ml(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ws=!1;if(m)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){ws=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{ws=!1}function Ni(n,r,a,c,d,p,_,T,k){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(K){this.onError(K)}}var Di=!1,Ts=null,In=!1,Ho=null,kc={onError:function(n){Di=!0,Ts=n}};function Is(n,r,a,c,d,p,_,T,k){Di=!1,Ts=null,Ni.apply(kc,arguments)}function ol(n,r,a,c,d,p,_,T,k){if(Is.apply(this,arguments),Di){if(Di){var U=Ts;Di=!1,Ts=null}else throw Error(t(198));In||(In=!0,Ho=U)}}function Sn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Vi(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function An(n){if(Sn(n)!==n)throw Error(t(188))}function al(n){var r=n.alternate;if(!r){if(r=Sn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return An(d),n;if(p===c)return An(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function qo(n){return n=al(n),n!==null?Ss(n):null}function Ss(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ss(n);if(r!==null)return r;n=n.sibling}return null}var As=e.unstable_scheduleCallback,Wo=e.unstable_cancelCallback,ll=e.unstable_shouldYield,Cc=e.unstable_requestPaint,We=e.unstable_now,ul=e.unstable_getCurrentPriorityLevel,Oi=e.unstable_ImmediatePriority,Lr=e.unstable_UserBlockingPriority,dn=e.unstable_NormalPriority,Go=e.unstable_LowPriority,cl=e.unstable_IdlePriority,xi=null,nn=null;function hl(n){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(xi,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:fl,Ko=Math.log,dl=Math.LN2;function fl(n){return n>>>=0,n===0?32:31-(Ko(n)/dl|0)|0}var Rs=64,ks=4194304;function br(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Mi(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=br(T):(p&=_,p!==0&&(c=br(p)))}else _=a&~d,_!==0?c=br(_):p!==0&&(c=br(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Bt(r),d=1<<a,c|=n[a],r&=~d;return c}function Pc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Bt(p),T=1<<_,k=d[_];k===-1?((T&a)===0||(T&c)!==0)&&(d[_]=Pc(T,r)):k<=r&&(n.expiredLanes|=T),p&=~T}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Li(){var n=Rs;return Rs<<=1,(Rs&4194240)===0&&(Rs=64),n}function Fr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Ur(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Bt(r),n[r]=a}function He(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function zr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ne=0;function jr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var pl,Cs,ml,gl,yl,Qo=!1,qn=[],kt=null,Rn=null,kn=null,Br=new Map,fn=new Map,Wn=[],Nc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _l(n,r){switch(n){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":Br.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":fn.delete(r.pointerId)}}function Wt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=ca(r),r!==null&&Cs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Dc(n,r,a,c,d){switch(r){case"focusin":return kt=Wt(kt,n,r,a,c,d),!0;case"dragenter":return Rn=Wt(Rn,n,r,a,c,d),!0;case"mouseover":return kn=Wt(kn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Br.set(p,Wt(Br.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,fn.set(p,Wt(fn.get(p)||null,n,r,a,c,d)),!0}return!1}function vl(n){var r=ji(n.target);if(r!==null){var a=Sn(r);if(a!==null){if(r=a.tag,r===13){if(r=Vi(a),r!==null){n.blockedOn=r,yl(n.priority,function(){ml(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function pr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Ps(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ci=c,a.target.dispatchEvent(c),Ci=null}else return r=ca(a),r!==null&&Cs(r),n.blockedOn=a,!1;r.shift()}return!0}function bi(n,r,a){pr(n)&&a.delete(r)}function El(){Qo=!1,kt!==null&&pr(kt)&&(kt=null),Rn!==null&&pr(Rn)&&(Rn=null),kn!==null&&pr(kn)&&(kn=null),Br.forEach(bi),fn.forEach(bi)}function Cn(n,r){n.blockedOn===r&&(n.blockedOn=null,Qo||(Qo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,El)))}function Pn(n){function r(d){return Cn(d,n)}if(0<qn.length){Cn(qn[0],n);for(var a=1;a<qn.length;a++){var c=qn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(kt!==null&&Cn(kt,n),Rn!==null&&Cn(Rn,n),kn!==null&&Cn(kn,n),Br.forEach(r),fn.forEach(r),a=0;a<Wn.length;a++)c=Wn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Wn.length&&(a=Wn[0],a.blockedOn===null);)vl(a),a.blockedOn===null&&Wn.shift()}var mr=Te.ReactCurrentBatchConfig,$r=!0;function Je(n,r,a,c){var d=Ne,p=mr.transition;mr.transition=null;try{Ne=1,Xo(n,r,a,c)}finally{Ne=d,mr.transition=p}}function Vc(n,r,a,c){var d=Ne,p=mr.transition;mr.transition=null;try{Ne=4,Xo(n,r,a,c)}finally{Ne=d,mr.transition=p}}function Xo(n,r,a,c){if($r){var d=Ps(n,r,a,c);if(d===null)$c(n,r,c,Fi,a),_l(n,c);else if(Dc(d,n,r,a,c))c.stopPropagation();else if(_l(n,c),r&4&&-1<Nc.indexOf(n)){for(;d!==null;){var p=ca(d);if(p!==null&&pl(p),p=Ps(n,r,a,c),p===null&&$c(n,r,c,Fi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else $c(n,r,c,null,a)}}var Fi=null;function Ps(n,r,a,c){if(Fi=null,n=_s(c),n=ji(n),n!==null)if(r=Sn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Vi(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Fi=n,null}function Yo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ul()){case Oi:return 1;case Lr:return 4;case dn:case Go:return 16;case cl:return 536870912;default:return 16}default:return 16}}var sn=null,Ns=null,Gt=null;function Jo(){if(Gt)return Gt;var n,r=Ns,a=r.length,c,d="value"in sn?sn.value:sn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return Gt=d.slice(n,1<c?1-c:void 0)}function Ds(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Gn(){return!0}function Zo(){return!1}function Ct(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Gn:Zo,this.isPropagationStopped=Zo,this}return ie(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Gn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Gn)},persist:function(){},isPersistent:Gn}),r}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vs=Ct(Nn),Kn=ie({},Nn,{view:0,detail:0}),Oc=Ct(Kn),Os,gr,Hr,Ui=ie({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Hr&&(Hr&&n.type==="mousemove"?(Os=n.screenX-Hr.screenX,gr=n.screenY-Hr.screenY):gr=Os=0,Hr=n),Os)},movementY:function(n){return"movementY"in n?n.movementY:gr}}),xs=Ct(Ui),ea=ie({},Ui,{dataTransfer:0}),wl=Ct(ea),Ms=ie({},Kn,{relatedTarget:0}),Ls=Ct(Ms),Tl=ie({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),yr=Ct(Tl),Il=ie({},Nn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Sl=Ct(Il),Al=ie({},Nn,{data:0}),ta=Ct(Al),bs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Rl[n])?!!r[n]:!1}function Qn(){return kl}var l=ie({},Kn,{key:function(n){if(n.key){var r=bs[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ds(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qn,charCode:function(n){return n.type==="keypress"?Ds(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ds(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Ct(l),y=ie({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Ct(y),M=ie({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qn}),z=Ct(M),Z=ie({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=Ct(Z),gt=ie({},Ui,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xe=Ct(gt),wt=[9,13,27,32],at=m&&"CompositionEvent"in window,pn=null;m&&"documentMode"in document&&(pn=document.documentMode);var on=m&&"TextEvent"in window&&!pn,zi=m&&(!at||pn&&8<pn&&11>=pn),Fs=" ",Hf=!1;function qf(n,r){switch(n){case"keyup":return wt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Us=!1;function lE(n,r){switch(n){case"compositionend":return Wf(r);case"keypress":return r.which!==32?null:(Hf=!0,Fs);case"textInput":return n=r.data,n===Fs&&Hf?null:n;default:return null}}function uE(n,r){if(Us)return n==="compositionend"||!at&&qf(n,r)?(n=Jo(),Gt=Ns=sn=null,Us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return zi&&r.locale!=="ko"?null:r.data;default:return null}}var cE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!cE[n.type]:r==="textarea"}function Kf(n,r,a,c){Hn(c),r=Vl(r,"onChange"),0<r.length&&(a=new Vs("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var na=null,ra=null;function hE(n){dp(n,0)}function Cl(n){var r=Hs(n);if(fs(r))return n}function dE(n,r){if(n==="change")return r}var Qf=!1;if(m){var xc;if(m){var Mc="oninput"in document;if(!Mc){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),Mc=typeof Xf.oninput=="function"}xc=Mc}else xc=!1;Qf=xc&&(!document.documentMode||9<document.documentMode)}function Yf(){na&&(na.detachEvent("onpropertychange",Jf),ra=na=null)}function Jf(n){if(n.propertyName==="value"&&Cl(ra)){var r=[];Kf(r,ra,n,_s(n)),$o(hE,r)}}function fE(n,r,a){n==="focusin"?(Yf(),na=r,ra=a,na.attachEvent("onpropertychange",Jf)):n==="focusout"&&Yf()}function pE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Cl(ra)}function mE(n,r){if(n==="click")return Cl(r)}function gE(n,r){if(n==="input"||n==="change")return Cl(r)}function yE(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Dn=typeof Object.is=="function"?Object.is:yE;function ia(n,r){if(Dn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Dn(n[d],r[d]))return!1}return!0}function Zf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ep(n,r){var a=Zf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zf(a)}}function tp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?tp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function np(){for(var n=window,r=xr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=xr(n.document)}return r}function Lc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function _E(n){var r=np(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&tp(a.ownerDocument.documentElement,a)){if(c!==null&&Lc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=ep(a,p);var _=ep(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var vE=m&&"documentMode"in document&&11>=document.documentMode,zs=null,bc=null,sa=null,Fc=!1;function rp(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fc||zs==null||zs!==xr(c)||(c=zs,"selectionStart"in c&&Lc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),sa&&ia(sa,c)||(sa=c,c=Vl(bc,"onSelect"),0<c.length&&(r=new Vs("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=zs)))}function Pl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var js={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionend:Pl("Transition","TransitionEnd")},Uc={},ip={};m&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function Nl(n){if(Uc[n])return Uc[n];if(!js[n])return n;var r=js[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in ip)return Uc[n]=r[a];return n}var sp=Nl("animationend"),op=Nl("animationiteration"),ap=Nl("animationstart"),lp=Nl("transitionend"),up=new Map,cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(n,r){up.set(n,r),u(r,[n])}for(var zc=0;zc<cp.length;zc++){var jc=cp[zc],EE=jc.toLowerCase(),wE=jc[0].toUpperCase()+jc.slice(1);qr(EE,"on"+wE)}qr(sp,"onAnimationEnd"),qr(op,"onAnimationIteration"),qr(ap,"onAnimationStart"),qr("dblclick","onDoubleClick"),qr("focusin","onFocus"),qr("focusout","onBlur"),qr(lp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TE=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function hp(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,ol(c,r,void 0,n),n.currentTarget=null}function dp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],k=T.instance,U=T.currentTarget;if(T=T.listener,k!==p&&d.isPropagationStopped())break e;hp(d,T,U),p=k}else for(_=0;_<c.length;_++){if(T=c[_],k=T.instance,U=T.currentTarget,T=T.listener,k!==p&&d.isPropagationStopped())break e;hp(d,T,U),p=k}}}if(In)throw n=Ho,In=!1,Ho=null,n}function Qe(n,r){var a=r[Qc];a===void 0&&(a=r[Qc]=new Set);var c=n+"__bubble";a.has(c)||(fp(r,n,2,!1),a.add(c))}function Bc(n,r,a){var c=0;r&&(c|=4),fp(a,n,c,r)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function aa(n){if(!n[Dl]){n[Dl]=!0,s.forEach(function(a){a!=="selectionchange"&&(TE.has(a)||Bc(a,!1,n),Bc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Dl]||(r[Dl]=!0,Bc("selectionchange",!1,r))}}function fp(n,r,a,c){switch(Yo(r)){case 1:var d=Je;break;case 4:d=Vc;break;default:d=Xo}a=d.bind(null,r,a,n),d=void 0,!ws||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function $c(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var k=_.tag;if((k===3||k===4)&&(k=_.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;_=_.return}for(;T!==null;){if(_=ji(T),_===null)return;if(k=_.tag,k===5||k===6){c=p=_;continue e}T=T.parentNode}}c=c.return}$o(function(){var U=p,K=_s(a),Q=[];e:{var G=up.get(n);if(G!==void 0){var te=Vs,oe=n;switch(n){case"keypress":if(Ds(a)===0)break e;case"keydown":case"keyup":te=f;break;case"focusin":oe="focus",te=Ls;break;case"focusout":oe="blur",te=Ls;break;case"beforeblur":case"afterblur":te=Ls;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=wl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=z;break;case sp:case op:case ap:te=yr;break;case lp:te=je;break;case"scroll":te=Oc;break;case"wheel":te=xe;break;case"copy":case"cut":case"paste":te=Sl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=E}var le=(r&4)!==0,st=!le&&n==="scroll",L=le?G!==null?G+"Capture":null:G;le=[];for(var N=U,F;N!==null;){F=N;var J=F.stateNode;if(F.tag===5&&J!==null&&(F=J,L!==null&&(J=it(N,L),J!=null&&le.push(la(N,J,F)))),st)break;N=N.return}0<le.length&&(G=new te(G,oe,null,a,K),Q.push({event:G,listeners:le}))}}if((r&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",G&&a!==Ci&&(oe=a.relatedTarget||a.fromElement)&&(ji(oe)||oe[_r]))break e;if((te||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,te?(oe=a.relatedTarget||a.toElement,te=U,oe=oe?ji(oe):null,oe!==null&&(st=Sn(oe),oe!==st||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(te=null,oe=U),te!==oe)){if(le=xs,J="onMouseLeave",L="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(le=E,J="onPointerLeave",L="onPointerEnter",N="pointer"),st=te==null?G:Hs(te),F=oe==null?G:Hs(oe),G=new le(J,N+"leave",te,a,K),G.target=st,G.relatedTarget=F,J=null,ji(K)===U&&(le=new le(L,N+"enter",oe,a,K),le.target=F,le.relatedTarget=st,J=le),st=J,te&&oe)t:{for(le=te,L=oe,N=0,F=le;F;F=Bs(F))N++;for(F=0,J=L;J;J=Bs(J))F++;for(;0<N-F;)le=Bs(le),N--;for(;0<F-N;)L=Bs(L),F--;for(;N--;){if(le===L||L!==null&&le===L.alternate)break t;le=Bs(le),L=Bs(L)}le=null}else le=null;te!==null&&pp(Q,G,te,le,!1),oe!==null&&st!==null&&pp(Q,st,oe,le,!0)}}e:{if(G=U?Hs(U):window,te=G.nodeName&&G.nodeName.toLowerCase(),te==="select"||te==="input"&&G.type==="file")var ce=dE;else if(Gf(G))if(Qf)ce=gE;else{ce=pE;var me=fE}else(te=G.nodeName)&&te.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(ce=mE);if(ce&&(ce=ce(n,U))){Kf(Q,ce,a,K);break e}me&&me(n,G,U),n==="focusout"&&(me=G._wrapperState)&&me.controlled&&G.type==="number"&&ms(G,"number",G.value)}switch(me=U?Hs(U):window,n){case"focusin":(Gf(me)||me.contentEditable==="true")&&(zs=me,bc=U,sa=null);break;case"focusout":sa=bc=zs=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,rp(Q,a,K);break;case"selectionchange":if(vE)break;case"keydown":case"keyup":rp(Q,a,K)}var ge;if(at)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Us?qf(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(zi&&a.locale!=="ko"&&(Us||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Us&&(ge=Jo()):(sn=K,Ns="value"in sn?sn.value:sn.textContent,Us=!0)),me=Vl(U,_e),0<me.length&&(_e=new ta(_e,n,null,a,K),Q.push({event:_e,listeners:me}),ge?_e.data=ge:(ge=Wf(a),ge!==null&&(_e.data=ge)))),(ge=on?lE(n,a):uE(n,a))&&(U=Vl(U,"onBeforeInput"),0<U.length&&(K=new ta("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:U}),K.data=ge))}dp(Q,r)})}function la(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Vl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=it(n,a),p!=null&&c.unshift(la(n,p,d)),p=it(n,r),p!=null&&c.push(la(n,p,d))),n=n.return}return c}function Bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function pp(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var T=a,k=T.alternate,U=T.stateNode;if(k!==null&&k===c)break;T.tag===5&&U!==null&&(T=U,d?(k=it(a,p),k!=null&&_.unshift(la(a,k,T))):d||(k=it(a,p),k!=null&&_.push(la(a,k,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var IE=/\r\n?/g,SE=/\u0000|\uFFFD/g;function mp(n){return(typeof n=="string"?n:""+n).replace(IE,`
`).replace(SE,"")}function Ol(n,r,a){if(r=mp(r),mp(n)!==r&&a)throw Error(t(425))}function xl(){}var Hc=null,qc=null;function Wc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,AE=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,RE=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(n){return gp.resolve(null).then(n).catch(kE)}:Gc;function kE(n){setTimeout(function(){throw n})}function Kc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Pn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Pn(r)}function Wr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function yp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Xn="__reactFiber$"+$s,ua="__reactProps$"+$s,_r="__reactContainer$"+$s,Qc="__reactEvents$"+$s,CE="__reactListeners$"+$s,PE="__reactHandles$"+$s;function ji(n){var r=n[Xn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[_r]||a[Xn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=yp(n);n!==null;){if(a=n[Xn])return a;n=yp(n)}return r}n=a,a=n.parentNode}return null}function ca(n){return n=n[Xn]||n[_r],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ml(n){return n[ua]||null}var Xc=[],qs=-1;function Gr(n){return{current:n}}function Xe(n){0>qs||(n.current=Xc[qs],Xc[qs]=null,qs--)}function Ge(n,r){qs++,Xc[qs]=n.current,n.current=r}var Kr={},xt=Gr(Kr),Kt=Gr(!1),Bi=Kr;function Ws(n,r){var a=n.type.contextTypes;if(!a)return Kr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(n){return n=n.childContextTypes,n!=null}function Ll(){Xe(Kt),Xe(xt)}function _p(n,r,a){if(xt.current!==Kr)throw Error(t(168));Ge(xt,r),Ge(Kt,a)}function vp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Fe(n)||"Unknown",d));return ie({},a,c)}function bl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Kr,Bi=xt.current,Ge(xt,n),Ge(Kt,Kt.current),!0}function Ep(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=vp(n,r,Bi),c.__reactInternalMemoizedMergedChildContext=n,Xe(Kt),Xe(xt),Ge(xt,n)):Xe(Kt),Ge(Kt,a)}var vr=null,Fl=!1,Yc=!1;function wp(n){vr===null?vr=[n]:vr.push(n)}function NE(n){Fl=!0,wp(n)}function Qr(){if(!Yc&&vr!==null){Yc=!0;var n=0,r=Ne;try{var a=vr;for(Ne=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}vr=null,Fl=!1}catch(d){throw vr!==null&&(vr=vr.slice(n+1)),As(Oi,Qr),d}finally{Ne=r,Yc=!1}}return null}var Gs=[],Ks=0,Ul=null,zl=0,mn=[],gn=0,$i=null,Er=1,wr="";function Hi(n,r){Gs[Ks++]=zl,Gs[Ks++]=Ul,Ul=n,zl=r}function Tp(n,r,a){mn[gn++]=Er,mn[gn++]=wr,mn[gn++]=$i,$i=n;var c=Er;n=wr;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var p=32-Bt(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,Er=1<<32-Bt(r)+d|a<<d|c,wr=p+n}else Er=1<<p|a<<d|c,wr=n}function Jc(n){n.return!==null&&(Hi(n,1),Tp(n,1,0))}function Zc(n){for(;n===Ul;)Ul=Gs[--Ks],Gs[Ks]=null,zl=Gs[--Ks],Gs[Ks]=null;for(;n===$i;)$i=mn[--gn],mn[gn]=null,wr=mn[--gn],mn[gn]=null,Er=mn[--gn],mn[gn]=null}var an=null,ln=null,Ze=!1,Vn=null;function Ip(n,r){var a=En(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Sp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,an=n,ln=Wr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,an=n,ln=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=$i!==null?{id:Er,overflow:wr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=En(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,an=n,ln=null,!0):!1;default:return!1}}function eh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function th(n){if(Ze){var r=ln;if(r){var a=r;if(!Sp(n,r)){if(eh(n))throw Error(t(418));r=Wr(a.nextSibling);var c=an;r&&Sp(n,r)?Ip(c,a):(n.flags=n.flags&-4097|2,Ze=!1,an=n)}}else{if(eh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ze=!1,an=n}}}function Ap(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function jl(n){if(n!==an)return!1;if(!Ze)return Ap(n),Ze=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Wc(n.type,n.memoizedProps)),r&&(r=ln)){if(eh(n))throw Rp(),Error(t(418));for(;r;)Ip(n,r),r=Wr(r.nextSibling)}if(Ap(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){ln=Wr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}ln=null}}else ln=an?Wr(n.stateNode.nextSibling):null;return!0}function Rp(){for(var n=ln;n;)n=Wr(n.nextSibling)}function Qs(){ln=an=null,Ze=!1}function nh(n){Vn===null?Vn=[n]:Vn.push(n)}var DE=Te.ReactCurrentBatchConfig;function ha(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Bl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function kp(n){var r=n._init;return r(n._payload)}function Cp(n){function r(L,N){if(n){var F=L.deletions;F===null?(L.deletions=[N],L.flags|=16):F.push(N)}}function a(L,N){if(!n)return null;for(;N!==null;)r(L,N),N=N.sibling;return null}function c(L,N){for(L=new Map;N!==null;)N.key!==null?L.set(N.key,N):L.set(N.index,N),N=N.sibling;return L}function d(L,N){return L=ri(L,N),L.index=0,L.sibling=null,L}function p(L,N,F){return L.index=F,n?(F=L.alternate,F!==null?(F=F.index,F<N?(L.flags|=2,N):F):(L.flags|=2,N)):(L.flags|=1048576,N)}function _(L){return n&&L.alternate===null&&(L.flags|=2),L}function T(L,N,F,J){return N===null||N.tag!==6?(N=Gh(F,L.mode,J),N.return=L,N):(N=d(N,F),N.return=L,N)}function k(L,N,F,J){var ce=F.type;return ce===D?K(L,N,F.props.children,J,F.key):N!==null&&(N.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===$e&&kp(ce)===N.type)?(J=d(N,F.props),J.ref=ha(L,N,F),J.return=L,J):(J=du(F.type,F.key,F.props,null,L.mode,J),J.ref=ha(L,N,F),J.return=L,J)}function U(L,N,F,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==F.containerInfo||N.stateNode.implementation!==F.implementation?(N=Kh(F,L.mode,J),N.return=L,N):(N=d(N,F.children||[]),N.return=L,N)}function K(L,N,F,J,ce){return N===null||N.tag!==7?(N=Ji(F,L.mode,J,ce),N.return=L,N):(N=d(N,F),N.return=L,N)}function Q(L,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Gh(""+N,L.mode,F),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Be:return F=du(N.type,N.key,N.props,null,L.mode,F),F.ref=ha(L,null,N),F.return=L,F;case Ie:return N=Kh(N,L.mode,F),N.return=L,N;case $e:var J=N._init;return Q(L,J(N._payload),F)}if(ur(N)||ue(N))return N=Ji(N,L.mode,F,null),N.return=L,N;Bl(L,N)}return null}function G(L,N,F,J){var ce=N!==null?N.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ce!==null?null:T(L,N,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Be:return F.key===ce?k(L,N,F,J):null;case Ie:return F.key===ce?U(L,N,F,J):null;case $e:return ce=F._init,G(L,N,ce(F._payload),J)}if(ur(F)||ue(F))return ce!==null?null:K(L,N,F,J,null);Bl(L,F)}return null}function te(L,N,F,J,ce){if(typeof J=="string"&&J!==""||typeof J=="number")return L=L.get(F)||null,T(N,L,""+J,ce);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Be:return L=L.get(J.key===null?F:J.key)||null,k(N,L,J,ce);case Ie:return L=L.get(J.key===null?F:J.key)||null,U(N,L,J,ce);case $e:var me=J._init;return te(L,N,F,me(J._payload),ce)}if(ur(J)||ue(J))return L=L.get(F)||null,K(N,L,J,ce,null);Bl(N,J)}return null}function oe(L,N,F,J){for(var ce=null,me=null,ge=N,_e=N=0,St=null;ge!==null&&_e<F.length;_e++){ge.index>_e?(St=ge,ge=null):St=ge.sibling;var be=G(L,ge,F[_e],J);if(be===null){ge===null&&(ge=St);break}n&&ge&&be.alternate===null&&r(L,ge),N=p(be,N,_e),me===null?ce=be:me.sibling=be,me=be,ge=St}if(_e===F.length)return a(L,ge),Ze&&Hi(L,_e),ce;if(ge===null){for(;_e<F.length;_e++)ge=Q(L,F[_e],J),ge!==null&&(N=p(ge,N,_e),me===null?ce=ge:me.sibling=ge,me=ge);return Ze&&Hi(L,_e),ce}for(ge=c(L,ge);_e<F.length;_e++)St=te(ge,L,_e,F[_e],J),St!==null&&(n&&St.alternate!==null&&ge.delete(St.key===null?_e:St.key),N=p(St,N,_e),me===null?ce=St:me.sibling=St,me=St);return n&&ge.forEach(function(ii){return r(L,ii)}),Ze&&Hi(L,_e),ce}function le(L,N,F,J){var ce=ue(F);if(typeof ce!="function")throw Error(t(150));if(F=ce.call(F),F==null)throw Error(t(151));for(var me=ce=null,ge=N,_e=N=0,St=null,be=F.next();ge!==null&&!be.done;_e++,be=F.next()){ge.index>_e?(St=ge,ge=null):St=ge.sibling;var ii=G(L,ge,be.value,J);if(ii===null){ge===null&&(ge=St);break}n&&ge&&ii.alternate===null&&r(L,ge),N=p(ii,N,_e),me===null?ce=ii:me.sibling=ii,me=ii,ge=St}if(be.done)return a(L,ge),Ze&&Hi(L,_e),ce;if(ge===null){for(;!be.done;_e++,be=F.next())be=Q(L,be.value,J),be!==null&&(N=p(be,N,_e),me===null?ce=be:me.sibling=be,me=be);return Ze&&Hi(L,_e),ce}for(ge=c(L,ge);!be.done;_e++,be=F.next())be=te(ge,L,_e,be.value,J),be!==null&&(n&&be.alternate!==null&&ge.delete(be.key===null?_e:be.key),N=p(be,N,_e),me===null?ce=be:me.sibling=be,me=be);return n&&ge.forEach(function(c0){return r(L,c0)}),Ze&&Hi(L,_e),ce}function st(L,N,F,J){if(typeof F=="object"&&F!==null&&F.type===D&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Be:e:{for(var ce=F.key,me=N;me!==null;){if(me.key===ce){if(ce=F.type,ce===D){if(me.tag===7){a(L,me.sibling),N=d(me,F.props.children),N.return=L,L=N;break e}}else if(me.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===$e&&kp(ce)===me.type){a(L,me.sibling),N=d(me,F.props),N.ref=ha(L,me,F),N.return=L,L=N;break e}a(L,me);break}else r(L,me);me=me.sibling}F.type===D?(N=Ji(F.props.children,L.mode,J,F.key),N.return=L,L=N):(J=du(F.type,F.key,F.props,null,L.mode,J),J.ref=ha(L,N,F),J.return=L,L=J)}return _(L);case Ie:e:{for(me=F.key;N!==null;){if(N.key===me)if(N.tag===4&&N.stateNode.containerInfo===F.containerInfo&&N.stateNode.implementation===F.implementation){a(L,N.sibling),N=d(N,F.children||[]),N.return=L,L=N;break e}else{a(L,N);break}else r(L,N);N=N.sibling}N=Kh(F,L.mode,J),N.return=L,L=N}return _(L);case $e:return me=F._init,st(L,N,me(F._payload),J)}if(ur(F))return oe(L,N,F,J);if(ue(F))return le(L,N,F,J);Bl(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,N!==null&&N.tag===6?(a(L,N.sibling),N=d(N,F),N.return=L,L=N):(a(L,N),N=Gh(F,L.mode,J),N.return=L,L=N),_(L)):a(L,N)}return st}var Xs=Cp(!0),Pp=Cp(!1),$l=Gr(null),Hl=null,Ys=null,rh=null;function ih(){rh=Ys=Hl=null}function sh(n){var r=$l.current;Xe($l),n._currentValue=r}function oh(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Js(n,r){Hl=n,rh=Ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Xt=!0),n.firstContext=null)}function yn(n){var r=n._currentValue;if(rh!==n)if(n={context:n,memoizedValue:r,next:null},Ys===null){if(Hl===null)throw Error(t(308));Ys=n,Hl.dependencies={lanes:0,firstContext:n}}else Ys=Ys.next=n;return r}var qi=null;function ah(n){qi===null?qi=[n]:qi.push(n)}function Np(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,ah(r)):(a.next=d.next,d.next=a),r.interleaved=a,Tr(n,c)}function Tr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Xr=!1;function lh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ir(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Yr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Tr(n,a)}return d=c.interleaved,d===null?(r.next=r,ah(c)):(r.next=d.next,d.next=r),c.interleaved=r,Tr(n,a)}function ql(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,zr(n,a)}}function Vp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Wl(n,r,a,c){var d=n.updateQueue;Xr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var k=T,U=k.next;k.next=null,_===null?p=U:_.next=U,_=k;var K=n.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==_&&(T===null?K.firstBaseUpdate=U:T.next=U,K.lastBaseUpdate=k))}if(p!==null){var Q=d.baseState;_=0,K=U=k=null,T=p;do{var G=T.lane,te=T.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:te,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var oe=n,le=T;switch(G=r,te=a,le.tag){case 1:if(oe=le.payload,typeof oe=="function"){Q=oe.call(te,Q,G);break e}Q=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=le.payload,G=typeof oe=="function"?oe.call(te,Q,G):oe,G==null)break e;Q=ie({},Q,G);break e;case 2:Xr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[T]:G.push(T))}else te={eventTime:te,lane:G,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(U=K=te,k=Q):K=K.next=te,_|=G;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;G=T,T=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(K===null&&(k=Q),d.baseState=k,d.firstBaseUpdate=U,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Ki|=_,n.lanes=_,n.memoizedState=Q}}function Op(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var da={},Yn=Gr(da),fa=Gr(da),pa=Gr(da);function Wi(n){if(n===da)throw Error(t(174));return n}function uh(n,r){switch(Ge(pa,r),Ge(fa,n),Ge(Yn,da),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:mt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=mt(r,n)}Xe(Yn),Ge(Yn,r)}function Zs(){Xe(Yn),Xe(fa),Xe(pa)}function xp(n){Wi(pa.current);var r=Wi(Yn.current),a=mt(r,n.type);r!==a&&(Ge(fa,n),Ge(Yn,a))}function ch(n){fa.current===n&&(Xe(Yn),Xe(fa))}var et=Gr(0);function Gl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var hh=[];function dh(){for(var n=0;n<hh.length;n++)hh[n]._workInProgressVersionPrimary=null;hh.length=0}var Kl=Te.ReactCurrentDispatcher,fh=Te.ReactCurrentBatchConfig,Gi=0,tt=null,yt=null,Tt=null,Ql=!1,ma=!1,ga=0,VE=0;function Mt(){throw Error(t(321))}function ph(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Dn(n[a],r[a]))return!1;return!0}function mh(n,r,a,c,d,p){if(Gi=p,tt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Kl.current=n===null||n.memoizedState===null?LE:bE,n=a(c,d),ma){p=0;do{if(ma=!1,ga=0,25<=p)throw Error(t(301));p+=1,Tt=yt=null,r.updateQueue=null,Kl.current=FE,n=a(c,d)}while(ma)}if(Kl.current=Jl,r=yt!==null&&yt.next!==null,Gi=0,Tt=yt=tt=null,Ql=!1,r)throw Error(t(300));return n}function gh(){var n=ga!==0;return ga=0,n}function Jn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?tt.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function _n(){if(yt===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var r=Tt===null?tt.memoizedState:Tt.next;if(r!==null)Tt=r,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Tt===null?tt.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function ya(n,r){return typeof r=="function"?r(n):r}function yh(n){var r=_n(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,k=null,U=p;do{var K=U.lane;if((Gi&K)===K)k!==null&&(k=k.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var Q={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};k===null?(T=k=Q,_=c):k=k.next=Q,tt.lanes|=K,Ki|=K}U=U.next}while(U!==null&&U!==p);k===null?_=c:k.next=T,Dn(c,r.memoizedState)||(Xt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,tt.lanes|=p,Ki|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function _h(n){var r=_n(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Dn(p,r.memoizedState)||(Xt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function Mp(){}function Lp(n,r){var a=tt,c=_n(),d=r(),p=!Dn(c.memoizedState,d);if(p&&(c.memoizedState=d,Xt=!0),c=c.queue,vh(Up.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,_a(9,Fp.bind(null,a,c,d,r),void 0,null),It===null)throw Error(t(349));(Gi&30)!==0||bp(a,r,d)}return d}function bp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=tt.updateQueue,r===null?(r={lastEffect:null,stores:null},tt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Fp(n,r,a,c){r.value=a,r.getSnapshot=c,zp(r)&&jp(n)}function Up(n,r,a){return a(function(){zp(r)&&jp(n)})}function zp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Dn(n,a)}catch{return!0}}function jp(n){var r=Tr(n,1);r!==null&&Ln(r,n,1,-1)}function Bp(n){var r=Jn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:n},r.queue=n,n=n.dispatch=ME.bind(null,tt,n),[r.memoizedState,n]}function _a(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=tt.updateQueue,r===null?(r={lastEffect:null,stores:null},tt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function $p(){return _n().memoizedState}function Xl(n,r,a,c){var d=Jn();tt.flags|=n,d.memoizedState=_a(1|r,a,void 0,c===void 0?null:c)}function Yl(n,r,a,c){var d=_n();c=c===void 0?null:c;var p=void 0;if(yt!==null){var _=yt.memoizedState;if(p=_.destroy,c!==null&&ph(c,_.deps)){d.memoizedState=_a(r,a,p,c);return}}tt.flags|=n,d.memoizedState=_a(1|r,a,p,c)}function Hp(n,r){return Xl(8390656,8,n,r)}function vh(n,r){return Yl(2048,8,n,r)}function qp(n,r){return Yl(4,2,n,r)}function Wp(n,r){return Yl(4,4,n,r)}function Gp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Kp(n,r,a){return a=a!=null?a.concat([n]):null,Yl(4,4,Gp.bind(null,r,n),a)}function Eh(){}function Qp(n,r){var a=_n();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&ph(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Xp(n,r){var a=_n();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&ph(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Yp(n,r,a){return(Gi&21)===0?(n.baseState&&(n.baseState=!1,Xt=!0),n.memoizedState=a):(Dn(a,r)||(a=Li(),tt.lanes|=a,Ki|=a,n.baseState=!0),r)}function OE(n,r){var a=Ne;Ne=a!==0&&4>a?a:4,n(!0);var c=fh.transition;fh.transition={};try{n(!1),r()}finally{Ne=a,fh.transition=c}}function Jp(){return _n().memoizedState}function xE(n,r,a){var c=ti(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Zp(n))em(r,a);else if(a=Np(n,r,a,c),a!==null){var d=qt();Ln(a,n,c,d),tm(a,r,c)}}function ME(n,r,a){var c=ti(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zp(n))em(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,Dn(T,_)){var k=r.interleaved;k===null?(d.next=d,ah(r)):(d.next=k.next,k.next=d),r.interleaved=d;return}}catch{}finally{}a=Np(n,r,d,c),a!==null&&(d=qt(),Ln(a,n,c,d),tm(a,r,c))}}function Zp(n){var r=n.alternate;return n===tt||r!==null&&r===tt}function em(n,r){ma=Ql=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function tm(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,zr(n,a)}}var Jl={readContext:yn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},LE={readContext:yn,useCallback:function(n,r){return Jn().memoizedState=[n,r===void 0?null:r],n},useContext:yn,useEffect:Hp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Xl(4194308,4,Gp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Xl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Xl(4,2,n,r)},useMemo:function(n,r){var a=Jn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Jn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=xE.bind(null,tt,n),[c.memoizedState,n]},useRef:function(n){var r=Jn();return n={current:n},r.memoizedState=n},useState:Bp,useDebugValue:Eh,useDeferredValue:function(n){return Jn().memoizedState=n},useTransition:function(){var n=Bp(!1),r=n[0];return n=OE.bind(null,n[1]),Jn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=tt,d=Jn();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),It===null)throw Error(t(349));(Gi&30)!==0||bp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,Hp(Up.bind(null,c,p,n),[n]),c.flags|=2048,_a(9,Fp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Jn(),r=It.identifierPrefix;if(Ze){var a=wr,c=Er;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ga++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=VE++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},bE={readContext:yn,useCallback:Qp,useContext:yn,useEffect:vh,useImperativeHandle:Kp,useInsertionEffect:qp,useLayoutEffect:Wp,useMemo:Xp,useReducer:yh,useRef:$p,useState:function(){return yh(ya)},useDebugValue:Eh,useDeferredValue:function(n){var r=_n();return Yp(r,yt.memoizedState,n)},useTransition:function(){var n=yh(ya)[0],r=_n().memoizedState;return[n,r]},useMutableSource:Mp,useSyncExternalStore:Lp,useId:Jp,unstable_isNewReconciler:!1},FE={readContext:yn,useCallback:Qp,useContext:yn,useEffect:vh,useImperativeHandle:Kp,useInsertionEffect:qp,useLayoutEffect:Wp,useMemo:Xp,useReducer:_h,useRef:$p,useState:function(){return _h(ya)},useDebugValue:Eh,useDeferredValue:function(n){var r=_n();return yt===null?r.memoizedState=n:Yp(r,yt.memoizedState,n)},useTransition:function(){var n=_h(ya)[0],r=_n().memoizedState;return[n,r]},useMutableSource:Mp,useSyncExternalStore:Lp,useId:Jp,unstable_isNewReconciler:!1};function On(n,r){if(n&&n.defaultProps){r=ie({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function wh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ie({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Zl={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=qt(),d=ti(n),p=Ir(c,d);p.payload=r,a!=null&&(p.callback=a),r=Yr(n,p,d),r!==null&&(Ln(r,n,d,c),ql(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=qt(),d=ti(n),p=Ir(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Yr(n,p,d),r!==null&&(Ln(r,n,d,c),ql(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=qt(),c=ti(n),d=Ir(a,c);d.tag=2,r!=null&&(d.callback=r),r=Yr(n,d,c),r!==null&&(Ln(r,n,c,a),ql(r,n,c))}};function nm(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!ia(a,c)||!ia(d,p):!0}function rm(n,r,a){var c=!1,d=Kr,p=r.contextType;return typeof p=="object"&&p!==null?p=yn(p):(d=Qt(r)?Bi:xt.current,c=r.contextTypes,p=(c=c!=null)?Ws(n,d):Kr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Zl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function im(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Zl.enqueueReplaceState(r,r.state,null)}function Th(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},lh(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=yn(p):(p=Qt(r)?Bi:xt.current,d.context=Ws(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(wh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Zl.enqueueReplaceState(d,d.state,null),Wl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function eo(n,r){try{var a="",c=r;do a+=Re(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function Ih(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Sh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var UE=typeof WeakMap=="function"?WeakMap:Map;function sm(n,r,a){a=Ir(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){ou||(ou=!0,Uh=c),Sh(n,r)},a}function om(n,r,a){a=Ir(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){Sh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Sh(n,r),typeof c!="function"&&(Zr===null?Zr=new Set([this]):Zr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function am(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new UE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=ZE.bind(null,n,r,a),r.then(n,n))}function lm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function um(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Ir(-1,1),r.tag=2,Yr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var zE=Te.ReactCurrentOwner,Xt=!1;function Ht(n,r,a,c){r.child=n===null?Pp(r,null,a,c):Xs(r,n.child,a,c)}function cm(n,r,a,c,d){a=a.render;var p=r.ref;return Js(r,d),c=mh(n,r,a,c,p,d),a=gh(),n!==null&&!Xt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Sr(n,r,d)):(Ze&&a&&Jc(r),r.flags|=1,Ht(n,r,c,d),r.child)}function hm(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Wh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,dm(n,r,p,c,d)):(n=du(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:ia,a(_,c)&&n.ref===r.ref)return Sr(n,r,d)}return r.flags|=1,n=ri(p,c),n.ref=r.ref,n.return=r,r.child=n}function dm(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(ia(p,c)&&n.ref===r.ref)if(Xt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Xt=!0);else return r.lanes=n.lanes,Sr(n,r,d)}return Ah(n,r,a,c,d)}function fm(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(no,un),un|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ge(no,un),un|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Ge(no,un),un|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,Ge(no,un),un|=c;return Ht(n,r,d,a),r.child}function pm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Ah(n,r,a,c,d){var p=Qt(a)?Bi:xt.current;return p=Ws(r,p),Js(r,d),a=mh(n,r,a,c,p,d),c=gh(),n!==null&&!Xt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Sr(n,r,d)):(Ze&&c&&Jc(r),r.flags|=1,Ht(n,r,a,d),r.child)}function mm(n,r,a,c,d){if(Qt(a)){var p=!0;bl(r)}else p=!1;if(Js(r,d),r.stateNode===null)tu(n,r),rm(r,a,c),Th(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var k=_.context,U=a.contextType;typeof U=="object"&&U!==null?U=yn(U):(U=Qt(a)?Bi:xt.current,U=Ws(r,U));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof _.getSnapshotBeforeUpdate=="function";Q||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||k!==U)&&im(r,_,c,U),Xr=!1;var G=r.memoizedState;_.state=G,Wl(r,c,_,d),k=r.memoizedState,T!==c||G!==k||Kt.current||Xr?(typeof K=="function"&&(wh(r,a,K,c),k=r.memoizedState),(T=Xr||nm(r,a,T,c,G,k,U))?(Q||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=k),_.props=c,_.state=k,_.context=U,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,Dp(n,r),T=r.memoizedProps,U=r.type===r.elementType?T:On(r.type,T),_.props=U,Q=r.pendingProps,G=_.context,k=a.contextType,typeof k=="object"&&k!==null?k=yn(k):(k=Qt(a)?Bi:xt.current,k=Ws(r,k));var te=a.getDerivedStateFromProps;(K=typeof te=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==Q||G!==k)&&im(r,_,c,k),Xr=!1,G=r.memoizedState,_.state=G,Wl(r,c,_,d);var oe=r.memoizedState;T!==Q||G!==oe||Kt.current||Xr?(typeof te=="function"&&(wh(r,a,te,c),oe=r.memoizedState),(U=Xr||nm(r,a,U,c,G,oe,k)||!1)?(K||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,oe,k),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,oe,k)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=oe),_.props=c,_.state=oe,_.context=k,c=U):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),c=!1)}return Rh(n,r,a,c,p,d)}function Rh(n,r,a,c,d,p){pm(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Ep(r,a,!1),Sr(n,r,p);c=r.stateNode,zE.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Xs(r,n.child,null,p),r.child=Xs(r,null,T,p)):Ht(n,r,T,p),r.memoizedState=c.state,d&&Ep(r,a,!0),r.child}function gm(n){var r=n.stateNode;r.pendingContext?_p(n,r.pendingContext,r.pendingContext!==r.context):r.context&&_p(n,r.context,!1),uh(n,r.containerInfo)}function ym(n,r,a,c,d){return Qs(),nh(d),r.flags|=256,Ht(n,r,a,c),r.child}var kh={dehydrated:null,treeContext:null,retryLane:0};function Ch(n){return{baseLanes:n,cachePool:null,transitions:null}}function _m(n,r,a){var c=r.pendingProps,d=et.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ge(et,d&1),n===null)return th(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=fu(_,c,0,null),n=Ji(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=Ch(a),r.memoizedState=kh,n):Ph(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return jE(n,r,_,c,T,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,T=d.sibling;var k={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=k,r.deletions=null):(c=ri(d,k),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=ri(T,p):(p=Ji(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?Ch(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=kh,c}return p=n.child,n=p.sibling,c=ri(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Ph(n,r){return r=fu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function eu(n,r,a,c){return c!==null&&nh(c),Xs(r,n.child,null,a),n=Ph(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function jE(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=Ih(Error(t(422))),eu(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=fu({mode:"visible",children:c.children},d,0,null),p=Ji(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Xs(r,n.child,null,_),r.child.memoizedState=Ch(_),r.memoizedState=kh,p);if((r.mode&1)===0)return eu(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=Ih(p,c,void 0),eu(n,r,_,c)}if(T=(_&n.childLanes)!==0,Xt||T){if(c=It,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Tr(n,d),Ln(c,n,d,-1))}return qh(),c=Ih(Error(t(421))),eu(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=e0.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,ln=Wr(d.nextSibling),an=r,Ze=!0,Vn=null,n!==null&&(mn[gn++]=Er,mn[gn++]=wr,mn[gn++]=$i,Er=n.id,wr=n.overflow,$i=r),r=Ph(r,c.children),r.flags|=4096,r)}function vm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),oh(n.return,r,a)}function Nh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Em(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(Ht(n,r,c.children,a),c=et.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vm(n,a,r);else if(n.tag===19)vm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ge(et,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Gl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Nh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Gl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Nh(r,!0,a,null,p);break;case"together":Nh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function tu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Sr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Ki|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ri(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ri(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function BE(n,r,a){switch(r.tag){case 3:gm(r),Qs();break;case 5:xp(r);break;case 1:Qt(r.type)&&bl(r);break;case 4:uh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;Ge($l,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Ge(et,et.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?_m(n,r,a):(Ge(et,et.current&1),n=Sr(n,r,a),n!==null?n.sibling:null);Ge(et,et.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Em(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(et,et.current),c)break;return null;case 22:case 23:return r.lanes=0,fm(n,r,a)}return Sr(n,r,a)}var wm,Dh,Tm,Im;wm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Dh=function(){},Tm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Wi(Yn.current);var p=null;switch(a){case"input":d=Ai(n,d),c=Ai(n,c),p=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),p=[];break;case"textarea":d=Oo(n,d),c=Oo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=xl)}Uo(a,c);var _;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var T=d[U];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in c){var k=c[U];if(T=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&k!==T&&(k!=null||T!=null))if(U==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||k&&k.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in k)k.hasOwnProperty(_)&&T[_]!==k[_]&&(a||(a={}),a[_]=k[_])}else a||(p||(p=[]),p.push(U,a)),a=k;else U==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,T=T?T.__html:void 0,k!=null&&T!==k&&(p=p||[]).push(U,k)):U==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(U,""+k):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(k!=null&&U==="onScroll"&&Qe("scroll",n),p||T===k||(p=[])):(p=p||[]).push(U,k))}a&&(p=p||[]).push("style",a);var U=p;(r.updateQueue=U)&&(r.flags|=4)}},Im=function(n,r,a,c){a!==c&&(r.flags|=4)};function va(n,r){if(!Ze)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function $E(n,r,a){var c=r.pendingProps;switch(Zc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(r),null;case 1:return Qt(r.type)&&Ll(),Lt(r),null;case 3:return c=r.stateNode,Zs(),Xe(Kt),Xe(xt),dh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(jl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vn!==null&&(Bh(Vn),Vn=null))),Dh(n,r),Lt(r),null;case 5:ch(r);var d=Wi(pa.current);if(a=r.type,n!==null&&r.stateNode!=null)Tm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Lt(r),null}if(n=Wi(Yn.current),jl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Xn]=r,c[ua]=p,n=(r.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<oa.length;d++)Qe(oa[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":ps(c,p),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Qe("invalid",c);break;case"textarea":gs(c,p),Qe("invalid",c)}Uo(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&Ol(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&Ol(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&Qe("scroll",c)}switch(a){case"input":lr(c),sl(c,p,!0);break;case"textarea":lr(c),xo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=xl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Xn]=r,n[ua]=c,wm(n,r,!1,!1),r.stateNode=n;e:{switch(_=zo(a,c),a){case"dialog":Qe("cancel",n),Qe("close",n),d=c;break;case"iframe":case"object":case"embed":Qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<oa.length;d++)Qe(oa[d],n);d=c;break;case"source":Qe("error",n),d=c;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),d=c;break;case"details":Qe("toggle",n),d=c;break;case"input":ps(n,c),d=Ai(n,c),Qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),Qe("invalid",n);break;case"textarea":gs(n,c),d=Oo(n,c),Qe("invalid",n);break;default:d=c}Uo(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var k=T[p];p==="style"?bo(n,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Mo(n,k)):p==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Mr(n,k):typeof k=="number"&&Mr(n,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Qe("scroll",n):k!=null&&ae(n,p,k,_))}switch(a){case"input":lr(n),sl(n,c,!1);break;case"textarea":lr(n),xo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ue(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?cr(n,!!c.multiple,p,!1):c.defaultValue!=null&&cr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=xl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Lt(r),null;case 6:if(n&&r.stateNode!=null)Im(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Wi(pa.current),Wi(Yn.current),jl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Xn]=r,(p=c.nodeValue!==a)&&(n=an,n!==null))switch(n.tag){case 3:Ol(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ol(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Xn]=r,r.stateNode=c}return Lt(r),null;case 13:if(Xe(et),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ze&&ln!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Rp(),Qs(),r.flags|=98560,p=!1;else if(p=jl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Xn]=r}else Qs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Lt(r),p=!1}else Vn!==null&&(Bh(Vn),Vn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(et.current&1)!==0?_t===0&&(_t=3):qh())),r.updateQueue!==null&&(r.flags|=4),Lt(r),null);case 4:return Zs(),Dh(n,r),n===null&&aa(r.stateNode.containerInfo),Lt(r),null;case 10:return sh(r.type._context),Lt(r),null;case 17:return Qt(r.type)&&Ll(),Lt(r),null;case 19:if(Xe(et),p=r.memoizedState,p===null)return Lt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)va(p,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Gl(n),_!==null){for(r.flags|=128,va(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ge(et,et.current&1|2),r.child}n=n.sibling}p.tail!==null&&We()>ro&&(r.flags|=128,c=!0,va(p,!1),r.lanes=4194304)}else{if(!c)if(n=Gl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),va(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ze)return Lt(r),null}else 2*We()-p.renderingStartTime>ro&&a!==1073741824&&(r.flags|=128,c=!0,va(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=We(),r.sibling=null,a=et.current,Ge(et,c?a&1|2:a&1),r):(Lt(r),null);case 22:case 23:return Hh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(un&1073741824)!==0&&(Lt(r),r.subtreeFlags&6&&(r.flags|=8192)):Lt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function HE(n,r){switch(Zc(r),r.tag){case 1:return Qt(r.type)&&Ll(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Zs(),Xe(Kt),Xe(xt),dh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ch(r),null;case 13:if(Xe(et),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Qs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Xe(et),null;case 4:return Zs(),null;case 10:return sh(r.type._context),null;case 22:case 23:return Hh(),null;case 24:return null;default:return null}}var nu=!1,bt=!1,qE=typeof WeakSet=="function"?WeakSet:Set,se=null;function to(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(n,r,c)}else a.current=null}function Vh(n,r,a){try{a()}catch(c){rt(n,r,c)}}var Sm=!1;function WE(n,r){if(Hc=$r,n=np(),Lc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,k=-1,U=0,K=0,Q=n,G=null;t:for(;;){for(var te;Q!==a||d!==0&&Q.nodeType!==3||(T=_+d),Q!==p||c!==0&&Q.nodeType!==3||(k=_+c),Q.nodeType===3&&(_+=Q.nodeValue.length),(te=Q.firstChild)!==null;)G=Q,Q=te;for(;;){if(Q===n)break t;if(G===a&&++U===d&&(T=_),G===p&&++K===c&&(k=_),(te=Q.nextSibling)!==null)break;Q=G,G=Q.parentNode}Q=te}a=T===-1||k===-1?null:{start:T,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(qc={focusedElem:n,selectionRange:a},$r=!1,se=r;se!==null;)if(r=se,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,se=n;else for(;se!==null;){r=se;try{var oe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var le=oe.memoizedProps,st=oe.memoizedState,L=r.stateNode,N=L.getSnapshotBeforeUpdate(r.elementType===r.type?le:On(r.type,le),st);L.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){rt(r,r.return,J)}if(n=r.sibling,n!==null){n.return=r.return,se=n;break}se=r.return}return oe=Sm,Sm=!1,oe}function Ea(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Vh(r,a,p)}d=d.next}while(d!==c)}}function ru(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Oh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Am(n){var r=n.alternate;r!==null&&(n.alternate=null,Am(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Xn],delete r[ua],delete r[Qc],delete r[CE],delete r[PE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Rm(n){return n.tag===5||n.tag===3||n.tag===4}function km(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Rm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=xl));else if(c!==4&&(n=n.child,n!==null))for(xh(n,r,a),n=n.sibling;n!==null;)xh(n,r,a),n=n.sibling}function Mh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Mh(n,r,a),n=n.sibling;n!==null;)Mh(n,r,a),n=n.sibling}var Pt=null,xn=!1;function Jr(n,r,a){for(a=a.child;a!==null;)Cm(n,r,a),a=a.sibling}function Cm(n,r,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(xi,a)}catch{}switch(a.tag){case 5:bt||to(a,r);case 6:var c=Pt,d=xn;Pt=null,Jr(n,r,a),Pt=c,xn=d,Pt!==null&&(xn?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(xn?(n=Pt,a=a.stateNode,n.nodeType===8?Kc(n.parentNode,a):n.nodeType===1&&Kc(n,a),Pn(n)):Kc(Pt,a.stateNode));break;case 4:c=Pt,d=xn,Pt=a.stateNode.containerInfo,xn=!0,Jr(n,r,a),Pt=c,xn=d;break;case 0:case 11:case 14:case 15:if(!bt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&Vh(a,r,_),d=d.next}while(d!==c)}Jr(n,r,a);break;case 1:if(!bt&&(to(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){rt(a,r,T)}Jr(n,r,a);break;case 21:Jr(n,r,a);break;case 22:a.mode&1?(bt=(c=bt)||a.memoizedState!==null,Jr(n,r,a),bt=c):Jr(n,r,a);break;default:Jr(n,r,a)}}function Pm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new qE),r.forEach(function(c){var d=t0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Mn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:Pt=T.stateNode,xn=!1;break e;case 3:Pt=T.stateNode.containerInfo,xn=!0;break e;case 4:Pt=T.stateNode.containerInfo,xn=!0;break e}T=T.return}if(Pt===null)throw Error(t(160));Cm(p,_,d),Pt=null,xn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(U){rt(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Nm(r,n),r=r.sibling}function Nm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mn(r,n),Zn(n),c&4){try{Ea(3,n,n.return),ru(3,n)}catch(le){rt(n,n.return,le)}try{Ea(5,n,n.return)}catch(le){rt(n,n.return,le)}}break;case 1:Mn(r,n),Zn(n),c&512&&a!==null&&to(a,a.return);break;case 5:if(Mn(r,n),Zn(n),c&512&&a!==null&&to(a,a.return),n.flags&32){var d=n.stateNode;try{Mr(d,"")}catch(le){rt(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&Do(d,p),zo(T,_);var U=zo(T,p);for(_=0;_<k.length;_+=2){var K=k[_],Q=k[_+1];K==="style"?bo(d,Q):K==="dangerouslySetInnerHTML"?Mo(d,Q):K==="children"?Mr(d,Q):ae(d,K,Q,U)}switch(T){case"input":Vo(d,p);break;case"textarea":ys(d,p);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var te=p.value;te!=null?cr(d,!!p.multiple,te,!1):G!==!!p.multiple&&(p.defaultValue!=null?cr(d,!!p.multiple,p.defaultValue,!0):cr(d,!!p.multiple,p.multiple?[]:"",!1))}d[ua]=p}catch(le){rt(n,n.return,le)}}break;case 6:if(Mn(r,n),Zn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(le){rt(n,n.return,le)}}break;case 3:if(Mn(r,n),Zn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Pn(r.containerInfo)}catch(le){rt(n,n.return,le)}break;case 4:Mn(r,n),Zn(n);break;case 13:Mn(r,n),Zn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Fh=We())),c&4&&Pm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(bt=(U=bt)||K,Mn(r,n),bt=U):Mn(r,n),Zn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!K&&(n.mode&1)!==0)for(se=n,K=n.child;K!==null;){for(Q=se=K;se!==null;){switch(G=se,te=G.child,G.tag){case 0:case 11:case 14:case 15:Ea(4,G,G.return);break;case 1:to(G,G.return);var oe=G.stateNode;if(typeof oe.componentWillUnmount=="function"){c=G,a=G.return;try{r=c,oe.props=r.memoizedProps,oe.state=r.memoizedState,oe.componentWillUnmount()}catch(le){rt(c,a,le)}}break;case 5:to(G,G.return);break;case 22:if(G.memoizedState!==null){Om(Q);continue}}te!==null?(te.return=G,se=te):Om(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=Q.stateNode,k=Q.memoizedProps.style,_=k!=null&&k.hasOwnProperty("display")?k.display:null,T.style.display=Lo("display",_))}catch(le){rt(n,n.return,le)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=U?"":Q.memoizedProps}catch(le){rt(n,n.return,le)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Mn(r,n),Zn(n),c&4&&Pm(n);break;case 21:break;default:Mn(r,n),Zn(n)}}function Zn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Rm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Mr(d,""),c.flags&=-33);var p=km(n);Mh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=km(n);xh(n,T,_);break;default:throw Error(t(161))}}catch(k){rt(n,n.return,k)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function GE(n,r,a){se=n,Dm(n)}function Dm(n,r,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||nu;if(!_){var T=d.alternate,k=T!==null&&T.memoizedState!==null||bt;T=nu;var U=bt;if(nu=_,(bt=k)&&!U)for(se=d;se!==null;)_=se,k=_.child,_.tag===22&&_.memoizedState!==null?xm(d):k!==null?(k.return=_,se=k):xm(d);for(;p!==null;)se=p,Dm(p),p=p.sibling;se=d,nu=T,bt=U}Vm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,se=p):Vm(n)}}function Vm(n){for(;se!==null;){var r=se;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:bt||ru(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!bt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:On(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Op(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Op(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Pn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bt||r.flags&512&&Oh(r)}catch(G){rt(r,r.return,G)}}if(r===n){se=null;break}if(a=r.sibling,a!==null){a.return=r.return,se=a;break}se=r.return}}function Om(n){for(;se!==null;){var r=se;if(r===n){se=null;break}var a=r.sibling;if(a!==null){a.return=r.return,se=a;break}se=r.return}}function xm(n){for(;se!==null;){var r=se;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{ru(4,r)}catch(k){rt(r,a,k)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(k){rt(r,d,k)}}var p=r.return;try{Oh(r)}catch(k){rt(r,p,k)}break;case 5:var _=r.return;try{Oh(r)}catch(k){rt(r,_,k)}}}catch(k){rt(r,r.return,k)}if(r===n){se=null;break}var T=r.sibling;if(T!==null){T.return=r.return,se=T;break}se=r.return}}var KE=Math.ceil,iu=Te.ReactCurrentDispatcher,Lh=Te.ReactCurrentOwner,vn=Te.ReactCurrentBatchConfig,Le=0,It=null,lt=null,Nt=0,un=0,no=Gr(0),_t=0,wa=null,Ki=0,su=0,bh=0,Ta=null,Yt=null,Fh=0,ro=1/0,Ar=null,ou=!1,Uh=null,Zr=null,au=!1,ei=null,lu=0,Ia=0,zh=null,uu=-1,cu=0;function qt(){return(Le&6)!==0?We():uu!==-1?uu:uu=We()}function ti(n){return(n.mode&1)===0?1:(Le&2)!==0&&Nt!==0?Nt&-Nt:DE.transition!==null?(cu===0&&(cu=Li()),cu):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:Yo(n.type)),n)}function Ln(n,r,a,c){if(50<Ia)throw Ia=0,zh=null,Error(t(185));Ur(n,a,c),((Le&2)===0||n!==It)&&(n===It&&((Le&2)===0&&(su|=a),_t===4&&ni(n,Nt)),Jt(n,c),a===1&&Le===0&&(r.mode&1)===0&&(ro=We()+500,Fl&&Qr()))}function Jt(n,r){var a=n.callbackNode;fr(n,r);var c=Mi(n,n===It?Nt:0);if(c===0)a!==null&&Wo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Wo(a),r===1)n.tag===0?NE(Lm.bind(null,n)):wp(Lm.bind(null,n)),RE(function(){(Le&6)===0&&Qr()}),a=null;else{switch(jr(c)){case 1:a=Oi;break;case 4:a=Lr;break;case 16:a=dn;break;case 536870912:a=cl;break;default:a=dn}a=Hm(a,Mm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Mm(n,r){if(uu=-1,cu=0,(Le&6)!==0)throw Error(t(327));var a=n.callbackNode;if(io()&&n.callbackNode!==a)return null;var c=Mi(n,n===It?Nt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=hu(n,c);else{r=c;var d=Le;Le|=2;var p=Fm();(It!==n||Nt!==r)&&(Ar=null,ro=We()+500,Xi(n,r));do try{YE();break}catch(T){bm(n,T)}while(!0);ih(),iu.current=p,Le=d,lt!==null?r=0:(It=null,Nt=0,r=_t)}if(r!==0){if(r===2&&(d=rn(n),d!==0&&(c=d,r=jh(n,d))),r===1)throw a=wa,Xi(n,0),ni(n,c),Jt(n,We()),a;if(r===6)ni(n,c);else{if(d=n.current.alternate,(c&30)===0&&!QE(d)&&(r=hu(n,c),r===2&&(p=rn(n),p!==0&&(c=p,r=jh(n,p))),r===1))throw a=wa,Xi(n,0),ni(n,c),Jt(n,We()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Yi(n,Yt,Ar);break;case 3:if(ni(n,c),(c&130023424)===c&&(r=Fh+500-We(),10<r)){if(Mi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Gc(Yi.bind(null,n,Yt,Ar),r);break}Yi(n,Yt,Ar);break;case 4:if(ni(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Bt(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*KE(c/1960))-c,10<c){n.timeoutHandle=Gc(Yi.bind(null,n,Yt,Ar),c);break}Yi(n,Yt,Ar);break;case 5:Yi(n,Yt,Ar);break;default:throw Error(t(329))}}}return Jt(n,We()),n.callbackNode===a?Mm.bind(null,n):null}function jh(n,r){var a=Ta;return n.current.memoizedState.isDehydrated&&(Xi(n,r).flags|=256),n=hu(n,r),n!==2&&(r=Yt,Yt=a,r!==null&&Bh(r)),n}function Bh(n){Yt===null?Yt=n:Yt.push.apply(Yt,n)}function QE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Dn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ni(n,r){for(r&=~bh,r&=~su,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Bt(r),c=1<<a;n[a]=-1,r&=~c}}function Lm(n){if((Le&6)!==0)throw Error(t(327));io();var r=Mi(n,0);if((r&1)===0)return Jt(n,We()),null;var a=hu(n,r);if(n.tag!==0&&a===2){var c=rn(n);c!==0&&(r=c,a=jh(n,c))}if(a===1)throw a=wa,Xi(n,0),ni(n,r),Jt(n,We()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Yi(n,Yt,Ar),Jt(n,We()),null}function $h(n,r){var a=Le;Le|=1;try{return n(r)}finally{Le=a,Le===0&&(ro=We()+500,Fl&&Qr())}}function Qi(n){ei!==null&&ei.tag===0&&(Le&6)===0&&io();var r=Le;Le|=1;var a=vn.transition,c=Ne;try{if(vn.transition=null,Ne=1,n)return n()}finally{Ne=c,vn.transition=a,Le=r,(Le&6)===0&&Qr()}}function Hh(){un=no.current,Xe(no)}function Xi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,AE(a)),lt!==null)for(a=lt.return;a!==null;){var c=a;switch(Zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ll();break;case 3:Zs(),Xe(Kt),Xe(xt),dh();break;case 5:ch(c);break;case 4:Zs();break;case 13:Xe(et);break;case 19:Xe(et);break;case 10:sh(c.type._context);break;case 22:case 23:Hh()}a=a.return}if(It=n,lt=n=ri(n.current,null),Nt=un=r,_t=0,wa=null,bh=su=Ki=0,Yt=Ta=null,qi!==null){for(r=0;r<qi.length;r++)if(a=qi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}qi=null}return n}function bm(n,r){do{var a=lt;try{if(ih(),Kl.current=Jl,Ql){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ql=!1}if(Gi=0,Tt=yt=tt=null,ma=!1,ga=0,Lh.current=null,a===null||a.return===null){_t=1,wa=r,lt=null;break}e:{var p=n,_=a.return,T=a,k=r;if(r=Nt,T.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var U=k,K=T,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var te=lm(_);if(te!==null){te.flags&=-257,um(te,_,T,p,r),te.mode&1&&am(p,U,r),r=te,k=U;var oe=r.updateQueue;if(oe===null){var le=new Set;le.add(k),r.updateQueue=le}else oe.add(k);break e}else{if((r&1)===0){am(p,U,r),qh();break e}k=Error(t(426))}}else if(Ze&&T.mode&1){var st=lm(_);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),um(st,_,T,p,r),nh(eo(k,T));break e}}p=k=eo(k,T),_t!==4&&(_t=2),Ta===null?Ta=[p]:Ta.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var L=sm(p,k,r);Vp(p,L);break e;case 1:T=k;var N=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Zr===null||!Zr.has(F)))){p.flags|=65536,r&=-r,p.lanes|=r;var J=om(p,T,r);Vp(p,J);break e}}p=p.return}while(p!==null)}zm(a)}catch(ce){r=ce,lt===a&&a!==null&&(lt=a=a.return);continue}break}while(!0)}function Fm(){var n=iu.current;return iu.current=Jl,n===null?Jl:n}function qh(){(_t===0||_t===3||_t===2)&&(_t=4),It===null||(Ki&268435455)===0&&(su&268435455)===0||ni(It,Nt)}function hu(n,r){var a=Le;Le|=2;var c=Fm();(It!==n||Nt!==r)&&(Ar=null,Xi(n,r));do try{XE();break}catch(d){bm(n,d)}while(!0);if(ih(),Le=a,iu.current=c,lt!==null)throw Error(t(261));return It=null,Nt=0,_t}function XE(){for(;lt!==null;)Um(lt)}function YE(){for(;lt!==null&&!ll();)Um(lt)}function Um(n){var r=$m(n.alternate,n,un);n.memoizedProps=n.pendingProps,r===null?zm(n):lt=r,Lh.current=null}function zm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=$E(a,r,un),a!==null){lt=a;return}}else{if(a=HE(a,r),a!==null){a.flags&=32767,lt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,lt=null;return}}if(r=r.sibling,r!==null){lt=r;return}lt=r=n}while(r!==null);_t===0&&(_t=5)}function Yi(n,r,a){var c=Ne,d=vn.transition;try{vn.transition=null,Ne=1,JE(n,r,a,c)}finally{vn.transition=d,Ne=c}return null}function JE(n,r,a,c){do io();while(ei!==null);if((Le&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(He(n,p),n===It&&(lt=It=null,Nt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||au||(au=!0,Hm(dn,function(){return io(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=vn.transition,vn.transition=null;var _=Ne;Ne=1;var T=Le;Le|=4,Lh.current=null,WE(n,a),Nm(a,n),_E(qc),$r=!!Hc,qc=Hc=null,n.current=a,GE(a),Cc(),Le=T,Ne=_,vn.transition=p}else n.current=a;if(au&&(au=!1,ei=n,lu=d),p=n.pendingLanes,p===0&&(Zr=null),hl(a.stateNode),Jt(n,We()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(ou)throw ou=!1,n=Uh,Uh=null,n;return(lu&1)!==0&&n.tag!==0&&io(),p=n.pendingLanes,(p&1)!==0?n===zh?Ia++:(Ia=0,zh=n):Ia=0,Qr(),null}function io(){if(ei!==null){var n=jr(lu),r=vn.transition,a=Ne;try{if(vn.transition=null,Ne=16>n?16:n,ei===null)var c=!1;else{if(n=ei,ei=null,lu=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,se=n.current;se!==null;){var p=se,_=p.child;if((se.flags&16)!==0){var T=p.deletions;if(T!==null){for(var k=0;k<T.length;k++){var U=T[k];for(se=U;se!==null;){var K=se;switch(K.tag){case 0:case 11:case 15:Ea(8,K,p)}var Q=K.child;if(Q!==null)Q.return=K,se=Q;else for(;se!==null;){K=se;var G=K.sibling,te=K.return;if(Am(K),K===U){se=null;break}if(G!==null){G.return=te,se=G;break}se=te}}}var oe=p.alternate;if(oe!==null){var le=oe.child;if(le!==null){oe.child=null;do{var st=le.sibling;le.sibling=null,le=st}while(le!==null)}}se=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,se=_;else e:for(;se!==null;){if(p=se,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ea(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,se=L;break e}se=p.return}}var N=n.current;for(se=N;se!==null;){_=se;var F=_.child;if((_.subtreeFlags&2064)!==0&&F!==null)F.return=_,se=F;else e:for(_=N;se!==null;){if(T=se,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:ru(9,T)}}catch(ce){rt(T,T.return,ce)}if(T===_){se=null;break e}var J=T.sibling;if(J!==null){J.return=T.return,se=J;break e}se=T.return}}if(Le=d,Qr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(xi,n)}catch{}c=!0}return c}finally{Ne=a,vn.transition=r}}return!1}function jm(n,r,a){r=eo(a,r),r=sm(n,r,1),n=Yr(n,r,1),r=qt(),n!==null&&(Ur(n,1,r),Jt(n,r))}function rt(n,r,a){if(n.tag===3)jm(n,n,a);else for(;r!==null;){if(r.tag===3){jm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Zr===null||!Zr.has(c))){n=eo(a,n),n=om(r,n,1),r=Yr(r,n,1),n=qt(),r!==null&&(Ur(r,1,n),Jt(r,n));break}}r=r.return}}function ZE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=qt(),n.pingedLanes|=n.suspendedLanes&a,It===n&&(Nt&a)===a&&(_t===4||_t===3&&(Nt&130023424)===Nt&&500>We()-Fh?Xi(n,0):bh|=a),Jt(n,r)}function Bm(n,r){r===0&&((n.mode&1)===0?r=1:(r=ks,ks<<=1,(ks&130023424)===0&&(ks=4194304)));var a=qt();n=Tr(n,r),n!==null&&(Ur(n,r,a),Jt(n,a))}function e0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Bm(n,a)}function t0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Bm(n,a)}var $m;$m=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Kt.current)Xt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Xt=!1,BE(n,r,a);Xt=(n.flags&131072)!==0}else Xt=!1,Ze&&(r.flags&1048576)!==0&&Tp(r,zl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;tu(n,r),n=r.pendingProps;var d=Ws(r,xt.current);Js(r,a),d=mh(null,r,c,n,d,a);var p=gh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Qt(c)?(p=!0,bl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,lh(r),d.updater=Zl,r.stateNode=d,d._reactInternals=r,Th(r,c,n,a),r=Rh(null,r,c,!0,p,a)):(r.tag=0,Ze&&p&&Jc(r),Ht(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(tu(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=r0(c),n=On(c,n),d){case 0:r=Ah(null,r,c,n,a);break e;case 1:r=mm(null,r,c,n,a);break e;case 11:r=cm(null,r,c,n,a);break e;case 14:r=hm(null,r,c,On(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),Ah(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),mm(n,r,c,d,a);case 3:e:{if(gm(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,Dp(n,r),Wl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=eo(Error(t(423)),r),r=ym(n,r,c,a,d);break e}else if(c!==d){d=eo(Error(t(424)),r),r=ym(n,r,c,a,d);break e}else for(ln=Wr(r.stateNode.containerInfo.firstChild),an=r,Ze=!0,Vn=null,a=Pp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qs(),c===d){r=Sr(n,r,a);break e}Ht(n,r,c,a)}r=r.child}return r;case 5:return xp(r),n===null&&th(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Wc(c,d)?_=null:p!==null&&Wc(c,p)&&(r.flags|=32),pm(n,r),Ht(n,r,_,a),r.child;case 6:return n===null&&th(r),null;case 13:return _m(n,r,a);case 4:return uh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Xs(r,null,c,a):Ht(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),cm(n,r,c,d,a);case 7:return Ht(n,r,r.pendingProps,a),r.child;case 8:return Ht(n,r,r.pendingProps.children,a),r.child;case 12:return Ht(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,Ge($l,c._currentValue),c._currentValue=_,p!==null)if(Dn(p.value,_)){if(p.children===d.children&&!Kt.current){r=Sr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var k=T.firstContext;k!==null;){if(k.context===c){if(p.tag===1){k=Ir(-1,a&-a),k.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?k.next=k:(k.next=K.next,K.next=k),U.pending=k}}p.lanes|=a,k=p.alternate,k!==null&&(k.lanes|=a),oh(p.return,a,r),T.lanes|=a;break}k=k.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),oh(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}Ht(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Js(r,a),d=yn(d),c=c(d),r.flags|=1,Ht(n,r,c,a),r.child;case 14:return c=r.type,d=On(c,r.pendingProps),d=On(c.type,d),hm(n,r,c,d,a);case 15:return dm(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),tu(n,r),r.tag=1,Qt(c)?(n=!0,bl(r)):n=!1,Js(r,a),rm(r,c,d),Th(r,c,d,a),Rh(null,r,c,!0,n,a);case 19:return Em(n,r,a);case 22:return fm(n,r,a)}throw Error(t(156,r.tag))};function Hm(n,r){return As(n,r)}function n0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(n,r,a,c){return new n0(n,r,a,c)}function Wh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function r0(n){if(typeof n=="function")return Wh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===x)return 11;if(n===De)return 14}return 2}function ri(n,r){var a=n.alternate;return a===null?(a=En(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function du(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")Wh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case D:return Ji(a.children,d,p,r);case I:_=8,d|=8;break;case R:return n=En(12,a,r,d|2),n.elementType=R,n.lanes=p,n;case S:return n=En(13,a,r,d),n.elementType=S,n.lanes=p,n;case ee:return n=En(19,a,r,d),n.elementType=ee,n.lanes=p,n;case Ve:return fu(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:_=10;break e;case V:_=9;break e;case x:_=11;break e;case De:_=14;break e;case $e:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=En(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Ji(n,r,a,c){return n=En(7,n,c,r),n.lanes=a,n}function fu(n,r,a,c){return n=En(22,n,c,r),n.elementType=Ve,n.lanes=a,n.stateNode={isHidden:!1},n}function Gh(n,r,a){return n=En(6,n,null,r),n.lanes=a,n}function Kh(n,r,a){return r=En(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function i0(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fr(0),this.expirationTimes=Fr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Qh(n,r,a,c,d,p,_,T,k){return n=new i0(n,r,a,T,k),r===1?(r=1,p===!0&&(r|=8)):r=0,p=En(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},lh(p),n}function s0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function qm(n){if(!n)return Kr;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Qt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Qt(a))return vp(n,a,r)}return r}function Wm(n,r,a,c,d,p,_,T,k){return n=Qh(a,c,!0,n,d,p,_,T,k),n.context=qm(null),a=n.current,c=qt(),d=ti(a),p=Ir(c,d),p.callback=r??null,Yr(a,p,d),n.current.lanes=d,Ur(n,d,c),Jt(n,c),n}function pu(n,r,a,c){var d=r.current,p=qt(),_=ti(d);return a=qm(a),r.context===null?r.context=a:r.pendingContext=a,r=Ir(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Yr(d,r,_),n!==null&&(Ln(n,d,_,p),ql(n,d,_)),_}function mu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Xh(n,r){Gm(n,r),(n=n.alternate)&&Gm(n,r)}function o0(){return null}var Km=typeof reportError=="function"?reportError:function(n){console.error(n)};function Yh(n){this._internalRoot=n}gu.prototype.render=Yh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));pu(n,r,null,null)},gu.prototype.unmount=Yh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Qi(function(){pu(null,n,null,null)}),r[_r]=null}};function gu(n){this._internalRoot=n}gu.prototype.unstable_scheduleHydration=function(n){if(n){var r=gl();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Wn.length&&r!==0&&r<Wn[a].priority;a++);Wn.splice(a,0,n),a===0&&vl(n)}};function Jh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function yu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Qm(){}function a0(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var U=mu(_);p.call(U)}}var _=Wm(r,c,n,0,null,!1,!1,"",Qm);return n._reactRootContainer=_,n[_r]=_.current,aa(n.nodeType===8?n.parentNode:n),Qi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var U=mu(k);T.call(U)}}var k=Qh(n,0,!1,null,null,!1,!1,"",Qm);return n._reactRootContainer=k,n[_r]=k.current,aa(n.nodeType===8?n.parentNode:n),Qi(function(){pu(r,k,a,c)}),k}function _u(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var k=mu(_);T.call(k)}}pu(r,_,n,d)}else _=a0(a,r,n,d,c);return mu(_)}pl=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=br(r.pendingLanes);a!==0&&(zr(r,a|1),Jt(r,We()),(Le&6)===0&&(ro=We()+500,Qr()))}break;case 13:Qi(function(){var c=Tr(n,1);if(c!==null){var d=qt();Ln(c,n,1,d)}}),Xh(n,1)}},Cs=function(n){if(n.tag===13){var r=Tr(n,134217728);if(r!==null){var a=qt();Ln(r,n,134217728,a)}Xh(n,134217728)}},ml=function(n){if(n.tag===13){var r=ti(n),a=Tr(n,r);if(a!==null){var c=qt();Ln(a,n,r,c)}Xh(n,r)}},gl=function(){return Ne},yl=function(n,r){var a=Ne;try{return Ne=n,r()}finally{Ne=a}},vs=function(n,r,a){switch(r){case"input":if(Vo(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Ml(c);if(!d)throw Error(t(90));fs(c),Vo(c,d)}}}break;case"textarea":ys(n,a);break;case"select":r=a.value,r!=null&&cr(n,!!a.multiple,r,!1)}},Pi=$h,Bo=Qi;var l0={usingClientEntryPoint:!1,Events:[ca,Hs,Ml,Hn,jo,$h]},Sa={findFiberByHostInstance:ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},u0={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=qo(n),n===null?null:n.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||o0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{xi=vu.inject(u0),nn=vu}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l0,Zt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jh(r))throw Error(t(200));return s0(n,r,null,a)},Zt.createRoot=function(n,r){if(!Jh(n))throw Error(t(299));var a=!1,c="",d=Km;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Qh(n,1,!1,null,null,a,!1,c,d),n[_r]=r.current,aa(n.nodeType===8?n.parentNode:n),new Yh(r)},Zt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=qo(r),n=n===null?null:n.stateNode,n},Zt.flushSync=function(n){return Qi(n)},Zt.hydrate=function(n,r,a){if(!yu(r))throw Error(t(200));return _u(null,n,r,!0,a)},Zt.hydrateRoot=function(n,r,a){if(!Jh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=Km;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=Wm(r,null,n,1,a??null,d,!1,p,_),n[_r]=r.current,aa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new gu(r)},Zt.render=function(n,r,a){if(!yu(r))throw Error(t(200));return _u(null,n,r,!1,a)},Zt.unmountComponentAtNode=function(n){if(!yu(n))throw Error(t(40));return n._reactRootContainer?(Qi(function(){_u(null,null,n,!1,function(){n._reactRootContainer=null,n[_r]=null})}),!0):!1},Zt.unstable_batchedUpdates=$h,Zt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!yu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return _u(n,r,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var tg;function g0(){if(tg)return ed.exports;tg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),ed.exports=m0(),ed.exports}var ng;function y0(){if(ng)return Eu;ng=1;var i=g0();return Eu.createRoot=i.createRoot,Eu.hydrateRoot=i.hydrateRoot,Eu}var _0=y0();const v0=()=>{};var rg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},E0=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Fy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,v=g?i[o+2]:0,w=u>>2,A=(u&3)<<4|m>>4;let C=(m&15)<<2|v>>6,j=v&63;g||(j=64,h||(C=64)),s.push(t[w],t[A],t[C],t[j])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(by(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):E0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||A==null)throw new w0;const C=u<<2|m>>4;if(s.push(C),v!==64){const j=m<<4&240|v>>2;if(s.push(j),A!==64){const q=v<<6&192|A;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class w0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const T0=function(i){const e=by(i);return Fy.encodeByteArray(e,!0)},ju=function(i){return T0(i).replace(/\./g,"")},Uy=function(i){try{return Fy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=()=>I0().__FIREBASE_DEFAULTS__,A0=()=>{if(typeof process>"u"||typeof rg>"u")return;const i=rg.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},R0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Uy(i[1]);return e&&JSON.parse(e)},lc=()=>{try{return v0()||S0()||A0()||R0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},zy=i=>{var e,t;return(t=(e=lc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},k0=i=>{const e=zy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},jy=()=>{var i;return(i=lc())===null||i===void 0?void 0:i.config},By=i=>{var e;return(e=lc())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $y(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[ju(JSON.stringify(t)),ju(JSON.stringify(h)),""].join(".")}const Oa={};function N0(){const i={prod:[],emulator:[]};for(const e of Object.keys(Oa))Oa[e]?i.emulator.push(e):i.prod.push(e);return i}function D0(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let ig=!1;function Hy(i,e){if(typeof window>"u"||typeof document>"u"||!Io(window.location.host)||Oa[i]===e||Oa[i]||ig)return;Oa[i]=e;function t(C){return`__firebase__banner__${C}`}const s="__firebase__banner",u=N0().prod.length>0;function h(){const C=document.getElementById(s);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function g(C,j){C.setAttribute("width","24"),C.setAttribute("id",j),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function v(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{ig=!0,h()},C}function w(C,j){C.setAttribute("id",j),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function A(){const C=D0(s),j=t("text"),q=document.getElementById(j)||document.createElement("span"),X=t("learnmore"),$=document.getElementById(X)||document.createElement("a"),pe=t("preprendIcon"),he=document.getElementById(pe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ae=C.element;m(ae),w($,X);const Te=v();g(he,pe),ae.append(he,q,$,Te),document.body.appendChild(ae)}u?(q.innerText="Preview backend disconnected.",he.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(he.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function V0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function O0(){var i;const e=(i=lc())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function x0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function M0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function L0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function b0(){const i=jt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function F0(){return!O0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function U0(){try{return typeof indexedDB=="object"}catch{return!1}}function z0(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="FirebaseError";class Or extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=j0,Object.setPrototypeOf(this,Or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ka.prototype.create)}}class Ka{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?B0(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Or(o,m,s)}}function B0(i,e){return i.replace($0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const $0=/\{\$([^}]+)}/g;function H0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ss(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(sg(u)&&sg(h)){if(!ss(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function sg(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function q0(i,e){const t=new W0(i,e);return t.subscribe.bind(t)}class W0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");G0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=rd),o.error===void 0&&(o.error=rd),o.complete===void 0&&(o.complete=rd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function G0(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function rd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(i){return i&&i._delegate?i._delegate:i}class os{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new C0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(X0(e))try{this.getOrInitializeService({instanceIdentifier:Zi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zi){return this.instances.has(e)}getOptions(e=Zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Q0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zi){return this.component?this.component.multipleInstances?e:Zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Q0(i){return i===Zi?void 0:i}function X0(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new K0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ce||(Ce={}));const J0={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},Z0=Ce.INFO,ew={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},tw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=ew[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qd{constructor(e){this.name=e,this._logLevel=Z0,this._logHandler=tw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?J0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const nw=(i,e)=>e.some(t=>i instanceof t);let og,ag;function rw(){return og||(og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iw(){return ag||(ag=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qy=new WeakMap,md=new WeakMap,Wy=new WeakMap,id=new WeakMap,Wd=new WeakMap;function sw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ci(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&qy.set(t,i)}).catch(()=>{}),Wd.set(e,i),e}function ow(i){if(md.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});md.set(i,e)}let gd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return md.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Wy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ci(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function aw(i){gd=i(gd)}function lw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(sd(this),e,...t);return Wy.set(s,e.sort?e.sort():[e]),ci(s)}:iw().includes(i)?function(...e){return i.apply(sd(this),e),ci(qy.get(this))}:function(...e){return ci(i.apply(sd(this),e))}}function uw(i){return typeof i=="function"?lw(i):(i instanceof IDBTransaction&&ow(i),nw(i,rw())?new Proxy(i,gd):i)}function ci(i){if(i instanceof IDBRequest)return sw(i);if(id.has(i))return id.get(i);const e=uw(i);return e!==i&&(id.set(i,e),Wd.set(e,i)),e}const sd=i=>Wd.get(i);function cw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=ci(h);return s&&h.addEventListener("upgradeneeded",g=>{s(ci(h.result),g.oldVersion,g.newVersion,ci(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const hw=["get","getKey","getAll","getAllKeys","count"],dw=["put","add","delete","clear"],od=new Map;function lg(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(od.get(e))return od.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=dw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||hw.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&g.done]))[0]};return od.set(e,u),u}aw(i=>({...i,get:(e,t,s)=>lg(e,t)||i.get(e,t,s),has:(e,t)=>!!lg(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function pw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yd="@firebase/app",ug="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new qd("@firebase/app"),mw="@firebase/app-compat",gw="@firebase/analytics-compat",yw="@firebase/analytics",_w="@firebase/app-check-compat",vw="@firebase/app-check",Ew="@firebase/auth",ww="@firebase/auth-compat",Tw="@firebase/database",Iw="@firebase/data-connect",Sw="@firebase/database-compat",Aw="@firebase/functions",Rw="@firebase/functions-compat",kw="@firebase/installations",Cw="@firebase/installations-compat",Pw="@firebase/messaging",Nw="@firebase/messaging-compat",Dw="@firebase/performance",Vw="@firebase/performance-compat",Ow="@firebase/remote-config",xw="@firebase/remote-config-compat",Mw="@firebase/storage",Lw="@firebase/storage-compat",bw="@firebase/firestore",Fw="@firebase/ai",Uw="@firebase/firestore-compat",zw="firebase",jw="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="[DEFAULT]",Bw={[yd]:"fire-core",[mw]:"fire-core-compat",[yw]:"fire-analytics",[gw]:"fire-analytics-compat",[vw]:"fire-app-check",[_w]:"fire-app-check-compat",[Ew]:"fire-auth",[ww]:"fire-auth-compat",[Tw]:"fire-rtdb",[Iw]:"fire-data-connect",[Sw]:"fire-rtdb-compat",[Aw]:"fire-fn",[Rw]:"fire-fn-compat",[kw]:"fire-iid",[Cw]:"fire-iid-compat",[Pw]:"fire-fcm",[Nw]:"fire-fcm-compat",[Dw]:"fire-perf",[Vw]:"fire-perf-compat",[Ow]:"fire-rc",[xw]:"fire-rc-compat",[Mw]:"fire-gcs",[Lw]:"fire-gcs-compat",[bw]:"fire-fst",[Uw]:"fire-fst-compat",[Fw]:"fire-vertex","fire-js":"fire-js",[zw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new Map,$w=new Map,vd=new Map;function cg(i,e){try{i.container.addComponent(e)}catch(t){Pr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function mo(i){const e=i.name;if(vd.has(e))return Pr.debug(`There were multiple attempts to register component ${e}.`),!1;vd.set(e,i);for(const t of Bu.values())cg(t,i);for(const t of $w.values())cg(t,i);return!0}function Gd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function bn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hi=new Ka("app","Firebase",Hw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=jw;function Gy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_d,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw hi.create("bad-app-name",{appName:String(o)});if(t||(t=jy()),!t)throw hi.create("no-options");const u=Bu.get(o);if(u){if(ss(t,u.options)&&ss(s,u.config))return u;throw hi.create("duplicate-app",{appName:o})}const h=new Y0(o);for(const g of vd.values())h.addComponent(g);const m=new qw(t,s,h);return Bu.set(o,m),m}function Ky(i=_d){const e=Bu.get(i);if(!e&&i===_d&&jy())return Gy();if(!e)throw hi.create("no-app",{appName:i});return e}function di(i,e,t){var s;let o=(s=Bw[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pr.warn(m.join(" "));return}mo(new os(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="firebase-heartbeat-database",Gw=1,Ua="firebase-heartbeat-store";let ad=null;function Qy(){return ad||(ad=cw(Ww,Gw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ua)}catch(t){console.warn(t)}}}}).catch(i=>{throw hi.create("idb-open",{originalErrorMessage:i.message})})),ad}async function Kw(i){try{const t=(await Qy()).transaction(Ua),s=await t.objectStore(Ua).get(Xy(i));return await t.done,s}catch(e){if(e instanceof Or)Pr.warn(e.message);else{const t=hi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pr.warn(t.message)}}}async function hg(i,e){try{const s=(await Qy()).transaction(Ua,"readwrite");await s.objectStore(Ua).put(e,Xy(i)),await s.done}catch(t){if(t instanceof Or)Pr.warn(t.message);else{const s=hi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pr.warn(s.message)}}}function Xy(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=1024,Xw=30;class Yw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zw(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=dg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>Xw){const h=eT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Pr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=dg(),{heartbeatsToSend:s,unsentEntries:o}=Jw(this._heartbeatsCache.heartbeats),u=ju(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Pr.warn(t),""}}}function dg(){return new Date().toISOString().substring(0,10)}function Jw(i,e=Qw){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),fg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),fg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Zw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return U0()?z0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Kw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return hg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return hg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function fg(i){return ju(JSON.stringify({version:2,heartbeats:i})).length}function eT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(i){mo(new os("platform-logger",e=>new fw(e),"PRIVATE")),mo(new os("heartbeat",e=>new Yw(e),"PRIVATE")),di(yd,ug,i),di(yd,ug,"esm2017"),di("fire-js","")}tT("");var pg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fi,Yy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,I){function R(){}R.prototype=I.prototype,D.D=I.prototype,D.prototype=new R,D.prototype.constructor=D,D.C=function(P,V,x){for(var S=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)S[ee-2]=arguments[ee];return I.prototype[V].apply(P,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,I,R){R||(R=0);var P=Array(16);if(typeof I=="string")for(var V=0;16>V;++V)P[V]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(V=0;16>V;++V)P[V]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=D.g[0],R=D.g[1],V=D.g[2];var x=D.g[3],S=I+(x^R&(V^x))+P[0]+3614090360&4294967295;I=R+(S<<7&4294967295|S>>>25),S=x+(V^I&(R^V))+P[1]+3905402710&4294967295,x=I+(S<<12&4294967295|S>>>20),S=V+(R^x&(I^R))+P[2]+606105819&4294967295,V=x+(S<<17&4294967295|S>>>15),S=R+(I^V&(x^I))+P[3]+3250441966&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(x^R&(V^x))+P[4]+4118548399&4294967295,I=R+(S<<7&4294967295|S>>>25),S=x+(V^I&(R^V))+P[5]+1200080426&4294967295,x=I+(S<<12&4294967295|S>>>20),S=V+(R^x&(I^R))+P[6]+2821735955&4294967295,V=x+(S<<17&4294967295|S>>>15),S=R+(I^V&(x^I))+P[7]+4249261313&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(x^R&(V^x))+P[8]+1770035416&4294967295,I=R+(S<<7&4294967295|S>>>25),S=x+(V^I&(R^V))+P[9]+2336552879&4294967295,x=I+(S<<12&4294967295|S>>>20),S=V+(R^x&(I^R))+P[10]+4294925233&4294967295,V=x+(S<<17&4294967295|S>>>15),S=R+(I^V&(x^I))+P[11]+2304563134&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(x^R&(V^x))+P[12]+1804603682&4294967295,I=R+(S<<7&4294967295|S>>>25),S=x+(V^I&(R^V))+P[13]+4254626195&4294967295,x=I+(S<<12&4294967295|S>>>20),S=V+(R^x&(I^R))+P[14]+2792965006&4294967295,V=x+(S<<17&4294967295|S>>>15),S=R+(I^V&(x^I))+P[15]+1236535329&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(V^x&(R^V))+P[1]+4129170786&4294967295,I=R+(S<<5&4294967295|S>>>27),S=x+(R^V&(I^R))+P[6]+3225465664&4294967295,x=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(x^I))+P[11]+643717713&4294967295,V=x+(S<<14&4294967295|S>>>18),S=R+(x^I&(V^x))+P[0]+3921069994&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^x&(R^V))+P[5]+3593408605&4294967295,I=R+(S<<5&4294967295|S>>>27),S=x+(R^V&(I^R))+P[10]+38016083&4294967295,x=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(x^I))+P[15]+3634488961&4294967295,V=x+(S<<14&4294967295|S>>>18),S=R+(x^I&(V^x))+P[4]+3889429448&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^x&(R^V))+P[9]+568446438&4294967295,I=R+(S<<5&4294967295|S>>>27),S=x+(R^V&(I^R))+P[14]+3275163606&4294967295,x=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(x^I))+P[3]+4107603335&4294967295,V=x+(S<<14&4294967295|S>>>18),S=R+(x^I&(V^x))+P[8]+1163531501&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^x&(R^V))+P[13]+2850285829&4294967295,I=R+(S<<5&4294967295|S>>>27),S=x+(R^V&(I^R))+P[2]+4243563512&4294967295,x=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(x^I))+P[7]+1735328473&4294967295,V=x+(S<<14&4294967295|S>>>18),S=R+(x^I&(V^x))+P[12]+2368359562&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(R^V^x)+P[5]+4294588738&4294967295,I=R+(S<<4&4294967295|S>>>28),S=x+(I^R^V)+P[8]+2272392833&4294967295,x=I+(S<<11&4294967295|S>>>21),S=V+(x^I^R)+P[11]+1839030562&4294967295,V=x+(S<<16&4294967295|S>>>16),S=R+(V^x^I)+P[14]+4259657740&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^x)+P[1]+2763975236&4294967295,I=R+(S<<4&4294967295|S>>>28),S=x+(I^R^V)+P[4]+1272893353&4294967295,x=I+(S<<11&4294967295|S>>>21),S=V+(x^I^R)+P[7]+4139469664&4294967295,V=x+(S<<16&4294967295|S>>>16),S=R+(V^x^I)+P[10]+3200236656&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^x)+P[13]+681279174&4294967295,I=R+(S<<4&4294967295|S>>>28),S=x+(I^R^V)+P[0]+3936430074&4294967295,x=I+(S<<11&4294967295|S>>>21),S=V+(x^I^R)+P[3]+3572445317&4294967295,V=x+(S<<16&4294967295|S>>>16),S=R+(V^x^I)+P[6]+76029189&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^x)+P[9]+3654602809&4294967295,I=R+(S<<4&4294967295|S>>>28),S=x+(I^R^V)+P[12]+3873151461&4294967295,x=I+(S<<11&4294967295|S>>>21),S=V+(x^I^R)+P[15]+530742520&4294967295,V=x+(S<<16&4294967295|S>>>16),S=R+(V^x^I)+P[2]+3299628645&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(V^(R|~x))+P[0]+4096336452&4294967295,I=R+(S<<6&4294967295|S>>>26),S=x+(R^(I|~V))+P[7]+1126891415&4294967295,x=I+(S<<10&4294967295|S>>>22),S=V+(I^(x|~R))+P[14]+2878612391&4294967295,V=x+(S<<15&4294967295|S>>>17),S=R+(x^(V|~I))+P[5]+4237533241&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~x))+P[12]+1700485571&4294967295,I=R+(S<<6&4294967295|S>>>26),S=x+(R^(I|~V))+P[3]+2399980690&4294967295,x=I+(S<<10&4294967295|S>>>22),S=V+(I^(x|~R))+P[10]+4293915773&4294967295,V=x+(S<<15&4294967295|S>>>17),S=R+(x^(V|~I))+P[1]+2240044497&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~x))+P[8]+1873313359&4294967295,I=R+(S<<6&4294967295|S>>>26),S=x+(R^(I|~V))+P[15]+4264355552&4294967295,x=I+(S<<10&4294967295|S>>>22),S=V+(I^(x|~R))+P[6]+2734768916&4294967295,V=x+(S<<15&4294967295|S>>>17),S=R+(x^(V|~I))+P[13]+1309151649&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~x))+P[4]+4149444226&4294967295,I=R+(S<<6&4294967295|S>>>26),S=x+(R^(I|~V))+P[11]+3174756917&4294967295,x=I+(S<<10&4294967295|S>>>22),S=V+(I^(x|~R))+P[2]+718787259&4294967295,V=x+(S<<15&4294967295|S>>>17),S=R+(x^(V|~I))+P[9]+3951481745&4294967295,D.g[0]=D.g[0]+I&4294967295,D.g[1]=D.g[1]+(V+(S<<21&4294967295|S>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+x&4294967295}s.prototype.u=function(D,I){I===void 0&&(I=D.length);for(var R=I-this.blockSize,P=this.B,V=this.h,x=0;x<I;){if(V==0)for(;x<=R;)o(this,D,x),x+=this.blockSize;if(typeof D=="string"){for(;x<I;)if(P[V++]=D.charCodeAt(x++),V==this.blockSize){o(this,P),V=0;break}}else for(;x<I;)if(P[V++]=D[x++],V==this.blockSize){o(this,P),V=0;break}}this.h=V,this.o+=I},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var I=1;I<D.length-8;++I)D[I]=0;var R=8*this.o;for(I=D.length-8;I<D.length;++I)D[I]=R&255,R/=256;for(this.u(D),D=Array(16),I=R=0;4>I;++I)for(var P=0;32>P;P+=8)D[R++]=this.g[I]>>>P&255;return D};function u(D,I){var R=m;return Object.prototype.hasOwnProperty.call(R,D)?R[D]:R[D]=I(D)}function h(D,I){this.h=I;for(var R=[],P=!0,V=D.length-1;0<=V;V--){var x=D[V]|0;P&&x==I||(R[V]=x,P=!1)}this.g=R}var m={};function g(D){return-128<=D&&128>D?u(D,function(I){return new h([I|0],0>I?-1:0)}):new h([D|0],0>D?-1:0)}function v(D){if(isNaN(D)||!isFinite(D))return A;if(0>D)return $(v(-D));for(var I=[],R=1,P=0;D>=R;P++)I[P]=D/R|0,R*=4294967296;return new h(I,0)}function w(D,I){if(D.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D.charAt(0)=="-")return $(w(D.substring(1),I));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=v(Math.pow(I,8)),P=A,V=0;V<D.length;V+=8){var x=Math.min(8,D.length-V),S=parseInt(D.substring(V,V+x),I);8>x?(x=v(Math.pow(I,x)),P=P.j(x).add(v(S))):(P=P.j(R),P=P.add(v(S)))}return P}var A=g(0),C=g(1),j=g(16777216);i=h.prototype,i.m=function(){if(X(this))return-$(this).m();for(var D=0,I=1,R=0;R<this.g.length;R++){var P=this.i(R);D+=(0<=P?P:4294967296+P)*I,I*=4294967296}return D},i.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(q(this))return"0";if(X(this))return"-"+$(this).toString(D);for(var I=v(Math.pow(D,6)),R=this,P="";;){var V=Te(R,I).g;R=pe(R,V.j(I));var x=((0<R.g.length?R.g[0]:R.h)>>>0).toString(D);if(R=V,q(R))return x+P;for(;6>x.length;)x="0"+x;P=x+P}},i.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function q(D){if(D.h!=0)return!1;for(var I=0;I<D.g.length;I++)if(D.g[I]!=0)return!1;return!0}function X(D){return D.h==-1}i.l=function(D){return D=pe(this,D),X(D)?-1:q(D)?0:1};function $(D){for(var I=D.g.length,R=[],P=0;P<I;P++)R[P]=~D.g[P];return new h(R,~D.h).add(C)}i.abs=function(){return X(this)?$(this):this},i.add=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],P=0,V=0;V<=I;V++){var x=P+(this.i(V)&65535)+(D.i(V)&65535),S=(x>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);P=S>>>16,x&=65535,S&=65535,R[V]=S<<16|x}return new h(R,R[R.length-1]&-2147483648?-1:0)};function pe(D,I){return D.add($(I))}i.j=function(D){if(q(this)||q(D))return A;if(X(this))return X(D)?$(this).j($(D)):$($(this).j(D));if(X(D))return $(this.j($(D)));if(0>this.l(j)&&0>D.l(j))return v(this.m()*D.m());for(var I=this.g.length+D.g.length,R=[],P=0;P<2*I;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var V=0;V<D.g.length;V++){var x=this.i(P)>>>16,S=this.i(P)&65535,ee=D.i(V)>>>16,De=D.i(V)&65535;R[2*P+2*V]+=S*De,he(R,2*P+2*V),R[2*P+2*V+1]+=x*De,he(R,2*P+2*V+1),R[2*P+2*V+1]+=S*ee,he(R,2*P+2*V+1),R[2*P+2*V+2]+=x*ee,he(R,2*P+2*V+2)}for(P=0;P<I;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=I;P<2*I;P++)R[P]=0;return new h(R,0)};function he(D,I){for(;(D[I]&65535)!=D[I];)D[I+1]+=D[I]>>>16,D[I]&=65535,I++}function ae(D,I){this.g=D,this.h=I}function Te(D,I){if(q(I))throw Error("division by zero");if(q(D))return new ae(A,A);if(X(D))return I=Te($(D),I),new ae($(I.g),$(I.h));if(X(I))return I=Te(D,$(I)),new ae($(I.g),I.h);if(30<D.g.length){if(X(D)||X(I))throw Error("slowDivide_ only works with positive integers.");for(var R=C,P=I;0>=P.l(D);)R=Be(R),P=Be(P);var V=Ie(R,1),x=Ie(P,1);for(P=Ie(P,2),R=Ie(R,2);!q(P);){var S=x.add(P);0>=S.l(D)&&(V=V.add(R),x=S),P=Ie(P,1),R=Ie(R,1)}return I=pe(D,V.j(I)),new ae(V,I)}for(V=A;0<=D.l(I);){for(R=Math.max(1,Math.floor(D.m()/I.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),x=v(R),S=x.j(I);X(S)||0<S.l(D);)R-=P,x=v(R),S=x.j(I);q(x)&&(x=C),V=V.add(x),D=pe(D,S)}return new ae(V,D)}i.A=function(D){return Te(this,D).h},i.and=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)&D.i(P);return new h(R,this.h&D.h)},i.or=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)|D.i(P);return new h(R,this.h|D.h)},i.xor=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)^D.i(P);return new h(R,this.h^D.h)};function Be(D){for(var I=D.g.length+1,R=[],P=0;P<I;P++)R[P]=D.i(P)<<1|D.i(P-1)>>>31;return new h(R,D.h)}function Ie(D,I){var R=I>>5;I%=32;for(var P=D.g.length-R,V=[],x=0;x<P;x++)V[x]=0<I?D.i(x+R)>>>I|D.i(x+R+1)<<32-I:D.i(x+R);return new h(V,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Yy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,fi=h}).apply(typeof pg<"u"?pg:typeof self<"u"?self:typeof window<"u"?window:{});var wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jy,ka,Zy,Nu,Ed,e_,t_,n_;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof wu=="object"&&wu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in y))break e;y=y[M]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,M={next:function(){if(!E&&y<l.length){var z=y++;return{value:f(z,l[z]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function A(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),l.apply(f,M)}}return function(){return l.apply(f,arguments)}}function C(l,f,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:A,C.apply(null,arguments)}function j(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function q(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,M,z){for(var Z=Array(arguments.length-2),je=2;je<arguments.length;je++)Z[je-2]=arguments[je];return f.prototype[M].apply(E,Z)}}function X(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function $(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const M=l.length||0,z=E.length||0;l.length=M+z;for(let Z=0;Z<z;Z++)l[M+Z]=E[Z]}else l.push(E)}}class pe{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function he(l){return/^[\s\xa0]*$/.test(l)}function ae(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Te(l){return Te[" "](l),l}Te[" "]=function(){};var Be=ae().indexOf("Gecko")!=-1&&!(ae().toLowerCase().indexOf("webkit")!=-1&&ae().indexOf("Edge")==-1)&&!(ae().indexOf("Trident")!=-1||ae().indexOf("MSIE")!=-1)&&ae().indexOf("Edge")==-1;function Ie(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function D(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function I(l){const f={};for(const y in l)f[y]=l[y];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)l[y]=E[y];for(let z=0;z<R.length;z++)y=R[z],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function V(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function x(l){m.setTimeout(()=>{throw l},0)}function S(){var l=ue;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class ee{constructor(){this.h=this.g=null}add(f,y){const E=De.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var De=new pe(()=>new $e,l=>l.reset());class $e{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,Y=!1,ue=new ee,ie=()=>{const l=m.Promise.resolve(void 0);Ve=()=>{l.then(O)}};var O=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(y){x(y)}var f=De;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Y=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Se=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l})();function Re(l,f){if(de.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Be){e:{try{Te(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Oe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Re.aa.h.call(this)}}q(Re,de);var Oe={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function qe(l,f,y,E,M){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=M,this.key=++Ue,this.da=this.fa=!1}function Et(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function lr(l){this.src=l,this.g={},this.h=0}lr.prototype.add=function(l,f,y,E,M){var z=l.toString();l=this.g[z],l||(l=this.g[z]=[],this.h++);var Z=xr(l,f,E,M);return-1<Z?(f=l[Z],y||(f.fa=!1)):(f=new qe(f,this.src,z,!!E,M),f.fa=y,l.push(f)),f};function fs(l,f){var y=f.type;if(y in l.g){var E=l.g[y],M=Array.prototype.indexOf.call(E,f,void 0),z;(z=0<=M)&&Array.prototype.splice.call(E,M,1),z&&(Et(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function xr(l,f,y,E){for(var M=0;M<l.length;++M){var z=l[M];if(!z.da&&z.listener==f&&z.capture==!!y&&z.ha==E)return M}return-1}var Ai="closure_lm_"+(1e6*Math.random()|0),ps={};function Do(l,f,y,E,M){if(Array.isArray(f)){for(var z=0;z<f.length;z++)Do(l,f[z],y,E,M);return null}return y=xo(y),l&&l[Fe]?l.K(f,y,v(E)?!!E.capture:!1,M):Vo(l,f,y,!1,E,M)}function Vo(l,f,y,E,M,z){if(!f)throw Error("Invalid event type");var Z=v(M)?!!M.capture:!!M,je=gs(l);if(je||(l[Ai]=je=new lr(l)),y=je.add(f,y,E,Z,z),y.proxy)return y;if(E=sl(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)Se||(M=Z),M===void 0&&(M=!1),l.addEventListener(f.toString(),E,M);else if(l.attachEvent)l.attachEvent(cr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function sl(){function l(y){return f.call(l.src,l.listener,y)}const f=Oo;return l}function ms(l,f,y,E,M){if(Array.isArray(f))for(var z=0;z<f.length;z++)ms(l,f[z],y,E,M);else E=v(E)?!!E.capture:!!E,y=xo(y),l&&l[Fe]?(l=l.i,f=String(f).toString(),f in l.g&&(z=l.g[f],y=xr(z,y,E,M),-1<y&&(Et(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete l.g[f],l.h--)))):l&&(l=gs(l))&&(f=l.g[f.toString()],l=-1,f&&(l=xr(f,y,E,M)),(y=-1<l?f[l]:null)&&ur(y))}function ur(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Fe])fs(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(cr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=gs(f))?(fs(y,l),y.h==0&&(y.src=null,f[Ai]=null)):Et(l)}}}function cr(l){return l in ps?ps[l]:ps[l]="on"+l}function Oo(l,f){if(l.da)l=!0;else{f=new Re(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&ur(l),l=y.call(E,f)}return l}function gs(l){return l=l[Ai],l instanceof lr?l:null}var ys="__closure_events_fn_"+(1e9*Math.random()>>>0);function xo(l){return typeof l=="function"?l:(l[ys]||(l[ys]=function(f){return l.handleEvent(f)}),l[ys])}function pt(){W.call(this),this.i=new lr(this),this.M=this,this.F=null}q(pt,W),pt.prototype[Fe]=!0,pt.prototype.removeEventListener=function(l,f,y,E){ms(this,l,f,y,E)};function mt(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new de(f,l);else if(f instanceof de)f.target=f.target||l;else{var M=f;f=new de(E,l),P(f,M)}if(M=!0,y)for(var z=y.length-1;0<=z;z--){var Z=f.g=y[z];M=hr(Z,E,!0,f)&&M}if(Z=f.g=l,M=hr(Z,E,!0,f)&&M,M=hr(Z,E,!1,f)&&M,y)for(z=0;z<y.length;z++)Z=f.g=y[z],M=hr(Z,E,!1,f)&&M}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)Et(y[E]);delete l.g[f],l.h--}}this.F=null},pt.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},pt.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function hr(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,z=0;z<f.length;++z){var Z=f[z];if(Z&&!Z.da&&Z.capture==y){var je=Z.listener,gt=Z.ha||Z.src;Z.fa&&fs(l.i,Z),M=je.call(gt,E)!==!1&&M}}return M&&!E.defaultPrevented}function Mo(l,f,y){if(typeof l=="function")y&&(l=C(l,y));else if(l&&typeof l.handleEvent=="function")l=C(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Mr(l){l.g=Mo(()=>{l.g=null,l.i&&(l.i=!1,Mr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Ri extends W{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Mr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ki(l){W.call(this),this.h=l,this.g={}}q(ki,W);var Lo=[];function bo(l){Ie(l.g,function(f,y){this.g.hasOwnProperty(y)&&ur(f)},l),l.g={}}ki.prototype.N=function(){ki.aa.N.call(this),bo(this)},ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fo=m.JSON.stringify,Uo=m.JSON.parse,zo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ci(){}Ci.prototype.h=null;function _s(l){return l.h||(l.h=l.i())}function vs(){}var hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $n(){de.call(this,"d")}q($n,de);function Es(){de.call(this,"c")}q(Es,de);var Hn={},jo=null;function Pi(){return jo=jo||new pt}Hn.La="serverreachability";function Bo(l){de.call(this,Hn.La,l)}q(Bo,de);function dr(l){const f=Pi();mt(f,new Bo(f))}Hn.STAT_EVENT="statevent";function $o(l,f){de.call(this,Hn.STAT_EVENT,l),this.stat=f}q($o,de);function it(l){const f=Pi();mt(f,new $o(f,l))}Hn.Ma="timingevent";function ws(l,f){de.call(this,Hn.Ma,l),this.size=f}q(ws,de);function Tn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Ni(){this.g=!0}Ni.prototype.xa=function(){this.g=!1};function Di(l,f,y,E,M,z){l.info(function(){if(l.g)if(z)for(var Z="",je=z.split("&"),gt=0;gt<je.length;gt++){var xe=je[gt].split("=");if(1<xe.length){var wt=xe[0];xe=xe[1];var at=wt.split("_");Z=2<=at.length&&at[1]=="type"?Z+(wt+"="+xe+"&"):Z+(wt+"=redacted&")}}else Z=null;else Z=z;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+f+`
`+y+`
`+Z})}function Ts(l,f,y,E,M,z,Z){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+f+`
`+y+`
`+z+" "+Z})}function In(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+kc(l,y)+(E?" "+E:"")})}function Ho(l,f){l.info(function(){return"TIMEOUT: "+f})}Ni.prototype.info=function(){};function kc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var z=M[0];if(z!="noop"&&z!="stop"&&z!="close")for(var Z=1;Z<M.length;Z++)M[Z]=""}}}}return Fo(y)}catch{return f}}var Is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ol={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sn;function Vi(){}q(Vi,Ci),Vi.prototype.g=function(){return new XMLHttpRequest},Vi.prototype.i=function(){return{}},Sn=new Vi;function An(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new al}function al(){this.i=null,this.g="",this.h=!1}var qo={},Ss={};function As(l,f,y){l.L=1,l.v=zr(rn(f)),l.m=y,l.P=!0,Wo(l,null)}function Wo(l,f){l.F=Date.now(),We(l),l.A=rn(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Br(y.i,"t",E),l.C=0,y=l.j.J,l.h=new al,l.g=Al(l.j,y?f:null,!l.m),0<l.O&&(l.M=new Ri(C(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(Lo[0]=M.toString()),M=Lo);for(var z=0;z<M.length;z++){var Z=Do(y,M[z],E||f.handleEvent,!1,f.h||f);if(!Z)break;f.g[Z.key]=Z}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),dr(),Di(l.i,l.u,l.A,l.l,l.R,l.m)}An.prototype.ca=function(l){l=l.target;const f=this.M;f&&Gt(l)==3?f.j():this.Y(l)},An.prototype.Y=function(l){try{if(l==this.g)e:{const at=Gt(this.g);var f=this.g.Ba();const pn=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||Jo(this.g)))){this.J||at!=4||f==7||(f==8||0>=pn?dr(3):dr(2)),Oi(this);var y=this.g.Z();this.X=y;t:if(ll(this)){var E=Jo(this.g);l="";var M=E.length,z=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dn(this),Lr(this);var Z="";break t}this.h.i=new m.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(z&&f==M-1)});E.length=0,this.h.g+=l,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,Ts(this.i,this.u,this.A,this.l,this.R,at,y),this.o){if(this.T&&!this.K){t:{if(this.g){var je,gt=this.g;if((je=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!he(je)){var xe=je;break t}}xe=null}if(y=xe)In(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Go(this,y);else{this.o=!1,this.s=3,it(12),dn(this),Lr(this);break e}}if(this.P){y=!0;let on;for(;!this.J&&this.C<Z.length;)if(on=Cc(this,Z),on==Ss){at==4&&(this.s=4,it(14),y=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(on==qo){this.s=4,it(15),In(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else In(this.i,this.l,on,null),Go(this,on);if(ll(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||Z.length!=0||this.h.h||(this.s=1,it(16),y=!1),this.o=this.o&&y,!y)In(this.i,this.l,Z,"[Invalid Chunked Response]"),dn(this),Lr(this);else if(0<Z.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),ea(wt),wt.M=!0,it(11))}}else In(this.i,this.l,Z,null),Go(this,Z);at==4&&dn(this),this.o&&!this.J&&(at==4?Ls(this.j,this):(this.o=!1,We(this)))}else Ds(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),dn(this),Lr(this)}}}catch{}finally{}};function ll(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Cc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?Ss:(y=Number(f.substring(y,E)),isNaN(y)?qo:(E+=1,E+y>f.length?Ss:(f=f.slice(E,E+y),l.C=E+y,f)))}An.prototype.cancel=function(){this.J=!0,dn(this)};function We(l){l.S=Date.now()+l.I,ul(l,l.I)}function ul(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Tn(C(l.ba,l),f)}function Oi(l){l.B&&(m.clearTimeout(l.B),l.B=null)}An.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Ho(this.i,this.A),this.L!=2&&(dr(),it(17)),dn(this),this.s=2,Lr(this)):ul(this,this.S-l)};function Lr(l){l.j.G==0||l.J||Ls(l.j,l)}function dn(l){Oi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,bo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Go(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Bt(y.h,l))){if(!l.K&&Bt(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Ms(y),Nn(y);else break e;xs(y),it(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=Tn(C(y.Za,y),6e3));if(1>=hl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else yr(y,11)}else if((l.K||y.g==l)&&Ms(y),!he(f))for(M=y.Da.g.parse(f),f=0;f<M.length;f++){let xe=M[f];if(y.T=xe[0],xe=xe[1],y.G==2)if(xe[0]=="c"){y.K=xe[1],y.ia=xe[2];const wt=xe[3];wt!=null&&(y.la=wt,y.j.info("VER="+y.la));const at=xe[4];at!=null&&(y.Aa=at,y.j.info("SVER="+y.Aa));const pn=xe[5];pn!=null&&typeof pn=="number"&&0<pn&&(E=1.5*pn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const on=l.g;if(on){const zi=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zi){var z=E.h;z.g||zi.indexOf("spdy")==-1&&zi.indexOf("quic")==-1&&zi.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Ko(z,z.h),z.h=null))}if(E.D){const Fs=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;Fs&&(E.ya=Fs,He(E.I,E.D,Fs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var Z=l;if(E.qa=Sl(E,E.J?E.ia:null,E.W),Z.K){dl(E.h,Z);var je=Z,gt=E.L;gt&&(je.I=gt),je.B&&(Oi(je),We(je)),E.g=Z}else Ui(E);0<y.i.length&&Kn(y)}else xe[0]!="stop"&&xe[0]!="close"||yr(y,7);else y.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?yr(y,7):Ct(y):xe[0]!="noop"&&y.l&&y.l.ta(xe),y.v=0)}}dr(4)}catch{}}var cl=class{constructor(l,f){this.g=l,this.map=f}};function xi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function hl(l){return l.h?1:l.g?l.g.size:0}function Bt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Ko(l,f){l.g?l.g.add(f):l.h=f}function dl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}xi.prototype.cancel=function(){if(this.i=fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function fl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return X(l.i)}function Rs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function ks(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function br(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=ks(l),E=Rs(l),M=E.length,z=0;z<M;z++)f.call(void 0,E[z],y&&y[z],l)}var Mi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),M=null;if(0<=E){var z=l[y].substring(0,E);M=l[y].substring(E+1)}else z=l[y];f(z,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function fr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof fr){this.h=l.h,Li(this,l.j),this.o=l.o,this.g=l.g,Fr(this,l.s),this.l=l.l;var f=l.i,y=new qn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Ur(this,y),this.m=l.m}else l&&(f=String(l).match(Mi))?(this.h=!1,Li(this,f[1]||"",!0),this.o=Ne(f[2]||""),this.g=Ne(f[3]||"",!0),Fr(this,f[4]),this.l=Ne(f[5]||"",!0),Ur(this,f[6]||"",!0),this.m=Ne(f[7]||"")):(this.h=!1,this.i=new qn(null,this.h))}fr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(jr(f,Cs,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(jr(f,Cs,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(jr(y,y.charAt(0)=="/"?gl:ml,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",jr(y,Qo)),l.join("")};function rn(l){return new fr(l)}function Li(l,f,y){l.j=y?Ne(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Fr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Ur(l,f,y){f instanceof qn?(l.i=f,Wn(l.i,l.h)):(y||(f=jr(f,yl)),l.i=new qn(f,l.h))}function He(l,f,y){l.i.set(f,y)}function zr(l){return He(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ne(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function jr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,pl),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function pl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Cs=/[#\/\?@]/g,ml=/[#\?:]/g,gl=/[#\?]/g,yl=/[#\?@]/g,Qo=/#/g;function qn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function kt(l){l.g||(l.g=new Map,l.h=0,l.i&&Pc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=qn.prototype,i.add=function(l,f){kt(this),this.i=null,l=fn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Rn(l,f){kt(l),f=fn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function kn(l,f){return kt(l),f=fn(l,f),l.g.has(f)}i.forEach=function(l,f){kt(this),this.g.forEach(function(y,E){y.forEach(function(M){l.call(f,M,E,this)},this)},this)},i.na=function(){kt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const M=l[E];for(let z=0;z<M.length;z++)y.push(f[E])}return y},i.V=function(l){kt(this);let f=[];if(typeof l=="string")kn(this,l)&&(f=f.concat(this.g.get(fn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return kt(this),this.i=null,l=fn(this,l),kn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Br(l,f,y){Rn(l,f),0<y.length&&(l.i=null,l.g.set(fn(l,f),X(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const z=encodeURIComponent(String(E)),Z=this.V(E);for(E=0;E<Z.length;E++){var M=z;Z[E]!==""&&(M+="="+encodeURIComponent(String(Z[E]))),l.push(M)}}return this.i=l.join("&")};function fn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Wn(l,f){f&&!l.j&&(kt(l),l.i=null,l.g.forEach(function(y,E){var M=E.toLowerCase();E!=M&&(Rn(this,E),Br(this,M,y))},l)),l.j=f}function Nc(l,f){const y=new Ni;if(m.Image){const E=new Image;E.onload=j(Wt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=j(Wt,y,"TestLoadImage: error",!1,f,E),E.onabort=j(Wt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=j(Wt,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function _l(l,f){const y=new Ni,E=new AbortController,M=setTimeout(()=>{E.abort(),Wt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(z=>{clearTimeout(M),z.ok?Wt(y,"TestPingServer: ok",!0,f):Wt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),Wt(y,"TestPingServer: error",!1,f)})}function Wt(l,f,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function Dc(){this.g=new zo}function vl(l,f,y){const E=y||"";try{br(l,function(M,z){let Z=M;v(M)&&(Z=Fo(M)),f.push(E+z+"="+encodeURIComponent(Z))})}catch(M){throw f.push(E+"type="+encodeURIComponent("_badmap")),M}}function pr(l){this.l=l.Ub||null,this.j=l.eb||!1}q(pr,Ci),pr.prototype.g=function(){return new bi(this.l,this.j)},pr.prototype.i=(function(l){return function(){return l}})({});function bi(l,f){pt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(bi,pt),i=bi.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Pn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;El(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function El(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Cn(this):Pn(this),this.readyState==3&&El(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Cn(this))},i.Qa=function(l){this.g&&(this.response=l,Cn(this))},i.ga=function(){this.g&&Cn(this)};function Cn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Pn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Pn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function mr(l){let f="";return Ie(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function $r(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=mr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):He(l,f,y))}function Je(l){pt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(Je,pt);var Vc=/^https?$/i,Xo=["POST","PUT"];i=Je.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sn.g(),this.v=this.o?_s(this.o):_s(Sn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(z){Fi(this,z);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const z of E.keys())y.set(z,E.get(z));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),M=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Xo,f,void 0))||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Z]of y)this.g.setRequestHeader(z,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ns(this),this.u=!0,this.g.send(l),this.u=!1}catch(z){Fi(this,z)}};function Fi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Ps(l),sn(l)}function Ps(l){l.A||(l.A=!0,mt(l,"complete"),mt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,mt(this,"complete"),mt(this,"abort"),sn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sn(this,!0)),Je.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Yo(this):this.bb())},i.bb=function(){Yo(this)};function Yo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Gt(l)!=4||l.Z()!=2)){if(l.u&&Gt(l)==4)Mo(l.Ea,0,l);else if(mt(l,"readystatechange"),Gt(l)==4){l.h=!1;try{const Z=l.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=Z===0){var M=String(l.D).match(Mi)[1]||null;!M&&m.self&&m.self.location&&(M=m.self.location.protocol.slice(0,-1)),E=!Vc.test(M?M.toLowerCase():"")}y=E}if(y)mt(l,"complete"),mt(l,"success");else{l.m=6;try{var z=2<Gt(l)?l.g.statusText:""}catch{z=""}l.l=z+" ["+l.Z()+"]",Ps(l)}}finally{sn(l)}}}}function sn(l,f){if(l.g){Ns(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||mt(l,"ready");try{y.onreadystatechange=E}catch{}}}function Ns(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Gt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Uo(f)}};function Jo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ds(l){const f={};l=(l.g&&2<=Gt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(he(l[E]))continue;var y=V(l[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=f[M]||[];f[M]=z,z.push(y)}D(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function Zo(l){this.Aa=0,this.i=[],this.j=new Ni,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gn("baseRetryDelayMs",5e3,l),this.cb=Gn("retryDelaySeedMs",1e4,l),this.Wa=Gn("forwardChannelMaxRetries",2,l),this.wa=Gn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new xi(l&&l.concurrentRequestLimit),this.Da=new Dc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Zo.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,E){it(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Sl(this,null,this.W),Kn(this)};function Ct(l){if(Vs(l),l.G==3){var f=l.U++,y=rn(l.I);if(He(y,"SID",l.K),He(y,"RID",f),He(y,"TYPE","terminate"),gr(l,y),f=new An(l,l.j,f),f.L=2,f.v=zr(rn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=Al(f.j,null),f.g.ea(f.v)),f.F=Date.now(),We(f)}Il(l)}function Nn(l){l.g&&(ea(l),l.g.cancel(),l.g=null)}function Vs(l){Nn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Ms(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Kn(l){if(!nn(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ve||ie(),Y||(Ve(),Y=!0),ue.add(f,l),l.B=0}}function Oc(l,f){return hl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Tn(C(l.Ga,l,f),Tl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new An(this,this.j,l);let z=this.o;if(this.S&&(z?(z=I(z),P(z,this.S)):z=this.S),this.m!==null||this.O||(M.H=z,z=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Hr(this,M,f),y=rn(this.I),He(y,"RID",l),He(y,"CVER",22),this.D&&He(y,"X-HTTP-Session-Id",this.D),gr(this,y),z&&(this.O?f="headers="+encodeURIComponent(String(mr(z)))+"&"+f:this.m&&$r(y,this.m,z)),Ko(this.h,M),this.Ua&&He(y,"TYPE","init"),this.P?(He(y,"$req",f),He(y,"SID","null"),M.T=!0,As(M,y,null)):As(M,y,f),this.G=2}}else this.G==3&&(l?Os(this,l):this.i.length==0||nn(this.h)||Os(this))};function Os(l,f){var y;f?y=f.l:y=l.U++;const E=rn(l.I);He(E,"SID",l.K),He(E,"RID",y),He(E,"AID",l.T),gr(l,E),l.m&&l.o&&$r(E,l.m,l.o),y=new An(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Hr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ko(l.h,y),As(y,E,f)}function gr(l,f){l.H&&Ie(l.H,function(y,E){He(f,E,y)}),l.l&&br({},function(y,E){He(f,E,y)})}function Hr(l,f,y){y=Math.min(l.i.length,y);var E=l.l?C(l.l.Na,l.l,l):null;e:{var M=l.i;let z=-1;for(;;){const Z=["count="+y];z==-1?0<y?(z=M[0].g,Z.push("ofs="+z)):z=0:Z.push("ofs="+z);let je=!0;for(let gt=0;gt<y;gt++){let xe=M[gt].g;const wt=M[gt].map;if(xe-=z,0>xe)z=Math.max(0,M[gt].g-100),je=!1;else try{vl(wt,Z,"req"+xe+"_")}catch{E&&E(wt)}}if(je){E=Z.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function Ui(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ve||ie(),Y||(Ve(),Y=!0),ue.add(f,l),l.v=0}}function xs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Tn(C(l.Fa,l),Tl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,wl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Tn(C(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Nn(this),wl(this))};function ea(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function wl(l){l.g=new An(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=rn(l.qa);He(f,"RID","rpc"),He(f,"SID",l.K),He(f,"AID",l.T),He(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&He(f,"TO",l.ja),He(f,"TYPE","xmlhttp"),gr(l,f),l.m&&l.o&&$r(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=zr(rn(f)),y.m=null,y.P=!0,Wo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,Nn(this),xs(this),it(19))};function Ms(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Ls(l,f){var y=null;if(l.g==f){Ms(l),ea(l),l.g=null;var E=2}else if(Bt(l.h,f))y=f.D,dl(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var M=l.B;E=Pi(),mt(E,new ws(E,y)),Kn(l)}else Ui(l);else if(M=f.s,M==3||M==0&&0<f.X||!(E==1&&Oc(l,f)||E==2&&xs(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),M){case 1:yr(l,5);break;case 4:yr(l,10);break;case 3:yr(l,6);break;default:yr(l,2)}}}function Tl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function yr(l,f){if(l.j.info("Error code "+f),f==2){var y=C(l.fb,l),E=l.Xa;const M=!E;E=new fr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Li(E,"https"),zr(E),M?Nc(E.toString(),y):_l(E.toString(),y)}else it(2);l.G=0,l.l&&l.l.sa(f),Il(l),Vs(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Il(l){if(l.G=0,l.ka=[],l.l){const f=fl(l.h);(f.length!=0||l.i.length!=0)&&($(l.ka,f),$(l.ka,l.i),l.h.i.length=0,X(l.i),l.i.length=0),l.l.ra()}}function Sl(l,f,y){var E=y instanceof fr?rn(y):new fr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Fr(E,E.s);else{var M=m.location;E=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var z=new fr(null);E&&Li(z,E),f&&(z.g=f),M&&Fr(z,M),y&&(z.l=y),E=z}return y=l.D,f=l.ya,y&&f&&He(E,y,f),He(E,"VER",l.la),gr(l,E),E}function Al(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Je(new pr({eb:y})):new Je(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function ta(){}i=ta.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function bs(){}bs.prototype.g=function(l,f){return new $t(l,f)};function $t(l,f){pt.call(this),this.g=new Zo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!he(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!he(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Qn(this)}q($t,pt),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Ct(this.g)},$t.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Fo(l),l=y);f.i.push(new cl(f.Ya++,l)),f.G==3&&Kn(f)},$t.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,$t.aa.N.call(this)};function Rl(l){$n.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}q(Rl,$n);function kl(){Es.call(this),this.status=1}q(kl,Es);function Qn(l){this.g=l}q(Qn,ta),Qn.prototype.ua=function(){mt(this.g,"a")},Qn.prototype.ta=function(l){mt(this.g,new Rl(l))},Qn.prototype.sa=function(l){mt(this.g,new kl)},Qn.prototype.ra=function(){mt(this.g,"b")},bs.prototype.createWebChannel=bs.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,n_=function(){return new bs},t_=function(){return Pi()},e_=Hn,Ed={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Is.NO_ERROR=0,Is.TIMEOUT=8,Is.HTTP_ERROR=6,Nu=Is,ol.COMPLETE="complete",Zy=ol,vs.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",pt.prototype.listen=pt.prototype.K,ka=vs,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,Jy=Je}).apply(typeof wu<"u"?wu:typeof self<"u"?self:typeof window<"u"?window:{});const mg="@firebase/firestore",gg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new qd("@firebase/firestore");function so(){return as.logLevel}function re(i,...e){if(as.logLevel<=Ce.DEBUG){const t=e.map(Kd);as.debug(`Firestore (${Ao}): ${i}`,...t)}}function Nr(i,...e){if(as.logLevel<=Ce.ERROR){const t=e.map(Kd);as.error(`Firestore (${Ao}): ${i}`,...t)}}function gi(i,...e){if(as.logLevel<=Ce.WARN){const t=e.map(Kd);as.warn(`Firestore (${Ao}): ${i}`,...t)}}function Kd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,r_(i,s,t)}function r_(i,e,t){let s=`FIRESTORE (${Ao}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Nr(s),new Error(s)}function ze(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||r_(e,o,s)}function we(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Or{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class rT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class iT{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new ns;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ns,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ns)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string",31837,{l:s}),new i_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class sT{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class oT{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new sT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class yg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,bn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const s=u=>{u.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new yg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new yg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=lT(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ae(i,e){return i<e?-1:i>e?1:0}function wd(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ae(s,o);{const u=s_(),h=uT(u.encode(_g(i,t)),u.encode(_g(e,t)));return h!==0?h:Ae(s,o)}}t+=s>65535?2:1}return Ae(i.length,e.length)}function _g(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function uT(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Ae(i[t],e[t]);return Ae(i.length,e.length)}function go(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="__name__";class er{constructor(e,t,s){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ye(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return er.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof er?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=er.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ae(e.length,t.length)}static compareSegments(e,t){const s=er.isNumericId(e),o=er.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?er.extractNumericId(e).compare(er.extractNumericId(t)):wd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fi.fromString(e.substring(4,e.length-2))}}class Ke extends er{construct(e,t,s){return new Ke(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ne(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const cT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends er{construct(e,t,s){return new Vt(e,t,s)}static isValidIdentifier(e){return cT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vg}static keyField(){return new Vt([vg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ne(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ne(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ne(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ne(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Vt(t)}static emptyPath(){return new Vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(Ke.fromString(e))}static fromName(e){return new fe(Ke.fromString(e).popFirst(5))}static empty(){return new fe(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new Ke(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(i,e,t){if(!t)throw new ne(B.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function hT(i,e,t,s){if(e===!0&&s===!0)throw new ne(B.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Eg(i){if(!fe.isDocumentKey(i))throw new ne(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function wg(i){if(fe.isDocumentKey(i))throw new ne(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function a_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function uc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ye(12329,{type:typeof i})}function pi(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ne(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=uc(i);throw new ne(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Xa(i,e){if(!a_(i))throw new ne(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ne(B.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=-62135596800,Ig=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Ig);return new Ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Tg)throw new ne(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ig}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xa(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Tg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:dt("string",Ye._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Ye(0,0))}static max(){return new Ee(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=-1;function dT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(s===1e9?new Ye(t+1,0):new Ye(t,s));return new yi(o,fe.empty(),e)}function fT(i){return new yi(i.readTime,i.key,za)}class yi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new yi(Ee.min(),fe.empty(),za)}static max(){return new yi(Ee.max(),fe.empty(),za)}}function pT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(i.documentKey,e.documentKey),t!==0?t:Ae(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(i){if(i.code!==B.FAILED_PRECONDITION||i.message!==mT)throw i;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,s)=>{t(e)}))}static reject(e){return new H(((t,s)=>{s(e)}))}static waitFor(e){return new H(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next((o=>o?H.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new H(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next((w=>{h[v]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new H(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function yT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ko(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}cc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=-1;function hc(i){return i==null}function $u(i){return i===0&&1/i==-1/0}function _T(i){return typeof i=="number"&&Number.isInteger(i)&&!$u(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="";function vT(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Sg(e)),e=ET(i.get(t),e);return Sg(e)}function ET(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case l_:t+="";break;default:t+=u}}return t}function Sg(i){return i+l_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ii(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function u_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tu(this.root,e,this.comparator,!0)}}class Tu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Dt.RED,this.left=o??Dt.EMPTY,this.right=u??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Dt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Rg(this.data.getIterator())}getIteratorFrom(e){return new Rg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Rg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.fields=e,e.sort(Vt.comparator)}static empty(){return new cn([])}unionWith(e){let t=new vt(Vt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new cn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new c_("Invalid base64 string: "+u):u}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const wT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _i(i){if(ze(!!i,39018),typeof i=="string"){let e=0;const t=wT.exec(i);if(ze(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ot(i.seconds),nanos:ot(i.nanos)}}function ot(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function vi(i){return typeof i=="string"?Ot.fromBase64String(i):Ot.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="server_timestamp",d_="__type__",f_="__previous_value__",p_="__local_write_time__";function Yd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[d_])===null||t===void 0?void 0:t.stringValue)===h_}function dc(i){const e=i.mapValue.fields[f_];return Yd(e)?dc(e):e}function ja(i){const e=_i(i.mapValue.fields[p_].timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,t,s,o,u,h,m,g,v,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=v,this.isUsingEmulator=w}}const Hu="(default)";class Ba{constructor(e,t){this.projectId=e,this.database=t||Hu}static empty(){return new Ba("","")}get isDefaultDatabase(){return this.database===Hu}isEqual(e){return e instanceof Ba&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="__type__",IT="__max__",Iu={mapValue:{}},g_="__vector__",qu="value";function Ei(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Yd(i)?4:AT(i)?9007199254740991:ST(i)?10:11:ye(28295,{value:i})}function or(i,e){if(i===e)return!0;const t=Ei(i);if(t!==Ei(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return ja(i).isEqual(ja(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=_i(o.timestampValue),m=_i(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return vi(o.bytesValue).isEqual(vi(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return ot(o.geoPointValue.latitude)===ot(u.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return ot(o.integerValue)===ot(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=ot(o.doubleValue),m=ot(u.doubleValue);return h===m?$u(h)===$u(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return go(i.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Ag(h)!==Ag(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!or(h[g],m[g])))return!1;return!0})(i,e);default:return ye(52216,{left:i})}}function $a(i,e){return(i.values||[]).find((t=>or(t,e)))!==void 0}function yo(i,e){if(i===e)return 0;const t=Ei(i),s=Ei(e);if(t!==s)return Ae(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=ot(u.integerValue||u.doubleValue),g=ot(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(i,e);case 3:return kg(i.timestampValue,e.timestampValue);case 4:return kg(ja(i),ja(e));case 5:return wd(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=vi(u),g=vi(h);return m.compareTo(g)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let v=0;v<m.length&&v<g.length;v++){const w=Ae(m[v],g[v]);if(w!==0)return w}return Ae(m.length,g.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Ae(ot(u.latitude),ot(h.latitude));return m!==0?m:Ae(ot(u.longitude),ot(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Cg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,g,v,w;const A=u.fields||{},C=h.fields||{},j=(m=A[qu])===null||m===void 0?void 0:m.arrayValue,q=(g=C[qu])===null||g===void 0?void 0:g.arrayValue,X=Ae(((v=j==null?void 0:j.values)===null||v===void 0?void 0:v.length)||0,((w=q==null?void 0:q.values)===null||w===void 0?void 0:w.length)||0);return X!==0?X:Cg(j,q)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Iu.mapValue&&h===Iu.mapValue)return 0;if(u===Iu.mapValue)return 1;if(h===Iu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),v=h.fields||{},w=Object.keys(v);g.sort(),w.sort();for(let A=0;A<g.length&&A<w.length;++A){const C=wd(g[A],w[A]);if(C!==0)return C;const j=yo(m[g[A]],v[w[A]]);if(j!==0)return j}return Ae(g.length,w.length)})(i.mapValue,e.mapValue);default:throw ye(23264,{le:t})}}function kg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ae(i,e);const t=_i(i),s=_i(e),o=Ae(t.seconds,s.seconds);return o!==0?o:Ae(t.nanos,s.nanos)}function Cg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=yo(t[o],s[o]);if(u)return u}return Ae(t.length,s.length)}function _o(i){return Td(i)}function Td(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=_i(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return vi(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return fe.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Td(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Td(t.fields[h])}`;return o+"}"})(i.mapValue):ye(61005,{value:i})}function Du(i){switch(Ei(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=dc(i);return e?16+Du(e):16;case 5:return 2*i.stringValue.length;case 6:return vi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Du(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return Ii(s.fields,((u,h)=>{o+=u.length+Du(h)})),o})(i.mapValue);default:throw ye(13486,{value:i})}}function Pg(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Id(i){return!!i&&"integerValue"in i}function Jd(i){return!!i&&"arrayValue"in i}function Ng(i){return!!i&&"nullValue"in i}function Dg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Vu(i){return!!i&&"mapValue"in i}function ST(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[m_])===null||t===void 0?void 0:t.stringValue)===g_}function xa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Ii(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=xa(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function AT(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===IT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Vu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xa(t)}setAll(e){let t=Vt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=xa(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Vu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Vu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ii(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new tn(xa(this.value))}}function y_(i){const e=[];return Ii(i.fields,((t,s)=>{const o=new Vt([t]);if(Vu(s)){const u=y_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new cn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new zt(e,0,Ee.min(),Ee.min(),Ee.min(),tn.empty(),0)}static newFoundDocument(e,t,s,o){return new zt(e,1,t,Ee.min(),s,o,0)}static newNoDocument(e,t){return new zt(e,2,t,Ee.min(),Ee.min(),tn.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,Ee.min(),Ee.min(),tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t){this.position=e,this.inclusive=t}}function Vg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=fe.comparator(fe.fromName(h.referenceValue),t.key):s=yo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Og(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!or(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t="asc"){this.field=e,this.dir=t}}function RT(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{}class ht extends __{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new CT(e,t,s):t==="array-contains"?new DT(e,s):t==="in"?new VT(e,s):t==="not-in"?new OT(e,s):t==="array-contains-any"?new xT(e,s):new ht(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new PT(e,s):new NT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(yo(t,this.value)):t!==null&&Ei(this.value)===Ei(t)&&this.matchesComparison(yo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends __{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new jn(e,t)}matches(e){return v_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function v_(i){return i.op==="and"}function E_(i){return kT(i)&&v_(i)}function kT(i){for(const e of i.filters)if(e instanceof jn)return!1;return!0}function Sd(i){if(i instanceof ht)return i.field.canonicalString()+i.op.toString()+_o(i.value);if(E_(i))return i.filters.map((e=>Sd(e))).join(",");{const e=i.filters.map((t=>Sd(t))).join(",");return`${i.op}(${e})`}}function w_(i,e){return i instanceof ht?(function(s,o){return o instanceof ht&&s.op===o.op&&s.field.isEqual(o.field)&&or(s.value,o.value)})(i,e):i instanceof jn?(function(s,o){return o instanceof jn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&w_(h,o.filters[m])),!0):!1})(i,e):void ye(19439)}function T_(i){return i instanceof ht?(function(t){return`${t.field.canonicalString()} ${t.op} ${_o(t.value)}`})(i):i instanceof jn?(function(t){return t.op.toString()+" {"+t.getFilters().map(T_).join(" ,")+"}"})(i):"Filter"}class CT extends ht{constructor(e,t,s){super(e,t,s),this.key=fe.fromName(s.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class PT extends ht{constructor(e,t){super(e,"in",t),this.keys=I_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class NT extends ht{constructor(e,t){super(e,"not-in",t),this.keys=I_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function I_(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>fe.fromName(s.referenceValue)))}class DT extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jd(t)&&$a(t.arrayValue,this.value)}}class VT extends ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$a(this.value.arrayValue,t)}}class OT extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if($a(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$a(this.value.arrayValue,t)}}class xT extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>$a(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Pe=null}}function xg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new MT(i,e,t,s,o,u,h)}function Zd(i){const e=we(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Sd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),hc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>_o(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>_o(s))).join(",")),e.Pe=t}return e.Pe}function ef(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!RT(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!w_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Og(i.startAt,e.startAt)&&Og(i.endAt,e.endAt)}function Ad(i){return fe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function LT(i,e,t,s,o,u,h,m){return new Co(i,e,t,s,o,u,h,m)}function tf(i){return new Co(i)}function Mg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function S_(i){return i.collectionGroup!==null}function Ma(i){const e=we(i);if(e.Te===null){e.Te=[];const t=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new vt(Vt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Te.push(new Ha(u,s))})),t.has(Vt.keyField().canonicalString())||e.Te.push(new Ha(Vt.keyField(),s))}return e.Te}function tr(i){const e=we(i);return e.Ie||(e.Ie=bT(e,Ma(i))),e.Ie}function bT(i,e){if(i.limitType==="F")return xg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Ha(o.field,u)}));const t=i.endAt?new Wu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Wu(i.startAt.position,i.startAt.inclusive):null;return xg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Rd(i,e){const t=i.filters.concat([e]);return new Co(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function kd(i,e,t){return new Co(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function fc(i,e){return ef(tr(i),tr(e))&&i.limitType===e.limitType}function A_(i){return`${Zd(tr(i))}|lt:${i.limitType}`}function oo(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>T_(o))).join(", ")}]`),hc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>_o(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>_o(o))).join(",")),`Target(${s})`})(tr(i))}; limitType=${i.limitType})`}function pc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):fe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Ma(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const v=Vg(h,m,g);return h.inclusive?v<=0:v<0})(s.startAt,Ma(s),o)||s.endAt&&!(function(h,m,g){const v=Vg(h,m,g);return h.inclusive?v>=0:v>0})(s.endAt,Ma(s),o))})(i,e)}function FT(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function R_(i){return(e,t)=>{let s=!1;for(const o of Ma(i)){const u=UT(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function UT(i,e,t){const s=i.field.isKeyField()?fe.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),v=m.data.field(u);return g!==null&&v!==null?yo(g,v):ye(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ye(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ii(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return u_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=new nt(fe.comparator);function Dr(){return zT}const k_=new nt(fe.comparator);function Ca(...i){let e=k_;for(const t of i)e=e.insert(t.key,t);return e}function C_(i){let e=k_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function es(){return La()}function P_(){return La()}function La(){return new cs((i=>i.toString()),((i,e)=>i.isEqual(e)))}const jT=new nt(fe.comparator),BT=new vt(fe.comparator);function Pe(...i){let e=BT;for(const t of i)e=e.add(t);return e}const $T=new vt(Ae);function HT(){return $T}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$u(e)?"-0":e}}function N_(i){return{integerValue:""+i}}function qT(i,e){return _T(e)?N_(e):nf(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this._=void 0}}function WT(i,e,t){return i instanceof Gu?(function(o,u){const h={fields:{[d_]:{stringValue:h_},[p_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Yd(u)&&(u=dc(u)),u&&(h.fields[f_]=u),{mapValue:h}})(t,e):i instanceof qa?V_(i,e):i instanceof Wa?O_(i,e):(function(o,u){const h=D_(o,u),m=Lg(h)+Lg(o.Ee);return Id(h)&&Id(o.Ee)?N_(m):nf(o.serializer,m)})(i,e)}function GT(i,e,t){return i instanceof qa?V_(i,e):i instanceof Wa?O_(i,e):t}function D_(i,e){return i instanceof Ku?(function(s){return Id(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Gu extends mc{}class qa extends mc{constructor(e){super(),this.elements=e}}function V_(i,e){const t=x_(e);for(const s of i.elements)t.some((o=>or(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Wa extends mc{constructor(e){super(),this.elements=e}}function O_(i,e){let t=x_(e);for(const s of i.elements)t=t.filter((o=>!or(o,s)));return{arrayValue:{values:t}}}class Ku extends mc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Lg(i){return ot(i.integerValue||i.doubleValue)}function x_(i){return Jd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function KT(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof qa&&o instanceof qa||s instanceof Wa&&o instanceof Wa?go(s.elements,o.elements,or):s instanceof Ku&&o instanceof Ku?or(s.Ee,o.Ee):s instanceof Gu&&o instanceof Gu})(i.transform,e.transform)}class QT{constructor(e,t){this.version=e,this.transformResults=t}}class Un{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ou(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class gc{}function M_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new rf(i.key,Un.none()):new Ya(i.key,i.data,Un.none());{const t=i.data,s=tn.empty();let o=new vt(Vt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Si(i.key,s,new cn(o.toArray()),Un.none())}}function XT(i,e,t){i instanceof Ya?(function(o,u,h){const m=o.value.clone(),g=Fg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof Si?(function(o,u,h){if(!Ou(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Fg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(L_(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function ba(i,e,t,s){return i instanceof Ya?(function(u,h,m,g){if(!Ou(u.precondition,h))return m;const v=u.value.clone(),w=Ug(u.fieldTransforms,g,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof Si?(function(u,h,m,g){if(!Ou(u.precondition,h))return m;const v=Ug(u.fieldTransforms,g,h),w=h.data;return w.setAll(L_(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((A=>A.field)))})(i,e,t,s):(function(u,h,m){return Ou(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function YT(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=D_(s.transform,o||null);u!=null&&(t===null&&(t=tn.empty()),t.set(s.field,u))}return t||null}function bg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&go(s,o,((u,h)=>KT(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Ya extends gc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Si extends gc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function L_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Fg(i,e,t){const s=new Map;ze(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,GT(h,m,t[o]))}return s}function Ug(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,WT(u,h,e))}return s}class rf extends gc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JT extends gc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&XT(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ba(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ba(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=P_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=M_(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ee.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,((t,s)=>bg(t,s)))&&go(this.baseMutations,e.baseMutations,((t,s)=>bg(t,s)))}}class sf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){ze(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return jT})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new sf(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,Me;function nI(i){switch(i){case B.OK:return ye(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return ye(15467,{code:i})}}function b_(i){if(i===void 0)return Nr("GRPC error has no .code"),B.UNKNOWN;switch(i){case ut.OK:return B.OK;case ut.CANCELLED:return B.CANCELLED;case ut.UNKNOWN:return B.UNKNOWN;case ut.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case ut.INTERNAL:return B.INTERNAL;case ut.UNAVAILABLE:return B.UNAVAILABLE;case ut.UNAUTHENTICATED:return B.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case ut.NOT_FOUND:return B.NOT_FOUND;case ut.ALREADY_EXISTS:return B.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return B.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case ut.ABORTED:return B.ABORTED;case ut.OUT_OF_RANGE:return B.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return B.UNIMPLEMENTED;case ut.DATA_LOSS:return B.DATA_LOSS;default:return ye(39323,{code:i})}}(Me=ut||(ut={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=new fi([4294967295,4294967295],0);function zg(i){const e=s_().encode(i),t=new Yy;return t.update(e),new Uint8Array(t.digest())}function jg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new fi([t,s],0),new fi([o,u],0)]}class of{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Pa(`Invalid padding: ${t}`);if(s<0)throw new Pa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Pa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Pa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=fi.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(fi.fromNumber(s)));return o.compare(rI)===1&&(o=new fi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=zg(e),[s,o]=jg(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new of(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.fe===0)return;const t=zg(e),[s,o]=jg(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Pa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ja.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new yc(Ee.min(),o,new nt(Ae),Dr(),Pe())}}class Ja{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ja(s,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class F_{constructor(e,t){this.targetId=e,this.De=t}}class U_{constructor(e,t,s=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Bg{constructor(){this.ve=0,this.Ce=$g(),this.Fe=Ot.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Pe(),t=Pe(),s=Pe();return this.Ce.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ye(38017,{changeType:u})}})),new Ja(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=$g()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class iI{constructor(e){this.We=e,this.Ge=new Map,this.ze=Dr(),this.je=Su(),this.Je=Su(),this.He=new nt(Ae)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const u=o.target;if(Ad(u))if(s===0){const h=new fe(u.path);this.Xe(t,h,zt.newNoDocument(h,Ee.min()))}else ze(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),g=m?this.ut(m,e,h):1;if(g!==0){this.rt(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,v)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=vi(s).toUint8Array()}catch(g){if(g instanceof c_)return gi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new of(h,o,u)}catch(g){return gi(g instanceof Pa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,u,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((u,h)=>{const m=this.st(h);if(m){if(u.current&&Ad(m.target)){const g=new fe(m.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,zt.newNoDocument(g,e))}u.Ne&&(t.set(h,u.Le()),u.ke())}}));let s=Pe();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const v=this.st(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.ze.forEach(((u,h)=>h.setReadTime(e)));const o=new yc(e,t,this.He,this.ze,s);return this.ze=Dr(),this.je=Su(),this.Je=Su(),this.He=new nt(Ae),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Bg,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new vt(Ae),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new vt(Ae),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Bg),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Su(){return new nt(fe.comparator)}function $g(){return new nt(fe.comparator)}const sI={asc:"ASCENDING",desc:"DESCENDING"},oI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aI={and:"AND",or:"OR"};class lI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Cd(i,e){return i.useProto3Json||hc(e)?e:{value:e}}function Qu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function z_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function uI(i,e){return Qu(i,e.toTimestamp())}function nr(i){return ze(!!i,49232),Ee.fromTimestamp((function(t){const s=_i(t);return new Ye(s.seconds,s.nanos)})(i))}function af(i,e){return Pd(i,e).canonicalString()}function Pd(i,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function j_(i){const e=Ke.fromString(i);return ze(W_(e),10190,{key:e.toString()}),e}function Nd(i,e){return af(i.databaseId,e.path)}function ld(i,e){const t=j_(e);if(t.get(1)!==i.databaseId.projectId)throw new ne(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ne(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new fe($_(t))}function B_(i,e){return af(i.databaseId,e)}function cI(i){const e=j_(i);return e.length===4?Ke.emptyPath():$_(e)}function Dd(i){return new Ke(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function $_(i){return ze(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Hg(i,e,t){return{name:Nd(i,e),fields:t.value.mapValue.fields}}function hI(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ye(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(v,w){return v.useProto3Json?(ze(w===void 0||typeof w=="string",58123),Ot.fromBase64String(w||"")):(ze(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Ot.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const w=v.code===void 0?B.UNKNOWN:b_(v.code);return new ne(w,v.message||"")})(h);t=new U_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=ld(i,s.document.name),u=nr(s.document.updateTime),h=s.document.createTime?nr(s.document.createTime):Ee.min(),m=new tn({mapValue:{fields:s.document.fields}}),g=zt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new xu(v,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=ld(i,s.document),u=s.readTime?nr(s.readTime):Ee.min(),h=zt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new xu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=ld(i,s.document),u=s.removedTargetIds||[];t=new xu([],u,o,null)}else{if(!("filter"in e))return ye(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new tI(o,u),m=s.targetId;t=new F_(m,h)}}return t}function dI(i,e){let t;if(e instanceof Ya)t={update:Hg(i,e.key,e.value)};else if(e instanceof rf)t={delete:Nd(i,e.key)};else if(e instanceof Si)t={update:Hg(i,e.key,e.data),updateMask:wI(e.fieldMask)};else{if(!(e instanceof JT))return ye(16599,{Rt:e.type});t={verify:Nd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Gu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof qa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Wa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Ku)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw ye(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:uI(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ye(27497)})(i,e.precondition)),t}function fI(i,e){return i&&i.length>0?(ze(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?nr(o.updateTime):nr(u);return h.isEqual(Ee.min())&&(h=nr(u)),new QT(h,o.transformResults||[])})(t,e)))):[]}function pI(i,e){return{documents:[B_(i,e.path)]}}function mI(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=B_(i,o);const u=(function(v){if(v.length!==0)return q_(jn.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((w=>(function(C){return{field:ao(C.field),direction:_I(C.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Cd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{Vt:t,parent:o}}function gI(i){let e=cI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){ze(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(A){const C=H_(A);return C instanceof jn&&E_(C)?C.getFilters():[C]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((C=>(function(q){return new Ha(lo(q.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(C)))})(t.orderBy));let m=null;t.limit&&(m=(function(A){let C;return C=typeof A=="object"?A.value:A,hc(C)?null:C})(t.limit));let g=null;t.startAt&&(g=(function(A){const C=!!A.before,j=A.values||[];return new Wu(j,C)})(t.startAt));let v=null;return t.endAt&&(v=(function(A){const C=!A.before,j=A.values||[];return new Wu(j,C)})(t.endAt)),LT(e,o,h,u,m,"F",g,v)}function yI(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function H_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=lo(t.unaryFilter.field);return ht.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=lo(t.unaryFilter.field);return ht.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=lo(t.unaryFilter.field);return ht.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=lo(t.unaryFilter.field);return ht.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(i):i.fieldFilter!==void 0?(function(t){return ht.create(lo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return jn.create(t.compositeFilter.filters.map((s=>H_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(t.compositeFilter.op))})(i):ye(30097,{filter:i})}function _I(i){return sI[i]}function vI(i){return oI[i]}function EI(i){return aI[i]}function ao(i){return{fieldPath:i.canonicalString()}}function lo(i){return Vt.fromServerFormat(i.fieldPath)}function q_(i){return i instanceof ht?(function(t){if(t.op==="=="){if(Dg(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NAN"}};if(Ng(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Dg(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NOT_NAN"}};if(Ng(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ao(t.field),op:vI(t.op),value:t.value}}})(i):i instanceof jn?(function(t){const s=t.getFilters().map((o=>q_(o)));return s.length===1?s[0]:{compositeFilter:{op:EI(t.op),filters:s}}})(i):ye(54877,{filter:i})}function wI(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function W_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t,s,o,u=Ee.min(),h=Ee.min(),m=Ot.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new ui(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.gt=e}}function II(i){const e=gI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?kd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(){this.Dn=new AI}addToCollectionParentIndex(e,t){return this.Dn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(yi.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(yi.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class AI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new vt(Ke.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new vt(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},G_=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(G_,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new vo(0)}static ur(){return new vo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="LruGarbageCollector",RI=1048576;function Gg([i,e],[t,s]){const o=Ae(i,t);return o===0?Ae(e,s):o}class kI{constructor(e){this.Tr=e,this.buffer=new vt(Gg),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Gg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class CI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){re(Wg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ko(t)?re(Wg,"Ignoring IndexedDB error during garbage collection: ",t):await Ro(t)}await this.Rr(3e5)}))}}class PI{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(cc.ue);const s=new kI(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(qg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qg):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,u,h,m,g,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(s=A,m=Date.now(),this.removeTargets(e,s,t)))).next((A=>(u=A,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((A=>(v=Date.now(),so()<=Ce.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${A} documents in `+(v-g)+`ms
Total Duration: ${v-w}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A}))))}}function NI(i,e){return new PI(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(){this.changes=new cs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&ba(s.mutation,o,cn.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Pe()){const o=es();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Ca();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=es();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Pe())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Dr();const h=La(),m=(function(){return La()})();return t.forEach(((g,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof Si)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),ba(w.mutation,v,w.mutation.getFieldMask(),Ye.now())):h.set(v.key,cn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((v,w)=>h.set(v,w))),t.forEach(((v,w)=>{var A;return m.set(v,new VI(w,(A=h.get(v))!==null&&A!==void 0?A:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=La();let o=new nt(((h,m)=>h-m)),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const v=t.get(g);if(v===null)return;let w=s.get(g)||cn.empty();w=m.applyToLocalView(v,w),s.set(g,w);const A=(o.get(m.batchId)||Pe()).add(g);o=o.insert(m.batchId,A)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),v=g.key,w=g.value,A=P_();w.forEach((C=>{if(!u.has(C)){const j=M_(t.get(C),s.get(C));j!==null&&A.set(C,j),u=u.add(C)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,A))}return H.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return fe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):S_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):H.resolve(es());let m=za,g=u;return h.next((v=>H.forEach(v,((w,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(w)?H.resolve():this.remoteDocumentCache.getEntry(e,w).next((C=>{g=g.insert(w,C)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,g,v,Pe()))).next((w=>({batchId:m,changes:C_(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((s=>{let o=Ca();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ca();return this.indexManager.getCollectionParents(e,u).next((m=>H.forEach(m,(g=>{const v=(function(A,C){return new Co(C,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((w=>{w.forEach(((A,C)=>{h=h.insert(A,C)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,zt.newInvalidDocument(w)))}));let m=Ca();return h.forEach(((g,v)=>{const w=u.get(g);w!==void 0&&ba(w.mutation,v,cn.empty(),Ye.now()),pc(t,v)&&(m=m.insert(g,v))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return H.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:nr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:II(o.bundledQuery),readTime:nr(o.readTime)}})(t)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.overlays=new nt(fe.comparator),this.kr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=es();return H.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.wt(e,t,u)})),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.kr.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=es(),u=t.length+1,h=new fe(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new nt(((v,w)=>v-w));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=es(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=es(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((v,w)=>m.set(v,w))),!(m.size()>=o)););return H.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new eI(t,s));let u=this.kr.get(t);u===void 0&&(u=Pe(),this.kr.set(t,u)),this.kr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.qr=new vt(At.Qr),this.$r=new vt(At.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new At(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new At(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new fe(new Ke([])),s=new At(t,e),o=new At(t,e+1),u=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new fe(new Ke([])),s=new At(t,e),o=new At(t,e+1);let u=Pe();return this.$r.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new At(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class At{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return fe.comparator(e.key,t.key)||Ae(e.Hr,t.Hr)}static Ur(e,t){return Ae(e.Hr,t.Hr)||fe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new vt(At.Qr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new ZT(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new At(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?Xd:this.er-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);u.push(m)})),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new vt(Ae);return t.forEach((o=>{const u=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),H.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;fe.isDocumentKey(u)||(u=u.child(""));const h=new At(new fe(u),0);let m=new vt(Ae);return this.Yr.forEachWhile((g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(g.Hr)),!0)}),h),H.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return H.forEach(t.mutations,(o=>{const u=new At(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new At(t,0),o=this.Yr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.ni=e,this.docs=(function(){return new nt(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let s=Dr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():zt.newInvalidDocument(o))})),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Dr();const h=t.path,m=new fe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:v,value:{document:w}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||pT(fT(w),s)<=0||(o.has(w.key)||pc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ye(9500)}ri(e,t){return H.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new UI(this)}getSize(e){return H.resolve(this.size)}}class UI extends DI{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),H.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.persistence=e,this.ii=new cs((t=>Zd(t)),ef),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.si=0,this.oi=new lf,this.targetCount=0,this._i=vo.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),H.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new vo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.hr(t),H.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ii.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),H.waitFor(u).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t){this.ai={},this.overlays={},this.ui=new cc(0),this.ci=!1,this.ci=!0,this.li=new LI,this.referenceDelegate=e(this),this.hi=new zI(this),this.indexManager=new SI,this.remoteDocumentCache=(function(o){return new FI(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new TI(t),this.Ti=new xI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new MI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new bI(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){re("MemoryPersistence","Starting transaction:",e);const o=new jI(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return H.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class jI extends gT{constructor(e){super(),this.currentSequenceNumber=e}}class uf{constructor(e){this.persistence=e,this.Ai=new lf,this.Ri=null}static Vi(e){return new uf(e)}get mi(){if(this.Ri)return this.Ri;throw ye(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.mi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.mi,(s=>{const o=fe.fromPath(s);return this.fi(e,o).next((u=>{u||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return H.or([()=>H.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Xu{constructor(e,t){this.persistence=e,this.gi=new cs((s=>vT(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=NI(this,t)}static Vi(e,t){return new Xu(e,t)}Ii(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return H.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((u=>u?H.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Ee.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Du(e.data.value)),t}Sr(e,t,s){return H.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new cf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return F0()?8:yT(jt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ps(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ys(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new BI;return this.ws(e,t,h).next((m=>{if(u.result=m,this.Rs)return this.Ss(e,t,h,m.size)}))})).next((()=>u.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(so()<=Ce.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",oo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):(so()<=Ce.DEBUG&&re("QueryEngine","Query:",oo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(so()<=Ce.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",oo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tr(t))):H.resolve())}ps(e,t){if(Mg(t))return H.resolve(null);let s=tr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=kd(t,null,"F"),s=tr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Pe(...u);return this.gs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const v=this.bs(t,m);return this.Ds(t,v,h,g.readTime)?this.ps(e,kd(t,null,"F")):this.vs(e,v,t,g)}))))})))))}ys(e,t,s,o){return Mg(t)||o.isEqual(Ee.min())?H.resolve(null):this.gs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ds(t,h,s,o)?H.resolve(null):(so()<=Ce.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),oo(t)),this.vs(e,h,t,dT(o,za)).next((m=>m)))}))}bs(e,t){let s=new vt(R_(e));return t.forEach(((o,u)=>{pc(e,u)&&(s=s.add(u))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,t,s){return so()<=Ce.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",oo(t)),this.gs.getDocumentsMatchingQuery(e,t,yi.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="LocalStore",HI=3e8;class qI{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new nt(Ae),this.Ms=new cs((u=>Zd(u)),ef),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OI(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function WI(i,e,t,s){return new qI(i,e,t,s)}async function Q_(i,e){const t=we(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=Pe();for(const v of o){h.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((v=>({Bs:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function GI(i,e){const t=we(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Os.newChangeBuffer({trackRemovals:!0});return(function(m,g,v,w){const A=v.batch,C=A.keys();let j=H.resolve();return C.forEach((q=>{j=j.next((()=>w.getEntry(g,q))).next((X=>{const $=v.docVersions.get(q);ze($!==null,48541),X.version.compareTo($)<0&&(A.applyToRemoteDocument(X,v),X.isValidDocument()&&(X.setReadTime(v.commitVersion),w.addEntry(X)))}))})),j.next((()=>m.mutationQueue.removeMutationBatch(g,A)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=Pe();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(g=g.add(m.batch.mutations[v].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function X_(i){const e=we(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function KI(i,e){const t=we(i),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach(((w,A)=>{const C=o.get(A);if(!C)return;m.push(t.hi.removeMatchingKeys(u,w.removedDocuments,A).next((()=>t.hi.addMatchingKeys(u,w.addedDocuments,A))));let j=C.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?j=j.withResumeToken(Ot.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(A,j),(function(X,$,pe){return X.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=HI?!0:pe.addedDocuments.size+pe.modifiedDocuments.size+pe.removedDocuments.size>0})(C,j,w)&&m.push(t.hi.updateTargetData(u,j))}));let g=Dr(),v=Pe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(QI(u,h,e.documentUpdates).next((w=>{g=w.Ls,v=w.ks}))),!s.isEqual(Ee.min())){const w=t.hi.getLastRemoteSnapshotVersion(u).next((A=>t.hi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return H.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,v))).next((()=>g))})).then((u=>(t.Fs=o,u)))}function QI(i,e,t){let s=Pe(),o=Pe();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Dr();return t.forEach(((m,g)=>{const v=u.get(m);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Ee.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):re(hf,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function XI(i,e){const t=we(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Xd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function YI(i,e){const t=we(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((u=>u?(o=u,H.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new ui(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function Vd(i,e,t){const s=we(i),o=s.Fs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!ko(h))throw h;re(hf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function Kg(i,e,t){const s=we(i);let o=Ee.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,v,w){const A=we(g),C=A.Ms.get(w);return C!==void 0?H.resolve(A.Fs.get(C)):A.hi.getTargetData(v,w)})(s,h,tr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?u:Pe()))).next((m=>(JI(s,FT(e),m),{documents:m,qs:u})))))}function JI(i,e,t){let s=i.xs.get(e)||Ee.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.xs.set(e,s)}class Qg{constructor(){this.activeTargetIds=HT()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZI{constructor(){this.Fo=new Qg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Qg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="ConnectivityMonitor";class Yg{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){re(Xg,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){re(Xg,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Au=null;function Od(){return Au===null?Au=(function(){return 268435456+Math.round(2147483648*Math.random())})():Au++,"0x"+Au.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="RestConnection",t1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class n1{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===Hu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=Od(),m=this.Go(e,t.toUriEncodedString());re(ud,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,u);const{host:v}=new URL(m),w=Io(v);return this.jo(e,m,g,s,w).then((A=>(re(ud,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw gi(ud,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A}))}Jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ao})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Go(e,t){const s=t1[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class i1 extends n1{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,u){const h=Od();return new Promise(((m,g)=>{const v=new Jy;v.setWithCredentials(!0),v.listenOnce(Zy.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Nu.NO_ERROR:const A=v.getResponseJson();re(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case Nu.TIMEOUT:re(Ft,`RPC '${e}' ${h} timed out`),g(new ne(B.DEADLINE_EXCEEDED,"Request time out"));break;case Nu.HTTP_ERROR:const C=v.getStatus();if(re(Ft,`RPC '${e}' ${h} failed with status:`,C,"response text:",v.getResponseText()),C>0){let j=v.getResponseJson();Array.isArray(j)&&(j=j[0]);const q=j==null?void 0:j.error;if(q&&q.status&&q.message){const X=(function(pe){const he=pe.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(he)>=0?he:B.UNKNOWN})(q.status);g(new ne(X,q.message))}else g(new ne(B.UNKNOWN,"Server responded with status "+v.getStatus()))}else g(new ne(B.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{c_:e,streamId:h,l_:v.getLastErrorCode(),h_:v.getLastError()})}}finally{re(Ft,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);re(Ft,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",w,s,15)}))}P_(e,t,s){const o=Od(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=n_(),m=t_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");re(Ft,`Creating RPC '${e}' stream ${o}: ${w}`,g);const A=h.createWebChannel(w,g);this.T_(A);let C=!1,j=!1;const q=new r1({Ho:$=>{j?re(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(C||(re(Ft,`Opening RPC '${e}' stream ${o} transport.`),A.open(),C=!0),re(Ft,`RPC '${e}' stream ${o} sending:`,$),A.send($))},Yo:()=>A.close()}),X=($,pe,he)=>{$.listen(pe,(ae=>{try{he(ae)}catch(Te){setTimeout((()=>{throw Te}),0)}}))};return X(A,ka.EventType.OPEN,(()=>{j||(re(Ft,`RPC '${e}' stream ${o} transport opened.`),q.s_())})),X(A,ka.EventType.CLOSE,(()=>{j||(j=!0,re(Ft,`RPC '${e}' stream ${o} transport closed`),q.__(),this.I_(A))})),X(A,ka.EventType.ERROR,($=>{j||(j=!0,gi(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,$.name,"Message:",$.message),q.__(new ne(B.UNAVAILABLE,"The operation could not be completed")))})),X(A,ka.EventType.MESSAGE,($=>{var pe;if(!j){const he=$.data[0];ze(!!he,16349);const ae=he,Te=(ae==null?void 0:ae.error)||((pe=ae[0])===null||pe===void 0?void 0:pe.error);if(Te){re(Ft,`RPC '${e}' stream ${o} received error:`,Te);const Be=Te.status;let Ie=(function(R){const P=ut[R];if(P!==void 0)return b_(P)})(Be),D=Te.message;Ie===void 0&&(Ie=B.INTERNAL,D="Unknown error status: "+Be+" with message "+Te.message),j=!0,q.__(new ne(Ie,D)),A.close()}else re(Ft,`RPC '${e}' stream ${o} received:`,he),q.a_(he)}})),X(m,e_.STAT_EVENT,($=>{$.stat===Ed.PROXY?re(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):$.stat===Ed.NOPROXY&&re(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{q.o_()}),0),q}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function cd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(i){return new lI(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="PersistentStream";class J_{constructor(e,t,s,o,u,h,m,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Y_(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(Nr(t.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ne(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return re(Jg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(re(Jg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class s1 extends J_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=hI(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Ee.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?nr(h.readTime):Ee.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Dd(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=Ad(g)?{documents:pI(u,g)}:{query:mI(u,g).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=z_(u,h.resumeToken);const v=Cd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(Ee.min())>0){m.readTime=Qu(u,h.snapshotVersion.toTimestamp());const v=Cd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=yI(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Dd(this.serializer),t.removeTarget=e,this.k_(t)}}class o1 extends J_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=fI(e.writeResults,e.commitTime),s=nr(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Dd(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>dI(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{}class l1 extends a1{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ne(B.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Pd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ne(B.UNKNOWN,u.toString())}))}Jo(e,t,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Jo(e,Pd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ne(B.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class u1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Nr(t),this._a=!1):re("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="RemoteStore";class c1{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{hs(this)&&(re(ls,"Restarting streams for network reachability change."),await(async function(g){const v=we(g);v.Ia.add(4),await Za(v),v.Aa.set("Unknown"),v.Ia.delete(4),await vc(v)})(this))}))})),this.Aa=new u1(s,o)}}async function vc(i){if(hs(i))for(const e of i.da)await e(!0)}async function Za(i){for(const e of i.da)await e(!1)}function Z_(i,e){const t=we(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),mf(t)?pf(t):Po(t).x_()&&ff(t,e))}function df(i,e){const t=we(i),s=Po(t);t.Ta.delete(e),s.x_()&&ev(t,e),t.Ta.size===0&&(s.x_()?s.B_():hs(t)&&t.Aa.set("Unknown"))}function ff(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Po(i).H_(e)}function ev(i,e){i.Ra.$e(e),Po(i).Y_(e)}function pf(i){i.Ra=new iI({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),Po(i).start(),i.Aa.aa()}function mf(i){return hs(i)&&!Po(i).M_()&&i.Ta.size>0}function hs(i){return we(i).Ia.size===0}function tv(i){i.Ra=void 0}async function h1(i){i.Aa.set("Online")}async function d1(i){i.Ta.forEach(((e,t)=>{ff(i,e)}))}async function f1(i,e){tv(i),mf(i)?(i.Aa.la(e),pf(i)):i.Aa.set("Unknown")}async function p1(i,e,t){if(i.Aa.set("Online"),e instanceof U_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))})(i,e)}catch(s){re(ls,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Yu(i,s)}else if(e instanceof xu?i.Ra.Ye(e):e instanceof F_?i.Ra.it(e):i.Ra.et(e),!t.isEqual(Ee.min()))try{const s=await X_(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Ra.Pt(h);return m.targetChanges.forEach(((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.Ta.get(v);w&&u.Ta.set(v,w.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,v)=>{const w=u.Ta.get(g);if(!w)return;u.Ta.set(g,w.withResumeToken(Ot.EMPTY_BYTE_STRING,w.snapshotVersion)),ev(u,g);const A=new ui(w.target,g,v,w.sequenceNumber);ff(u,A)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){re(ls,"Failed to raise snapshot:",s),await Yu(i,s)}}async function Yu(i,e,t){if(!ko(e))throw e;i.Ia.add(1),await Za(i),i.Aa.set("Offline"),t||(t=()=>X_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{re(ls,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await vc(i)}))}function nv(i,e){return e().catch((t=>Yu(i,t,e)))}async function Ec(i){const e=we(i),t=wi(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Xd;for(;m1(e);)try{const o=await XI(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,g1(e,o)}catch(o){await Yu(e,o)}rv(e)&&iv(e)}function m1(i){return hs(i)&&i.Pa.length<10}function g1(i,e){i.Pa.push(e);const t=wi(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function rv(i){return hs(i)&&!wi(i).M_()&&i.Pa.length>0}function iv(i){wi(i).start()}async function y1(i){wi(i).na()}async function _1(i){const e=wi(i);for(const t of i.Pa)e.X_(t.mutations)}async function v1(i,e,t){const s=i.Pa.shift(),o=sf.from(s,e,t);await nv(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await Ec(i)}async function E1(i,e){e&&wi(i).Z_&&await(async function(s,o){if((function(h){return nI(h)&&h!==B.ABORTED})(o.code)){const u=s.Pa.shift();wi(s).N_(),await nv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Ec(s)}})(i,e),rv(i)&&iv(i)}async function Zg(i,e){const t=we(i);t.asyncQueue.verifyOperationInProgress(),re(ls,"RemoteStore received new credentials");const s=hs(t);t.Ia.add(3),await Za(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await vc(t)}async function w1(i,e){const t=we(i);e?(t.Ia.delete(2),await vc(t)):e||(t.Ia.add(2),await Za(t),t.Aa.set("Unknown"))}function Po(i){return i.Va||(i.Va=(function(t,s,o){const u=we(t);return u.ia(),new s1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:h1.bind(null,i),e_:d1.bind(null,i),n_:f1.bind(null,i),J_:p1.bind(null,i)}),i.da.push((async e=>{e?(i.Va.N_(),mf(i)?pf(i):i.Aa.set("Unknown")):(await i.Va.stop(),tv(i))}))),i.Va}function wi(i){return i.ma||(i.ma=(function(t,s,o){const u=we(t);return u.ia(),new o1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:y1.bind(null,i),n_:E1.bind(null,i),ea:_1.bind(null,i),ta:v1.bind(null,i)}),i.da.push((async e=>{e?(i.ma.N_(),await Ec(i)):(await i.ma.stop(),i.Pa.length>0&&(re(ls,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))}))),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ns,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new gf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yf(i,e){if(Nr("AsyncQueue",`${e}: ${i}`),ko(i))return new ne(B.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{static emptySet(e){return new uo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||fe.comparator(t.key,s.key):(t,s)=>fe.comparator(t.key,s.key),this.keyedMap=Ca(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof uo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new uo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.fa=new nt(fe.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ye(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Eo{constructor(e,t,s,o,u,h,m,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Eo(e,t,uo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class I1{constructor(){this.queries=ty(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=we(t),u=o.queries;o.queries=ty(),u.forEach(((h,m)=>{for(const g of m.wa)g.onError(s)}))})(this,new ne(B.ABORTED,"Firestore shutting down"))}}function ty(){return new cs((i=>A_(i)),fc)}async function S1(i,e){const t=we(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new T1,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await t.onListen(o,!0);break;case 1:u.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=yf(h,`Initialization of query '${oo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.wa.push(e),e.va(t.onlineState),u.ya&&e.Ca(u.ya)&&_f(t)}async function A1(i,e){const t=we(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.wa.indexOf(e);h>=0&&(u.wa.splice(h,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function R1(i,e){const t=we(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&_f(t)}function k1(i,e,t){const s=we(i),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(t);s.queries.delete(e)}function _f(i){i.Da.forEach((e=>{e.next()}))}var xd,ny;(ny=xd||(xd={})).Fa="default",ny.Cache="cache";class C1{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Eo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==xd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.key=e}}class ov{constructor(e){this.key=e}}class P1{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Pe(),this.mutatedKeys=Pe(),this.Xa=R_(e),this.eu=new uo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new ey,o=t?t.eu:this.eu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,A)=>{const C=o.get(w),j=pc(this.query,A)?A:null,q=!!C&&this.mutatedKeys.has(C.key),X=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let $=!1;C&&j?C.data.isEqual(j.data)?q!==X&&(s.track({type:3,doc:j}),$=!0):this.iu(C,j)||(s.track({type:2,doc:j}),$=!0,(g&&this.Xa(j,g)>0||v&&this.Xa(j,v)<0)&&(m=!0)):!C&&j?(s.track({type:0,doc:j}),$=!0):C&&!j&&(s.track({type:1,doc:C}),$=!0,(g||v)&&(m=!0)),$&&(j?(h=h.add(j),u=X?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{eu:h,ru:s,Ds:m,mutatedKeys:u}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,A)=>(function(j,q){const X=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{At:$})}};return X(j)-X(q)})(w.type,A.type)||this.Xa(w.doc,A.doc))),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,v=g!==this.Ya;return this.Ya=g,h.length!==0||v?{snapshot:new Eo(this.query,e.eu,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ey,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Pe(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new ov(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new sv(s))})),t}uu(e){this.Ha=e.qs,this.Za=Pe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Eo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const vf="SyncEngine";class N1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class D1{constructor(e){this.key=e,this.lu=!1}}class V1{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new cs((m=>A_(m)),fc),this.Tu=new Map,this.Iu=new Set,this.du=new nt(fe.comparator),this.Eu=new Map,this.Au=new lf,this.Ru={},this.Vu=new Map,this.mu=vo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function O1(i,e,t=!0){const s=dv(i);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await av(s,e,t,!0),o}async function x1(i,e){const t=dv(i);await av(t,e,!0,!1)}async function av(i,e,t,s){const o=await YI(i.localStore,tr(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await M1(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&Z_(i.remoteStore,o),m}async function M1(i,e,t,s,o){i.gu=(A,C,j)=>(async function(X,$,pe,he){let ae=$.view.nu(pe);ae.Ds&&(ae=await Kg(X.localStore,$.query,!1).then((({documents:D})=>$.view.nu(D,ae))));const Te=he&&he.targetChanges.get($.targetId),Be=he&&he.targetMismatches.get($.targetId)!=null,Ie=$.view.applyChanges(ae,X.isPrimaryClient,Te,Be);return iy(X,$.targetId,Ie._u),Ie.snapshot})(i,A,C,j);const u=await Kg(i.localStore,e,!0),h=new P1(e,u.qs),m=h.nu(u.documents),g=Ja.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,g);iy(i,t,v._u);const w=new N1(e,t,h);return i.Pu.set(e,w),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),v.snapshot}async function L1(i,e,t){const s=we(i),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter((h=>!fc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Vd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&df(s.remoteStore,o.targetId),Md(s,o.targetId)})).catch(Ro)):(Md(s,o.targetId),await Vd(s.localStore,o.targetId,!0))}async function b1(i,e){const t=we(i),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),df(t.remoteStore,s.targetId))}async function F1(i,e,t){const s=q1(i);try{const o=await(function(h,m){const g=we(h),v=Ye.now(),w=m.reduce(((j,q)=>j.add(q.key)),Pe());let A,C;return g.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let q=Dr(),X=Pe();return g.Os.getEntries(j,w).next(($=>{q=$,q.forEach(((pe,he)=>{he.isValidDocument()||(X=X.add(pe))}))})).next((()=>g.localDocuments.getOverlayedDocuments(j,q))).next(($=>{A=$;const pe=[];for(const he of m){const ae=YT(he,A.get(he.key).overlayedDocument);ae!=null&&pe.push(new Si(he.key,ae,y_(ae.value.mapValue),Un.exists(!0)))}return g.mutationQueue.addMutationBatch(j,v,pe,m)})).next(($=>{C=$;const pe=$.applyToLocalDocumentSet(A,X);return g.documentOverlayCache.saveOverlays(j,$.batchId,pe)}))})).then((()=>({batchId:C.batchId,changes:C_(A)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let v=h.Ru[h.currentUser.toKey()];v||(v=new nt(Ae)),v=v.insert(m,g),h.Ru[h.currentUser.toKey()]=v})(s,o.batchId,t),await el(s,o.changes),await Ec(s.remoteStore)}catch(o){const u=yf(o,"Failed to persist write");t.reject(u)}}async function lv(i,e){const t=we(i);try{const s=await KI(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Eu.get(u);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?ze(h.lu,14607):o.removedDocuments.size>0&&(ze(h.lu,42227),h.lu=!1))})),await el(t,s,e)}catch(s){await Ro(s)}}function ry(i,e,t){const s=we(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=we(h);g.onlineState=m;let v=!1;g.queries.forEach(((w,A)=>{for(const C of A.wa)C.va(m)&&(v=!0)})),v&&_f(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function U1(i,e,t){const s=we(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new nt(fe.comparator);h=h.insert(u,zt.newNoDocument(u,Ee.min()));const m=Pe().add(u),g=new yc(Ee.min(),new Map,new nt(Ae),h,m);await lv(s,g),s.du=s.du.remove(u),s.Eu.delete(e),Ef(s)}else await Vd(s.localStore,e,!1).then((()=>Md(s,e,t))).catch(Ro)}async function z1(i,e){const t=we(i),s=e.batch.batchId;try{const o=await GI(t.localStore,e);cv(t,s,null),uv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await el(t,o)}catch(o){await Ro(o)}}async function j1(i,e,t){const s=we(i);try{const o=await(function(h,m){const g=we(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let w;return g.mutationQueue.lookupMutationBatch(v,m).next((A=>(ze(A!==null,37113),w=A.keys(),g.mutationQueue.removeMutationBatch(v,A)))).next((()=>g.mutationQueue.performConsistencyCheck(v))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(v,w,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w))).next((()=>g.localDocuments.getDocuments(v,w)))}))})(s.localStore,e);cv(s,e,t),uv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await el(s,o)}catch(o){await Ro(o)}}function uv(i,e){(i.Vu.get(e)||[]).forEach((t=>{t.resolve()})),i.Vu.delete(e)}function cv(i,e,t){const s=we(i);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function Md(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach((s=>{i.Au.containsKey(s)||hv(i,s)}))}function hv(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(df(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),Ef(i))}function iy(i,e,t){for(const s of t)s instanceof sv?(i.Au.addReference(s.key,e),B1(i,s)):s instanceof ov?(re(vf,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||hv(i,s.key)):ye(19791,{yu:s})}function B1(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(re(vf,"New document in limbo: "+t),i.Iu.add(s),Ef(i))}function Ef(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new fe(Ke.fromString(e)),s=i.mu.next();i.Eu.set(s,new D1(t)),i.du=i.du.insert(t,s),Z_(i.remoteStore,new ui(tr(tf(t.path)),s,"TargetPurposeLimboResolution",cc.ue))}}async function el(i,e,t){const s=we(i),o=[],u=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,g)=>{h.push(s.gu(g,e,t).then((v=>{var w;if((v||t)&&s.isPrimaryClient){const A=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,A?"current":"not-current")}if(v){o.push(v);const A=cf.Es(g.targetId,v);u.push(A)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,v){const w=we(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>H.forEach(v,(C=>H.forEach(C.Is,(j=>w.persistence.referenceDelegate.addReference(A,C.targetId,j))).next((()=>H.forEach(C.ds,(j=>w.persistence.referenceDelegate.removeReference(A,C.targetId,j)))))))))}catch(A){if(!ko(A))throw A;re(hf,"Failed to update sequence numbers: "+A)}for(const A of v){const C=A.targetId;if(!A.fromCache){const j=w.Fs.get(C),q=j.snapshotVersion,X=j.withLastLimboFreeSnapshotVersion(q);w.Fs=w.Fs.insert(C,X)}}})(s.localStore,u))}async function $1(i,e){const t=we(i);if(!t.currentUser.isEqual(e)){re(vf,"User change. New user:",e.toKey());const s=await Q_(t.localStore,e);t.currentUser=e,(function(u,h){u.Vu.forEach((m=>{m.forEach((g=>{g.reject(new ne(B.CANCELLED,h))}))})),u.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await el(t,s.Bs)}}function H1(i,e){const t=we(i),s=t.Eu.get(e);if(s&&s.lu)return Pe().add(s.key);{let o=Pe();const u=t.Tu.get(e);if(!u)return o;for(const h of u){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function dv(i){const e=we(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=lv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=H1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=U1.bind(null,e),e.hu.J_=R1.bind(null,e.eventManager),e.hu.pu=k1.bind(null,e.eventManager),e}function q1(i){const e=we(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=z1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=j1.bind(null,e),e}class Ju{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_c(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return WI(this.persistence,new $I,e.initialUser,this.serializer)}Du(e){return new K_(uf.Vi,this.serializer)}bu(e){return new ZI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ju.provider={build:()=>new Ju};class W1 extends Ju{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ze(this.persistence.referenceDelegate instanceof Xu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new CI(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new K_((s=>Xu.Vi(s,t)),this.serializer)}}class Ld{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ry(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=$1.bind(null,this.syncEngine),await w1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new I1})()}createDatastore(e){const t=_c(e.databaseInfo.databaseId),s=(function(u){return new i1(u)})(e.databaseInfo);return(function(u,h,m,g){return new l1(u,h,m,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new c1(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>ry(this.syncEngine,t,0)),(function(){return Yg.C()?new Yg:new e1})())}createSyncEngine(e,t){return(function(o,u,h,m,g,v,w){const A=new V1(o,u,h,m,g,v);return w&&(A.fu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=we(o);re(ls,"RemoteStore shutting down."),u.Ia.add(5),await Za(u),u.Ea.shutdown(),u.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ld.provider={build:()=>new Ld};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Nr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="FirestoreClient";class K1{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=Qd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{re(Ti,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(re(Ti,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ns;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=yf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function hd(i,e){i.asyncQueue.verifyOperationInProgress(),re(Ti,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Q_(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{gi("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then((()=>{re("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{gi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),i._offlineComponents=e}async function sy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await Q1(i);re(Ti,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>Zg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>Zg(e.remoteStore,o))),i._onlineComponents=e}async function Q1(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){re(Ti,"Using user provided OfflineComponentProvider");try{await hd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;gi("Error using user provided cache. Falling back to memory cache: "+t),await hd(i,new Ju)}}else re(Ti,"Using default OfflineComponentProvider"),await hd(i,new W1(void 0));return i._offlineComponents}async function fv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(re(Ti,"Using user provided OnlineComponentProvider"),await sy(i,i._uninitializedComponentsProvider._online)):(re(Ti,"Using default OnlineComponentProvider"),await sy(i,new Ld))),i._onlineComponents}function X1(i){return fv(i).then((e=>e.syncEngine))}async function oy(i){const e=await fv(i),t=e.eventManager;return t.onListen=O1.bind(null,e.syncEngine),t.onUnlisten=L1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=x1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=b1.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="firestore.googleapis.com",ly=!0;class uy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mv,this.ssl=ly}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ly;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=G_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<RI)throw new ne(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ne(B.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ne(B.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ne(B.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new nT;switch(s.type){case"firstParty":return new oT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ne(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=ay.get(t);s&&(re("ComponentProvider","Removing Datastore"),ay.delete(t),s.terminate())})(this),Promise.resolve()}}function Y1(i,e,t,s={}){var o;i=pi(i,wc);const u=Io(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),g=`${e}:${t}`;u&&($y(`https://${g}`),Hy("Firestore",!0)),h.host!==mv&&h.host!==g&&gi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:g,ssl:u,emulatorOptions:s});if(!ss(v,m)&&(i._setSettings(v),s.mockUserToken)){let w,A;if(typeof s.mockUserToken=="string")w=s.mockUserToken,A=Ut.MOCK_USER;else{w=P0(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new ne(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Ut(C)}i._authCredentials=new rT(new i_(w,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ds(this.firestore,e,this._query)}}class ft{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Xa(t,ft._jsonSchema))return new ft(e,s||null,new fe(Ke.fromString(t.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:dt("string",ft._jsonSchemaVersion),referencePath:dt("string")};class mi extends ds{constructor(e,t,s){super(e,t,tf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new fe(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function cy(i,e,...t){if(i=Rt(i),o_("collection","path",e),i instanceof wc){const s=Ke.fromString(e,...t);return wg(s),new mi(i,null,s)}{if(!(i instanceof ft||i instanceof mi))throw new ne(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return wg(s),new mi(i.firestore,null,s)}}function bd(i,e,...t){if(i=Rt(i),arguments.length===1&&(e=Qd.newId()),o_("doc","path",e),i instanceof wc){const s=Ke.fromString(e,...t);return Eg(s),new ft(i,null,new fe(s))}{if(!(i instanceof ft||i instanceof mi))throw new ne(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return Eg(s),new ft(i.firestore,i instanceof mi?i.converter:null,new fe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="AsyncQueue";class dy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Y_(this,"async_queue_retry"),this.oc=()=>{const s=cd();s&&re(hy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=cd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=cd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new ns;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ko(e))throw e;re(hy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Nr("INTERNAL UNHANDLED ERROR: ",fy(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=gf.createAndSchedule(this,e,t,s,(u=>this.lc(u)));return this.ec.push(o),o}ac(){this.tc&&ye(47125,{hc:fy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function fy(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(i,["next","error","complete"])}class wo extends wc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new dy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dy(e),this._firestoreClient=void 0,await e}}}function J1(i,e){const t=typeof i=="object"?i:Ky(),s=typeof i=="string"?i:Hu,o=Gd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=k0("firestore");u&&Y1(o,...u)}return o}function gv(i){if(i._terminated)throw new ne(B.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||Z1(i),i._firestoreClient}function Z1(i){var e,t,s;const o=i._freezeSettings(),u=(function(m,g,v,w){return new TT(m,g,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,pv(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new K1(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wn(Ot.fromBase64String(e))}catch(t){throw new ne(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wn(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:wn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xa(e,wn._jsonSchema))return wn.fromBase64String(e.bytes)}}wn._jsonSchemaVersion="firestore/bytes/1.0",wn._jsonSchema={type:dt("string",wn._jsonSchemaVersion),bytes:dt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rr._jsonSchemaVersion}}static fromJSON(e){if(Xa(e,rr._jsonSchema))return new rr(e.latitude,e.longitude)}}rr._jsonSchemaVersion="firestore/geoPoint/1.0",rr._jsonSchema={type:dt("string",rr._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ir._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xa(e,ir._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ir(e.vectorValues);throw new ne(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ir._jsonSchemaVersion="firestore/vectorValue/1.0",ir._jsonSchema={type:dt("string",ir._jsonSchemaVersion),vectorValues:dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=/^__.*__$/;class tS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Si(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ya(e,this.data,t,this.fieldTransforms)}}class yv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Si(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function _v(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ec:i})}}class Tf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Tf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Zu(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(_v(this.Ec)&&eS.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class nS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||_c(e)}Dc(e,t,s,o=!1){return new Tf({Ec:e,methodName:t,bc:s,path:Vt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function If(i){const e=i._freezeSettings(),t=_c(i._databaseId);return new nS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function rS(i,e,t,s,o,u={}){const h=i.Dc(u.merge||u.mergeFields?2:0,e,t,o);Sf("Data must be an object, but it was:",h,s);const m=vv(s,h);let g,v;if(u.merge)g=new cn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const A of u.mergeFields){const C=Fd(e,A,t);if(!h.contains(C))throw new ne(B.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);wv(w,C)||w.push(C)}g=new cn(w),v=h.fieldTransforms.filter((A=>g.covers(A.field)))}else g=null,v=h.fieldTransforms;return new tS(new tn(m),g,v)}class Ic extends wf{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ic}}function iS(i,e,t,s){const o=i.Dc(1,e,t);Sf("Data must be an object, but it was:",o,s);const u=[],h=tn.empty();Ii(s,((g,v)=>{const w=Af(e,g,t);v=Rt(v);const A=o.gc(w);if(v instanceof Ic)u.push(w);else{const C=tl(v,A);C!=null&&(u.push(w),h.set(w,C))}}));const m=new cn(u);return new yv(h,m,o.fieldTransforms)}function sS(i,e,t,s,o,u){const h=i.Dc(1,e,t),m=[Fd(e,s,t)],g=[o];if(u.length%2!=0)throw new ne(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<u.length;C+=2)m.push(Fd(e,u[C])),g.push(u[C+1]);const v=[],w=tn.empty();for(let C=m.length-1;C>=0;--C)if(!wv(v,m[C])){const j=m[C];let q=g[C];q=Rt(q);const X=h.gc(j);if(q instanceof Ic)v.push(j);else{const $=tl(q,X);$!=null&&(v.push(j),w.set(j,$))}}const A=new cn(v);return new yv(w,A,h.fieldTransforms)}function oS(i,e,t,s=!1){return tl(t,i.Dc(s?4:3,e))}function tl(i,e){if(Ev(i=Rt(i)))return Sf("Unsupported field value:",e,i),vv(i,e);if(i instanceof wf)return(function(s,o){if(!_v(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=tl(m,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=Rt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return qT(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ye.fromDate(s);return{timestampValue:Qu(o.serializer,u)}}if(s instanceof Ye){const u=new Ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Qu(o.serializer,u)}}if(s instanceof rr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof wn)return{bytesValue:z_(o.serializer,s._byteString)};if(s instanceof ft){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:af(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ir)return(function(h,m){return{mapValue:{fields:{[m_]:{stringValue:g_},[qu]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw m.wc("VectorValues must only contain numeric values.");return nf(m.serializer,v)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${uc(s)}`)})(i,e)}function vv(i,e){const t={};return u_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ii(i,((s,o)=>{const u=tl(o,e.Vc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Ev(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ye||i instanceof rr||i instanceof wn||i instanceof ft||i instanceof wf||i instanceof ir)}function Sf(i,e,t){if(!Ev(t)||!a_(t)){const s=uc(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function Fd(i,e,t){if((e=Rt(e))instanceof Tc)return e._internalPath;if(typeof e=="string")return Af(i,e);throw Zu("Field path arguments must be of type string or ",i,!1,void 0,t)}const aS=new RegExp("[~\\*/\\[\\]]");function Af(i,e,t){if(e.search(aS)>=0)throw Zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Tc(...e.split("."))._internalPath}catch{throw Zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Zu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ne(B.INVALID_ARGUMENT,m+i+g)}function wv(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Rf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class lS extends Tv{data(){return super.data()}}function Rf(i,e){return typeof e=="string"?Af(i,e):e instanceof Tc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ne(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kf{}class Iv extends kf{}function cS(i,e,...t){let s=[];e instanceof kf&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((g=>g instanceof Pf)).length,m=u.filter((g=>g instanceof Cf)).length;if(h>1||h>0&&m>0)throw new ne(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class Cf extends Iv{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Cf(e,t,s)}_apply(e){const t=this._parse(e);return Sv(e._query,t),new ds(e.firestore,e.converter,Rd(e._query,t))}_parse(e){const t=If(e.firestore);return(function(u,h,m,g,v,w,A){let C;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ne(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){gy(A,w);const q=[];for(const X of A)q.push(my(g,u,X));C={arrayValue:{values:q}}}else C=my(g,u,A)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||gy(A,w),C=oS(m,h,A,w==="in"||w==="not-in");return ht.create(v,w,C)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Pf extends kf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Pf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:jn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)Sv(h,g),h=Rd(h,g)})(e._query,t),new ds(e.firestore,e.converter,Rd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Nf extends Iv{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Nf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new ne(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ne(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ha(u,h)})(e._query,this._field,this._direction);return new ds(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new Co(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function hS(i,e="asc"){const t=e,s=Rf("orderBy",i);return Nf._create(s,t)}function my(i,e,t){if(typeof(t=Rt(t))=="string"){if(t==="")throw new ne(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!S_(e)&&t.indexOf("/")!==-1)throw new ne(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ke.fromString(t));if(!fe.isDocumentKey(s))throw new ne(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Pg(i,new fe(s))}if(t instanceof ft)return Pg(i,t._key);throw new ne(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uc(t)}.`)}function gy(i,e){if(!Array.isArray(i)||i.length===0)throw new ne(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Sv(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ne(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class dS{convertValue(e,t="none"){switch(Ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ii(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[qu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>ot(h.doubleValue)));return new ir(u)}convertGeoPoint(e){return new rr(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=dc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ja(e));default:return null}}convertTimestamp(e){const t=_i(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ke.fromString(e);ze(W_(s),9688,{name:e});const o=new Ba(s.get(1),s.get(3)),u=new fe(s.popFirst(5));return o.isEqual(t)||Nr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Na{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rs extends Tv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Rf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=rs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}rs._jsonSchemaVersion="firestore/documentSnapshot/1.0",rs._jsonSchema={type:dt("string",rs._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class Mu extends rs{data(e={}){return super.data(e)}}class co{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Na(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Mu(this._firestore,this._userDataWriter,s.key,s,new Na(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Mu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Na(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new Mu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Na(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:pS(m.type),doc:g,oldIndex:v,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=co._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Qd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function pS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:i})}}co._jsonSchemaVersion="firestore/querySnapshot/1.0",co._jsonSchema={type:dt("string",co._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class Av extends dS{constructor(e){super(),this.firestore=e}convertBytes(e){return new wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,t)}}function mS(i,e,t,...s){i=pi(i,ft);const o=pi(i.firestore,wo),u=If(o);let h;return h=typeof(e=Rt(e))=="string"||e instanceof Tc?sS(u,"updateDoc",i._key,e,t,s):iS(u,"updateDoc",i._key,e),Df(o,[h.toMutation(i._key,Un.exists(!0))])}function gS(i){return Df(pi(i.firestore,wo),[new rf(i._key,Un.none())])}function yS(i,e){const t=pi(i.firestore,wo),s=bd(i),o=fS(i.converter,e);return Df(t,[rS(If(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Un.exists(!1))]).then((()=>s))}function _S(i,...e){var t,s,o;i=Rt(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||py(e[h])||(u=e[h++]);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(py(e[h])){const A=e[h];e[h]=(t=A.next)===null||t===void 0?void 0:t.bind(A),e[h+1]=(s=A.error)===null||s===void 0?void 0:s.bind(A),e[h+2]=(o=A.complete)===null||o===void 0?void 0:o.bind(A)}let g,v,w;if(i instanceof ft)v=pi(i.firestore,wo),w=tf(i._key.path),g={next:A=>{e[h]&&e[h](vS(v,i,A))},error:e[h+1],complete:e[h+2]};else{const A=pi(i,ds);v=pi(A.firestore,wo),w=A._query;const C=new Av(v);g={next:j=>{e[h]&&e[h](new co(v,C,A,j))},error:e[h+1],complete:e[h+2]},uS(i._query)}return(function(C,j,q,X){const $=new G1(X),pe=new C1(j,$,q);return C.asyncQueue.enqueueAndForget((async()=>S1(await oy(C),pe))),()=>{$.Ou(),C.asyncQueue.enqueueAndForget((async()=>A1(await oy(C),pe)))}})(gv(v),w,m,g)}function Df(i,e){return(function(s,o){const u=new ns;return s.asyncQueue.enqueueAndForget((async()=>F1(await X1(s),o,u))),u.promise})(gv(i),e)}function vS(i,e,t){const s=t.docs.get(e._key),o=new Av(i);return new rs(i,o,e._key,s,new Na(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Ao=o})(So),mo(new os("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new wo(new iT(s.getProvider("auth-internal")),new aT(h,s.getProvider("app-check-internal")),(function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ne(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ba(v.options.projectId,w)})(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),di(mg,gg,e),di(mg,gg,"esm2017")})();function Vf(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function Rv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ES=Rv,kv=new Ka("auth","Firebase",Rv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new qd("@firebase/auth");function wS(i,...e){ec.logLevel<=Ce.WARN&&ec.warn(`Auth (${So}): ${i}`,...e)}function Lu(i,...e){ec.logLevel<=Ce.ERROR&&ec.error(`Auth (${So}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(i,...e){throw xf(i,...e)}function zn(i,...e){return xf(i,...e)}function Of(i,e,t){const s=Object.assign(Object.assign({},ES()),{[e]:t});return new Ka("auth","Firebase",s).create(e,{appName:i.name})}function is(i){return Of(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function TS(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&ar(i,"argument-error"),Of(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xf(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return kv.create(i,...e)}function ve(i,e,...t){if(!i)throw xf(e,...t)}function kr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Lu(e),new Error(e)}function Vr(i,e){i||kr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function IS(){return yy()==="http:"||yy()==="https:"}function yy(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IS()||M0()||"connection"in navigator)?navigator.onLine:!0}function AS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vr(t>e,"Short delay should be less than long delay!"),this.isMobile=V0()||L0()}get(){return SS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(i,e){Vr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],CS=new nl(3e4,6e4);function Lf(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function No(i,e,t,s,o={}){return Pv(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Qa(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:g},u);return x0()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&Io(i.emulatorConfig.host)&&(v.credentials="include"),Cv.fetch()(await Nv(i,i.config.apiHost,t,m),v)})}async function Pv(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},RS),e);try{const o=new NS(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Ru(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,v]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ru(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Ru(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw Ru(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Of(i,w,v);ar(i,w)}}catch(o){if(o instanceof Or)throw o;ar(i,"network-request-failed",{message:String(o)})}}async function PS(i,e,t,s,o={}){const u=await No(i,e,t,s,o);return"mfaPendingCredential"in u&&ar(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Nv(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Mf(i.config,o):`${i.config.apiScheme}://${o}`;return kS.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class NS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(zn(this.auth,"network-request-failed")),CS.get())})}}function Ru(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=zn(i,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(i,e){return No(i,"POST","/v1/accounts:delete",e)}async function tc(i,e){return No(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VS(i,e=!1){const t=Rt(i),s=await t.getIdToken(e),o=bf(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Fa(dd(o.auth_time)),issuedAtTime:Fa(dd(o.iat)),expirationTime:Fa(dd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function dd(i){return Number(i)*1e3}function bf(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Lu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Uy(t);return o?JSON.parse(o):(Lu("Failed to decode base64 JWT payload"),null)}catch(o){return Lu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function _y(i){const e=bf(i);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ga(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Or&&OS(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function OS({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fa(this.lastLoginAt),this.creationTime=Fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Ga(i,tc(t,{idToken:s}));ve(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Dv(u.providerUserInfo):[],m=LS(i.providerData,h),g=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?v:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new zd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,A)}async function MS(i){const e=Rt(i);await nc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LS(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Dv(i){return i.map(e=>{var{providerId:t}=e,s=Vf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bS(i,e){const t=await Pv(i,{},async()=>{const s=Qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Nv(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return i.emulatorConfig&&Io(i.emulatorConfig.host)&&(g.credentials="include"),Cv.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function FS(i,e){return No(i,"POST","/v2/accounts:revokeToken",Lf(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=_y(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await bS(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new ho;return s&&(ve(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ve(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(i,e){ve(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Fn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Vf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new zd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Ga(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return VS(this,e)}reload(){return MS(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await nc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bn(this.auth.app))return Promise.reject(is(this.auth));const e=await this.getIdToken();return await Ga(this,DS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,v,w;const A=(s=t.displayName)!==null&&s!==void 0?s:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,j=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,X=(m=t.tenantId)!==null&&m!==void 0?m:void 0,$=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,pe=(v=t.createdAt)!==null&&v!==void 0?v:void 0,he=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ae,emailVerified:Te,isAnonymous:Be,providerData:Ie,stsTokenManager:D}=t;ve(ae&&D,e,"internal-error");const I=ho.fromJSON(this.name,D);ve(typeof ae=="string",e,"internal-error"),si(A,e.name),si(C,e.name),ve(typeof Te=="boolean",e,"internal-error"),ve(typeof Be=="boolean",e,"internal-error"),si(j,e.name),si(q,e.name),si(X,e.name),si($,e.name),si(pe,e.name),si(he,e.name);const R=new Fn({uid:ae,auth:e,email:C,emailVerified:Te,displayName:A,isAnonymous:Be,photoURL:q,phoneNumber:j,tenantId:X,stsTokenManager:I,createdAt:pe,lastLoginAt:he});return Ie&&Array.isArray(Ie)&&(R.providerData=Ie.map(P=>Object.assign({},P))),$&&(R._redirectEventId=$),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new ho;o.updateFromServerResponse(t);const u=new Fn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await nc(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Dv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new ho;m.updateFromIdToken(s);const g=new Fn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new zd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=new Map;function Cr(i){Vr(i instanceof Function,"Expected a class definition");let e=vy.get(i);return e?(Vr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,vy.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vv.type="NONE";const Ey=Vv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(i,e,t){return`firebase:${i}:${e}:${t}`}class fo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=bu(this.userKey,o.apiKey,u),this.fullPersistenceKey=bu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await tc(this.auth,{idToken:e}).catch(()=>{});return t?Fn._fromGetAccountInfoResponse(this.auth,t,e):null}return Fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new fo(Cr(Ey),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Cr(Ey);const h=bu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){let A;if(typeof w=="string"){const C=await tc(e,{idToken:w}).catch(()=>{});if(!C)break;A=await Fn._fromGetAccountInfoResponse(e,C,w)}else A=Fn._fromJSON(e,w);v!==u&&(m=A),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new fo(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new fo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ov(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fv(e))return"Blackberry";if(Uv(e))return"Webos";if(xv(e))return"Safari";if((e.includes("chrome/")||Mv(e))&&!e.includes("edge/"))return"Chrome";if(bv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ov(i=jt()){return/firefox\//i.test(i)}function xv(i=jt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mv(i=jt()){return/crios\//i.test(i)}function Lv(i=jt()){return/iemobile/i.test(i)}function bv(i=jt()){return/android/i.test(i)}function Fv(i=jt()){return/blackberry/i.test(i)}function Uv(i=jt()){return/webos/i.test(i)}function Ff(i=jt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function US(i=jt()){var e;return Ff(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zS(){return b0()&&document.documentMode===10}function zv(i=jt()){return Ff(i)||bv(i)||Uv(i)||Fv(i)||/windows phone/i.test(i)||Lv(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(i,e=[]){let t;switch(i){case"Browser":t=wy(jt());break;case"Worker":t=`${wy(jt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${So}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(i,e={}){return No(i,"GET","/v2/passwordPolicy",Lf(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=6;class HS{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:$S,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ty(this),this.idTokenSubscription=new Ty(this),this.beforeStateQueue=new jS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await fo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await tc(this,{idToken:e}),s=await Fn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(bn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await nc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bn(this.app))return Promise.reject(is(this));const t=e?Rt(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bn(this.app)?Promise.reject(is(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bn(this.app)?Promise.reject(is(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BS(this),t=new HS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ka("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await FS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await fo.create(this,[Cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(bn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&wS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Sc(i){return Rt(i)}class Ty{constructor(e){this.auth=e,this.observer=null,this.addObserver=q0(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WS(i){Uf=i}function GS(i){return Uf.loadJS(i)}function KS(){return Uf.gapiScript}function QS(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(i,e){const t=Gd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ss(u,e??{}))return o;ar(o,"already-initialized")}return t.initialize({options:e})}function YS(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Cr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function JS(i,e,t){const s=Sc(i);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Bv(e),{host:h,port:m}=ZS(e),g=m===null?"":`:${m}`,v={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(ss(v,s.config.emulator)&&ss(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Io(h)?($y(`${u}//${h}${g}`),Hy("Auth",!0)):eA()}function Bv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function ZS(i){const e=Bv(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Iy(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Iy(h)}}}function Iy(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function eA(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,t){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(i,e){return PS(i,"POST","/v1/accounts:signInWithIdp",Lf(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA="http://localhost";class us extends $v{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ar("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Vf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new us(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return po(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,po(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,po(e,t)}buildRequest(){const e={requestUri:tA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends zf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends rl{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.FACEBOOK_SIGN_IN_METHOD="facebook.com";oi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return us._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Rr.credential(t,s)}catch{return null}}}Rr.GOOGLE_SIGN_IN_METHOD="google.com";Rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends rl{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.GITHUB_SIGN_IN_METHOD="github.com";ai.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends rl{constructor(){super("twitter.com")}static credential(e,t){return us._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return li.credential(t,s)}catch{return null}}}li.TWITTER_SIGN_IN_METHOD="twitter.com";li.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Fn._fromIdTokenResponse(e,s,o),h=Sy(s);return new To({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Sy(s);return new To({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Sy(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc extends Or{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,rc.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new rc(e,t,s,o)}}function Hv(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?rc._fromErrorAndOperation(i,u,e,s):u})}async function nA(i,e,t=!1){const s=await Ga(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return To._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(i,e,t=!1){const{auth:s}=i;if(bn(s.app))return Promise.reject(is(s));const o="reauthenticate";try{const u=await Ga(i,Hv(s,o,e,i),t);ve(u.idToken,s,"internal-error");const h=bf(u.idToken);ve(h,s,"internal-error");const{sub:m}=h;return ve(i.uid===m,s,"user-mismatch"),To._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&ar(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(i,e,t=!1){if(bn(i.app))return Promise.reject(is(i));const s="signIn",o=await Hv(i,s,e),u=await To._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function sA(i,e,t,s){return Rt(i).onIdTokenChanged(e,t,s)}function oA(i,e,t){return Rt(i).beforeAuthStateChanged(e,t)}function aA(i,e,t,s){return Rt(i).onAuthStateChanged(e,t,s)}function lA(i){return Rt(i).signOut()}const ic="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ic,"1"),this.storage.removeItem(ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=1e3,cA=10;class Wv extends qv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);zS()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,cA):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},uA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wv.type="LOCAL";const hA=Wv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv extends qv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gv.type="SESSION";const Kv=Gv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Ac(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),g=await dA(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ac.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const v=jf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const C=A;if(C.data.eventId===v)switch(C.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function pA(i){sr().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function mA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gA(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function yA(){return Qv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="firebaseLocalStorageDb",_A=1,sc="firebaseLocalStorage",Yv="fbase_key";class il{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Rc(i,e){return i.transaction([sc],e?"readwrite":"readonly").objectStore(sc)}function vA(){const i=indexedDB.deleteDatabase(Xv);return new il(i).toPromise()}function jd(){const i=indexedDB.open(Xv,_A);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(sc,{keyPath:Yv})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(sc)?e(s):(s.close(),await vA(),e(await jd()))})})}async function Ay(i,e,t){const s=Rc(i,!0).put({[Yv]:e,value:t});return new il(s).toPromise()}async function EA(i,e){const t=Rc(i,!1).get(e),s=await new il(t).toPromise();return s===void 0?null:s.value}function Ry(i,e){const t=Rc(i,!0).delete(e);return new il(t).toPromise()}const wA=800,TA=3;class Jv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>TA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ac._getInstance(yA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await mA(),!this.activeServiceWorker)return;this.sender=new fA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jd();return await Ay(e,ic,"1"),await Ry(e,ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ay(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>EA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ry(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Rc(o,!1).getAll();return new il(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jv.type="LOCAL";const IA=Jv;new nl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(i,e){return e?Cr(e):(ve(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends $v{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return po(e,this._buildIdpRequest())}_linkToIdToken(e,t){return po(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return po(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function SA(i){return iA(i.auth,new Bf(i),i.bypassAuthState)}function AA(i){const{auth:e,user:t}=i;return ve(t,e,"internal-error"),rA(t,new Bf(i),i.bypassAuthState)}async function RA(i){const{auth:e,user:t}=i;return ve(t,e,"internal-error"),nA(t,new Bf(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SA;case"linkViaPopup":case"linkViaRedirect":return RA;case"reauthViaPopup":case"reauthViaRedirect":return AA;default:ar(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=new nl(2e3,1e4);async function CA(i,e,t){if(bn(i.app))return Promise.reject(zn(i,"operation-not-supported-in-this-environment"));const s=Sc(i);TS(i,e,zf);const o=Zv(s,t);return new ts(s,"signInViaPopup",e,o).executeNotNull()}class ts extends eE{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=jf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kA.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="pendingRedirect",Fu=new Map;class NA extends eE{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Fu.get(this.auth._key());if(!e){try{const s=await DA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Fu.set(this.auth._key(),e)}return this.bypassAuthState||Fu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DA(i,e){const t=xA(e),s=OA(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function VA(i,e){Fu.set(i._key(),e)}function OA(i){return Cr(i._redirectPersistence)}function xA(i){return bu(PA,i.config.apiKey,i.name)}async function MA(i,e,t=!1){if(bn(i.app))return Promise.reject(is(i));const s=Sc(i),o=Zv(s,e),h=await new NA(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=600*1e3;class bA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!tE(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(zn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LA&&this.cachedEventUids.clear(),this.cachedEventUids.has(ky(e))}saveEventToCache(e){this.cachedEventUids.add(ky(e)),this.lastProcessedEventTime=Date.now()}}function ky(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function tE({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FA(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tE(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UA(i,e={}){return No(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jA=/^https?/;async function BA(i){if(i.config.emulator)return;const{authorizedDomains:e}=await UA(i);for(const t of e)try{if($A(t))return}catch{}ar(i,"unauthorized-domain")}function $A(i){const e=Ud(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!jA.test(t))return!1;if(zA.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=new nl(3e4,6e4);function Cy(){const i=sr().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function qA(i){return new Promise((e,t)=>{var s,o,u;function h(){Cy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cy(),t(zn(i,"network-request-failed"))},timeout:HA.get()})}if(!((o=(s=sr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=sr().gapi)===null||u===void 0)&&u.load)h();else{const m=QS("iframefcb");return sr()[m]=()=>{gapi.load?h():t(zn(i,"network-request-failed"))},GS(`${KS()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Uu=null,e})}let Uu=null;function WA(i){return Uu=Uu||qA(i),Uu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=new nl(5e3,15e3),KA="__/auth/iframe",QA="emulator/auth/iframe",XA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JA(i){const e=i.config;ve(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Mf(e,QA):`https://${i.config.authDomain}/${KA}`,s={apiKey:e.apiKey,appName:i.name,v:So},o=YA.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Qa(s).slice(1)}`}async function ZA(i){const e=await WA(i),t=sr().gapi;return ve(t,i,"internal-error"),e.open({where:document.body,url:JA(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XA,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=zn(i,"network-request-failed"),m=sr().setTimeout(()=>{u(h)},GA.get());function g(){sr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tR=500,nR=600,rR="_blank",iR="http://localhost";class Py{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sR(i,e,t,s=tR,o=nR){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},eR),{width:s.toString(),height:o.toString(),top:u,left:h}),v=jt().toLowerCase();t&&(m=Mv(v)?rR:t),Ov(v)&&(e=e||iR,g.scrollbars="yes");const w=Object.entries(g).reduce((C,[j,q])=>`${C}${j}=${q},`,"");if(US(v)&&m!=="_self")return oR(e||"",m),new Py(null);const A=window.open(e||"",m,w);ve(A,i,"popup-blocked");try{A.focus()}catch{}return new Py(A)}function oR(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR="__/auth/handler",lR="emulator/auth/handler",uR=encodeURIComponent("fac");async function Ny(i,e,t,s,o,u){ve(i.config.authDomain,i,"auth-domain-config-required"),ve(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:So,eventId:o};if(e instanceof zf){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",H0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof rl){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await i._getAppCheckToken(),v=g?`#${uR}=${encodeURIComponent(g)}`:"";return`${cR(i)}?${Qa(m).slice(1)}${v}`}function cR({config:i}){return i.emulator?Mf(i,lR):`https://${i.authDomain}/${aR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="webStorageSupport";class hR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kv,this._completeRedirectFn=MA,this._overrideRedirectResult=VA}async _openPopup(e,t,s,o){var u;Vr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Ny(e,t,s,Ud(),o);return sR(e,h,jf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Ny(e,t,s,Ud(),o);return pA(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Vr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await ZA(e),s=new bA(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fd,{type:fd},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[fd];h!==void 0&&t(!!h),ar(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=BA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zv()||xv()||Ff()}}const dR=hR;var Dy="@firebase/auth",Vy="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mR(i){mo(new os("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jv(i)},v=new qS(s,o,u,g);return YS(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),mo(new os("auth-internal",e=>{const t=Sc(e.getProvider("auth").getImmediate());return(s=>new fR(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),di(Dy,Vy,pR(i)),di(Dy,Vy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=300,yR=By("authIdTokenMaxAge")||gR;let Oy=null;const _R=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>yR)return;const o=t==null?void 0:t.token;Oy!==o&&(Oy=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function vR(i=Ky()){const e=Gd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=XS(i,{popupRedirectResolver:dR,persistence:[IA,hA,Kv]}),s=By("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=_R(u.toString());oA(t,h,()=>h(t.currentUser)),sA(t,m=>h(m))}}const o=zy("auth");return o&&JS(t,`http://${o}`),t}function ER(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}WS({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=zn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",ER().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mR("Browser");var wR="firebase",TR="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */di(wR,TR,"app");const nE={apiKey:"AIzaSyCJxU8trKRm-c2t2Gfpx6pqn3Uiz5npbEI",authDomain:"shiftpay-d17cf.firebaseapp.com",projectId:"shiftpay-d17cf",storageBucket:"shiftpay-d17cf.firebasestorage.app",messagingSenderId:"374954896234",appId:"1:374954896234:web:85abdc39eae1b87afe9313"},Bd=Object.values(nE).every(Boolean),oc=Bd?Gy(nE):null,ku=oc?vR(oc):null,Aa=oc?J1(oc):null,IR=new Rr;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rE=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var AR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=ct.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},g)=>ct.createElement("svg",{ref:g,...AR,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:rE("lucide",o),...m},[...h.map(([v,w])=>ct.createElement(v,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=(i,e)=>{const t=ct.forwardRef(({className:s,...o},u)=>ct.createElement(RR,{ref:u,iconNode:e,className:rE(`lucide-${SR(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=Bn("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=Bn("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=Bn("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=Bn("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=Bn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DR=Bn("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VR=Bn("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OR=Bn("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=Bn("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=Bn("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=Bn("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]),iE=12.71,sE=10,oE=20,Da=i=>new Intl.NumberFormat("en-GB",{style:"currency",currency:"GBP"}).format(i||0),$d=i=>String(i).padStart(2,"0"),ac=i=>`${i.getFullYear()}-${$d(i.getMonth()+1)}-${$d(i.getDate())}`,Va=ac(new Date),Ra={date:Va,start:"09:00",end:"17:00",breakMinutes:"30",note:""};function $f(i){const e=new Date(`${i.date}T${i.start}:00`);let t=new Date(`${i.date}T${i.end}:00`);return t<=e&&t.setDate(t.getDate()+1),Math.max(0,Math.round((t-e)/6e4)-Math.max(0,Number(i.breakMinutes||0)))}function Cu(i){const e=new Date(`${i}T12:00:00`),t=(e.getDay()+6)%7;return e.setDate(e.getDate()-t),ac(e)}function zu(i){const e=[...i].sort((h,m)=>(h.date+h.start).localeCompare(m.date+m.start));let t=0,s=0,o=0,u=0;for(const h of e){let m=$f(h);const g=Math.min(m,Math.max(0,oE*60-t)),v=m-g;s+=g/60,o+=v/60,u+=g/60*iE+v/60*sE,t+=m}return{minutes:t,hours:t/60,regularHours:s,extraHours:o,pay:u}}const aE=i=>`${Math.floor(i/60)}h ${$d(i%60)}m`,Hd=i=>new Date(`${i}T12:00:00`).toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"});function MR(){const[i,e]=ct.useState(null),[t,s]=ct.useState(!Bd),[o,u]=ct.useState([]),[h,m]=ct.useState(!1),[g,v]=ct.useState(Ra),[w,A]=ct.useState(null),[C,j]=ct.useState(""),[q,X]=ct.useState(Cu(Va)),[$,pe]=ct.useState(!1);ct.useEffect(()=>{if(ku)return aA(ku,ee=>{e(ee),s(!0)})},[]),ct.useEffect(()=>{if(!i||!Aa){u([]);return}m(!0);const ee=cS(cy(Aa,"users",i.uid,"shifts"),hS("date","desc"));return _S(ee,De=>{u(De.docs.map($e=>({id:$e.id,...$e.data()}))),m(!1)},De=>{j(De.message),m(!1)})},[i]);const he=ct.useMemo(()=>o.filter(ee=>Cu(ee.date)===q),[o,q]),ae=ct.useMemo(()=>zu(he),[he]),Te=ct.useMemo(()=>zu(o.filter(ee=>ee.date.slice(0,7)===q.slice(0,7))),[o,q]),Be=[...he].sort((ee,De)=>(De.date+De.start).localeCompare(ee.date+ee.start));async function Ie(){j("");try{await CA(ku,IR)}catch(ee){j(ee.message)}}async function D(ee){if(ee.preventDefault(),j(""),!g.date||!g.start||!g.end)return j("Please enter a date, clock-in and clock-out time.");const De=new Date(`${g.date}T${g.start}:00`);let $e=new Date(`${g.date}T${g.end}:00`);$e<=De&&$e.setDate($e.getDate()+1);const Ve=($e-De)/6e4;if(Number(g.breakMinutes||0)>Ve)return j("Break time cannot be longer than the shift.");const Y={...g,breakMinutes:Math.max(0,Number(g.breakMinutes||0)),note:g.note.trim()};try{w?await mS(bd(Aa,"users",i.uid,"shifts",w),Y):await yS(cy(Aa,"users",i.uid,"shifts"),Y),v(Ra),A(null),pe(!1)}catch(ue){j(ue.message)}}function I(ee){A(ee.id),v({date:ee.date,start:ee.start,end:ee.end,breakMinutes:String(ee.breakMinutes??0),note:ee.note||""}),pe(!0),window.scrollTo({top:0,behavior:"smooth"})}async function R(ee){if(confirm("Delete this shift? This cannot be undone."))try{await gS(bd(Aa,"users",i.uid,"shifts",ee))}catch(De){j(De.message)}}function P(){const ee=[["Date","Clock in","Clock out","Unpaid break (minutes)","Paid hours","Notes","Estimated pay"]];[...he].sort((Y,ue)=>Y.date.localeCompare(ue.date)).forEach(Y=>{const ue=zu([Y]);ee.push([Y.date,Y.start,Y.end,Y.breakMinutes,($f(Y)/60).toFixed(2),Y.note||"",ue.pay.toFixed(2)])}),ee.push(["WEEK TOTAL","","","",ae.hours.toFixed(2),"",ae.pay.toFixed(2)]);const De=ee.map(Y=>Y.map(ue=>`"${String(ue).replaceAll('"','""')}"`).join(",")).join(`
`),$e=URL.createObjectURL(new Blob([De],{type:"text/csv;charset=utf-8"})),Ve=document.createElement("a");Ve.href=$e,Ve.download=`shiftpay-week-${q}.csv`,Ve.click(),URL.revokeObjectURL($e)}function V(ee){const De=new Date(`${q}T12:00:00`);De.setDate(De.getDate()+ee*7),X(ac(De))}const x=(()=>{const ee=new Date(`${q}T12:00:00`);return ee.setDate(ee.getDate()+6),ac(ee)})(),S=Math.min(100,ae.hours/oE*100);return Bd?t?i?b.createElement("div",{className:"app-shell"},b.createElement("header",{className:"topbar"},b.createElement("div",{className:"brand"},b.createElement("div",{className:"brand-mark small"},"£"),b.createElement("div",null,b.createElement("b",null,"ShiftPay"),b.createElement("small",null,"Work hours tracker"))),b.createElement("div",{className:"user-area"},b.createElement("img",{src:i.photoURL||"",alt:"",referrerPolicy:"no-referrer"}),b.createElement("span",null,i.displayName||i.email),b.createElement("button",{className:"icon-btn",title:"Sign out",onClick:()=>lA(ku)},b.createElement(VR,{size:18})))),b.createElement("main",{className:"content"},b.createElement("div",{className:"welcome"},b.createElement("div",null,b.createElement("p",{className:"eyebrow"},"YOUR WORK SUMMARY"),b.createElement("h1",null,"Weekly overview"),b.createElement("p",{className:"muted"},"Your shifts and estimated earnings, all in one place.")),b.createElement("button",{className:"primary",onClick:()=>{A(null),v({...Ra,date:Va}),pe(!$)}},b.createElement(My,{size:18})," Add shift")),C&&b.createElement("div",{className:"alert"},C,b.createElement("button",{onClick:()=>j("")},"Dismiss")),$&&b.createElement("section",{className:"panel form-panel"},b.createElement("div",{className:"panel-heading"},b.createElement("div",null,b.createElement("h2",null,w?"Edit shift":"Add a shift"),b.createElement("p",{className:"muted"},"Enter your clock-in, clock-out and unpaid break.")),b.createElement("button",{className:"text-btn",onClick:()=>{pe(!1),A(null),v(Ra)}},"Close")),b.createElement("form",{onSubmit:D,className:"shift-form"},b.createElement("label",null,"Date",b.createElement("input",{type:"date",value:g.date,onChange:ee=>v({...g,date:ee.target.value}),required:!0})),b.createElement("label",null,"Clock in",b.createElement("input",{type:"time",value:g.start,onChange:ee=>v({...g,start:ee.target.value}),required:!0})),b.createElement("label",null,"Clock out",b.createElement("input",{type:"time",value:g.end,onChange:ee=>v({...g,end:ee.target.value}),required:!0}),b.createElement("small",null,"If you finish after midnight, enter the finish time on the same shift date.")),b.createElement("label",null,"Unpaid break (minutes)",b.createElement("input",{type:"number",min:"0",step:"1",value:g.breakMinutes,onChange:ee=>v({...g,breakMinutes:ee.target.value})})),b.createElement("label",{className:"full"},"Note (optional)",b.createElement("input",{type:"text",maxLength:"100",placeholder:"e.g. evening shift",value:g.note,onChange:ee=>v({...g,note:ee.target.value})})),b.createElement("div",{className:"form-actions"},b.createElement("button",{className:"primary",type:"submit"},w?"Save changes":"Save shift"),b.createElement("button",{className:"secondary",type:"button",onClick:()=>{pe(!1),A(null),v(Ra)}},"Cancel")))),b.createElement("section",{className:"week-nav panel"},b.createElement("button",{className:"nav-arrow",onClick:()=>V(-1)},"‹"),b.createElement("div",null,b.createElement("b",null,Hd(q)," – ",Hd(x)),b.createElement("small",null,"Monday to Sunday · ",q===Cu(Va)?"Current week":"Selected week")),b.createElement("button",{className:"nav-arrow",onClick:()=>V(1)},"›"),b.createElement("button",{className:"today-btn",onClick:()=>X(Cu(Va))},"This week")),b.createElement("section",{className:"stats-grid"},b.createElement(Pu,{icon:b.createElement(CR,null),label:"Paid working hours",value:`${ae.hours.toFixed(2)} hrs`,detail:`${aE(ae.minutes)} after breaks`}),b.createElement(Pu,{icon:b.createElement(pd,null),label:"Estimated weekly pay",value:Da(ae.pay),detail:"Before tax and deductions",accent:!0}),b.createElement(Pu,{icon:b.createElement(xy,null),label:"At £12.71/hour",value:`${ae.regularHours.toFixed(2)} hrs`,detail:Da(ae.regularHours*iE)}),b.createElement(Pu,{icon:b.createElement(pd,null),label:"Additional hours",value:`${ae.extraHours.toFixed(2)} hrs`,detail:Da(ae.extraHours*sE)})),b.createElement("section",{className:"panel progress-panel"},b.createElement("div",{className:"progress-top"},b.createElement("div",null,b.createElement("h2",null,"20-hour weekly threshold"),b.createElement("p",{className:"muted"},"First 20 paid hours are calculated at £12.71/hour.")),b.createElement("b",null,ae.hours.toFixed(2)," / 20 hrs")),b.createElement("div",{className:"progress-track"},b.createElement("div",{style:{width:`${S}%`}})),b.createElement("div",{className:"progress-foot"},b.createElement("span",null,ae.hours>=20?"Threshold reached – additional hours at £10/hour":`${Math.max(0,20-ae.hours).toFixed(2)} hours remaining at £12.71/hour`),b.createElement("span",null,Math.round(S),"%"))),b.createElement("section",{className:"panel shifts-panel"},b.createElement("div",{className:"panel-heading"},b.createElement("div",null,b.createElement("h2",null,"Shift history"),b.createElement("p",{className:"muted"},he.length," shift",he.length===1?"":"s"," recorded this week")),b.createElement("button",{className:"secondary export",onClick:P,disabled:!he.length},b.createElement(NR,{size:16})," Export CSV")),h?b.createElement("p",{className:"muted"},"Loading shifts…"):Be.length?b.createElement("div",{className:"shift-list"},Be.map(ee=>b.createElement(LR,{key:ee.id,shift:ee,onEdit:()=>I(ee),onDelete:()=>R(ee.id)}))):b.createElement("div",{className:"empty"},b.createElement("div",{className:"empty-icon"},b.createElement(xy,null)),b.createElement("b",null,"No shifts recorded this week"),b.createElement("p",{className:"muted"},"Add your first shift to start tracking your hours and pay."),b.createElement("button",{className:"primary",onClick:()=>pe(!0)},b.createElement(My,{size:17})," Add your first shift"))),b.createElement("section",{className:"month-note"},b.createElement(pd,{size:18}),b.createElement("div",null,b.createElement("b",null,"Month-to-date snapshot"),b.createElement("span",null,Da(Te.pay)," estimated · ",Te.hours.toFixed(2)," paid hours in ",q.slice(0,7)))),b.createElement("p",{className:"disclaimer"},b.createElement(kR,{size:14})," Earnings are estimates based on the rates entered. They do not include tax, holiday pay, pension, or other payroll adjustments."))):b.createElement("main",{className:"login-wrap"},b.createElement("div",{className:"login-card"},b.createElement("div",{className:"brand-mark"},"£"),b.createElement("p",{className:"eyebrow"},"YOUR PERSONAL PAY TRACKER"),b.createElement("h1",null,"Know your hours.",b.createElement("br",null),b.createElement("span",null,"Know your pay.")),b.createElement("p",{className:"muted"},"Track every restaurant shift, deduct unpaid breaks and see your weekly earnings automatically."),b.createElement("div",{className:"rate-box"},b.createElement("div",null,b.createElement("small",null,"FIRST 20 HOURS / WEEK"),b.createElement("strong",null,"£12.71 ",b.createElement("small",null,"per hour"))),b.createElement("div",null,b.createElement("small",null,"HOURS AFTER 20"),b.createElement("strong",null,"£10.00 ",b.createElement("small",null,"per hour")))),b.createElement("button",{className:"primary wide",onClick:Ie},b.createElement(DR,{size:18})," Continue with Google"),b.createElement("p",{className:"tiny"},"Your shifts are private to your Google account and sync across your devices."),C&&b.createElement("p",{className:"error"},C))):b.createElement("div",{className:"center-screen"},"Loading ShiftPay…"):b.createElement(bR,null)}function Pu({icon:i,label:e,value:t,detail:s,accent:o}){return b.createElement("div",{className:`stat-card ${o?"accent":""}`},b.createElement("div",{className:"stat-icon"},i),b.createElement("span",null,e),b.createElement("strong",null,t),b.createElement("small",null,s))}function LR({shift:i,onEdit:e,onDelete:t}){const s=$f(i),o=zu([i]);return b.createElement("div",{className:"shift-row"},b.createElement("div",{className:"date-bubble"},b.createElement("b",null,new Date(`${i.date}T12:00:00`).getDate()),b.createElement("small",null,new Date(`${i.date}T12:00:00`).toLocaleDateString("en-GB",{month:"short"}))),b.createElement("div",{className:"shift-main"},b.createElement("b",null,Hd(i.date)),b.createElement("span",null,i.start," – ",i.end,i.note?` · ${i.note}`:""),b.createElement("small",null,b.createElement(PR,{size:13})," ",i.breakMinutes||0," min unpaid break · ",aE(s)," paid")),b.createElement("div",{className:"shift-pay"},b.createElement("b",null,Da(o.pay)),b.createElement("small",null,(s/60).toFixed(2)," hrs")),b.createElement("div",{className:"row-actions"},b.createElement("button",{className:"icon-btn",title:"Edit shift",onClick:e},b.createElement(OR,{size:16})),b.createElement("button",{className:"icon-btn danger",title:"Delete shift",onClick:t},b.createElement(xR,{size:16}))))}function bR(){return b.createElement("main",{className:"setup-wrap"},b.createElement("div",{className:"setup-card"},b.createElement("div",{className:"brand-mark"},"£"),b.createElement("p",{className:"eyebrow"},"ALMOST READY"),b.createElement("h1",null,"Connect your Firebase project"),b.createElement("p",{className:"muted"},"Add your Firebase web app settings to enable Google sign-in and cloud sync. Follow the included README step by step."),b.createElement("ol",null,b.createElement("li",null,"Create a Firebase project and register a Web app."),b.createElement("li",null,"Enable Google under Authentication → Sign-in method."),b.createElement("li",null,"Create a Firestore database and publish ",b.createElement("code",null,"firestore.rules"),"."),b.createElement("li",null,"Copy ",b.createElement("code",null,".env.example")," to ",b.createElement("code",null,".env")," and fill in your Firebase config."),b.createElement("li",null,"Run ",b.createElement("code",null,"npm install")," and ",b.createElement("code",null,"npm run dev"),".")),b.createElement("p",{className:"tiny"},"No shifts are stored until you connect Firebase. Never share your Firebase private service-account key in this app.")))}_0.createRoot(document.getElementById("root")).render(b.createElement(b.StrictMode,null,b.createElement(MR,null)));"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("/sw.js").catch(()=>{}));
