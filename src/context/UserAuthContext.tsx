import { auth } from '../firebase/firebase';
import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext<any>("");

function UserAuth({ children }: { children: React.ReactElement }) {
    const provider = new GoogleAuthProvider();
    const [user] = useAuthState(auth);




    function signin() {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);

                // // const token = credential?.accessToken;
                // const userData = result.user;
                // setUser(userData)
                // setCookie("auth-cookie", token)
            }).catch((error) => {
                console.log(error);
            });
    }

    const logout = () => {
        signOut(auth)
        // setUser(null)
    };


    return (
        <AuthContext.Provider value={{ user, signin, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserAuth

