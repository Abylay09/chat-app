import React from 'react'
import SignUp from '../components/auth/SignUp'

  // async function sendData() {
  //   await createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //       // ..
  //     });
  // }

function SignInPage() {
    return (
        <SignUp />
    )
}

export default SignInPage