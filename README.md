# ShiftPay – Work Hours & Salary Tracker

A responsive React + Firebase web app for recording shifts, deducting unpaid breaks, and estimating weekly earnings. It can be installed on Android/desktop as a PWA.

## Pay rules included

- First 20 **paid** hours in each Monday–Sunday week: £12.71/hour.
- Every paid hour after 20 in that same week: £10.00/hour.
- Unpaid break minutes are deducted from each shift before weekly hours and pay are calculated.
- A shift whose clock-out time is earlier than or equal to clock-in is treated as ending the following day.
- Pay is an estimate before tax or payroll adjustments.

## 1. Create and configure Firebase

1. Open https://console.firebase.google.com/ and create a Firebase project.
2. In Project settings → General → Your apps, add a Web app (`</>`). Copy its config values.
3. In Authentication → Sign-in method, enable **Google**. Add your deployed domain under Authentication → Settings → Authorized domains. For local development, `localhost` is normally already authorised.
4. In Firestore Database, create a database.
5. Open Firestore Rules and publish the contents of `firestore.rules` from this project. These rules ensure each signed-in user can only access their own shifts.
6. Copy `.env.example` to a new file named `.env` in the project root. Fill in the values from your Firebase web app config. The variable names must start with `VITE_`.

Example:
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=my-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=my-project
VITE_FIREBASE_STORAGE_BUCKET=my-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

Firebase web config is intended to be used in a browser; Firestore security rules and authorised domains protect the data. Never put a Firebase Admin SDK service-account private key in this frontend project.

## 2. Run locally

Install Node.js (LTS), then in this folder run:

```
npm install
npm run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`.

To check a production build:
```
npm run build
npm run preview
```

## 3. Deploy so phone and laptop can both use it

One straightforward option is Firebase Hosting:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Sign in: `firebase login`
3. From this project folder, select your project: `firebase use --add`
4. Build: `npm run build`
5. Deploy: `firebase deploy --only hosting,firestore:rules`

The included `firebase.json` deploys the `dist` folder. Make sure your `.env` values are present when you run the build. Add the final Hosting domain to Firebase Authentication → Authorized domains if it is not already listed.

Open the deployed HTTPS URL on your phone and laptop and sign in with the same Google account. Your shifts sync through Firestore.

## 4. Install on Android / desktop

- Android Chrome: open the deployed URL → browser menu (⋮) → **Install app** or **Add to Home screen**.
- Desktop Chrome/Edge: open the deployed URL → install icon in the address bar (if shown), or browser menu → **Install page as app**.

## Notes

- Week boundary is Monday 00:00 through Sunday 23:59 in the browser's local time zone.
- CSV export downloads the selected week's shifts and total.
- This starter uses Firebase's browser Google sign-in popup. If popup is blocked, allow popups for the app domain.
- The app needs an internet connection for sign-in and cloud sync. The service worker caches a small app shell, but this is not full offline editing/sync.
