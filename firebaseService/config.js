// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyC6PNYptcU1i_y8IzxCSK6dbt2Usqp5Gzw",
  authDomain: "taptoearn-4b578.firebaseapp.com",
  projectId: "taptoearn-4b578",
  storageBucket: "taptoearn-4b578.appspot.com",
  messagingSenderId: "48507139352",
  appId: "1:48507139352:web:a68a91785d8018b9ab9a6d",
  measurementId: "G-FMCK5S13G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };