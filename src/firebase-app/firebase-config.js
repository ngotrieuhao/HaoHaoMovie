// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuau7-FWz9tERBMBHJtQ1IRQj2nkrxzBI",
  authDomain: "haohaocinema.firebaseapp.com",
  projectId: "haohaocinema",
  storageBucket: "haohaocinema.appspot.com",
  messagingSenderId: "989942558430",
  appId: "1:989942558430:web:7f13077f3e24be2b349c4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
