import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "chat-app-8b6da.firebaseapp.com",
    projectId: "chat-app-8b6da",
    storageBucket: "chat-app-8b6da.appspot.com",
    messagingSenderId: "960951744190",
    appId: "1:960951744190:web:27be37861598b5eef050ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);