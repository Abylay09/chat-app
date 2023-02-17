import React, { useContext, useEffect, useState } from 'react';
import { auth, db } from './firebase/firebase';
import { collection, doc, setDoc, getDoc, query, onSnapshot, orderBy, getDocs } from "firebase/firestore";
import './App.css';
import SignUp from './components/auth/SignUp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from 'context/UserAuthContext';

function App() {
  const { user } = useContext(AuthContext)
  async function get() {
    const q = query(collection(db, "messages"))
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
  }

  // useEffect(() => {
  //   // get()
  //   const q = query(collection(db, 'messages'));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     let messages: { id: string; }[] = [];
  //     querySnapshot.forEach((doc) => {
  //       messages.push({ ...doc.data(), id: doc.id });
  //     });
  //     console.log(messages);

  //   });
  //   return () => unsubscribe();
  // }, []);

  return (
    <div className="App">
      {user ? <>Авторизован</> : <> не вторизован</>}
    </div>
  );
}

export default App;
