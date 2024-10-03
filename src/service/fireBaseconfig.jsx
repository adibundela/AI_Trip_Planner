// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyC3ooZE41nM2hH6XJjkiS8hVgZvfhH9nrg",
  authDomain: "aitripplanner-835ad.firebaseapp.com",
  projectId: "aitripplanner-835ad",
  storageBucket: "aitripplanner-835ad.appspot.com",
  messagingSenderId: "628698964001",
  appId: "1:628698964001:web:d3a9034e70aa86c0ec8360",
  measurementId: "G-DV6MT2ZCZT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app)
// const analytics = getAnalytics(app);