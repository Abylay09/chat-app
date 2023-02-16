import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase/firebase';

import './App.css';

function App() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  async function sendData() {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  }

  return (
    <div className="App">
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" onChange={event => setEmail(event.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="text" onChange={event => setPassword(event.target.value)} />
        <button onClick={() => sendData()}>Sign in</button>
      </div>
    </div>
  );
}

export default App;
