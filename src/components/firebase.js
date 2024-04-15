
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCe-kRJHWXWsN5zeKsug2JpCB7BjlLS4B0",
  authDomain: "react-auth-tutorial-8f722.firebaseapp.com",
  projectId: "react-auth-tutorial-8f722",
  storageBucket: "react-auth-tutorial-8f722.appspot.com",
  messagingSenderId: "530029415671",
  appId: "1:530029415671:web:10f14a4ea81717feaad7f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const firestore = getFirestore; // Update this line to export getFirestore instead of db

export { auth, db, firestore, storage }; // Export firestore instead of db
export default app;
