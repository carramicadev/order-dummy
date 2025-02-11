import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

let firebaseConfig = {
  apiKey: "AIzaSyDTH2T39X_A8W36o70nqym-8tntdIsdF00",
  authDomain: "carramica-prod.firebaseapp.com",
  projectId: "carramica-prod",
  storageBucket: "carramica-prod.firebasestorage.app",
  messagingSenderId: "276155974594",
  appId: "1:276155974594:web:ee4c6b32bb3ad58ae28c5b",
  measurementId: "G-X82FGFKDT6"
};
console.log(process.env.REACT_APP_ENVIRONMENT === 'production')
// if (process.env.REACT_APP_ENVIRONMENT === 'production') {
//   firebaseConfig = {
//     apiKey: "AIzaSyDmROB55jQKzWR9e6VUntO_E3eJ5PB4xTY",
//     authDomain: "carramica-prod.firebaseapp.com",
//     projectId: "carramica-prod",
//     storageBucket: "carramica-prod.appspot.com",
//     messagingSenderId: "276155974594",
//     appId: "1:276155974594:web:28ac0d811ec22be3e28c5b",
//     measurementId: "G-6NT1EELBP8"
//   };
// }
export default firebaseConfig;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };