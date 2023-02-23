import React, { useContext, useEffect, useState } from 'react';
import { auth, db } from './firebase/firebase';
import { collection, doc, setDoc, getDoc, query, onSnapshot, orderBy, getDocs } from "firebase/firestore";
import './App.css';
import SignUp from './components/auth/SignUp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from 'context/UserAuthContext';
import Chat from 'components/chat/Chat';

function App() {
  const { user } = useContext(AuthContext)

  return (
    <div className="App">
      {user ? <><Chat /></> : <> не Авторизован</>}
    </div>
  );
}

export default App;
