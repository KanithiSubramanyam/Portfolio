import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Firestore, getFireStore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCdxwiFGOYeXZb3lsX4umPKR039QPdcUmg",
  authDomain: "subramanyam-portfolio.firebaseapp.com",
  projectId: "subramanyam-portfolio",
  storageBucket: "subramanyam-portfolio.appspot.com",
  messagingSenderId: "776257888447",
  appId: "1:776257888447:web:595bc9d84f054a4a6f260a",
  measurementId: "G-SZECT4425B"
};

const app = initializeApp(firebaseConfig);
const db = getFireStore(app)
const analytics = getAnalytics(app);

export {db};
