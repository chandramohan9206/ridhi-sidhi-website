import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// 🔴 PASTE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyAAEy669goPyM76VXHkO7cL2iIGJyFVWdg",
  authDomain: "ridhi-sidhi-wash.firebaseapp.com",
  projectId: "ridhi-sidhi-wash",
  storageBucket: "ridhi-sidhi-wash.firebasestorage.app",
  messagingSenderId: "962546166996",
  appId: "1:962546166996:web:c9ca3900f0bf8f42529f41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database (Firestore)
export const db = getFirestore(app);

// Authentication (Login system)
export const auth = getAuth(app);