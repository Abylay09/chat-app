import { auth } from '../firebase/firebase';
import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';

export const AuthContext = createContext<any>("");

function UserAuth({ children }: { children: React.ReactElement }) {
    const provider = new GoogleAuthProvider();
    const [user] = useAuthState(auth);
    
    function signin() {
        signInWithPopup(auth, provider)
    }

    const logout = () => {
        signOut(auth)
    };

    return (
        <AuthContext.Provider value={{ user, signin, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserAuth

