import React, { useContext } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useCookies } from 'react-cookie';
import { AuthBtn, HeaderWrapper, LogOutBtn } from 'styles/UiStyles'
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from 'context/UserAuthContext';

function Header() {
    const provider = new GoogleAuthProvider();
    // const [cookies, setCookie] = useCookies(['auth-cookie']);
    // const [user, loading, error] = useAuthState(auth);
    const authContext = useContext(AuthContext)


    return (
        <HeaderWrapper>
            {
                authContext.user ? <h3>{authContext.user.displayName}</h3> : <h2>Chat-App</h2>
            }

            <div>
                {
                    authContext.user ? <LogOutBtn onClick={() => authContext.logout()}>Logout</LogOutBtn>
                        : <AuthBtn onClick={() => authContext.signin()}>Google auth</AuthBtn>
                }


            </div>

        </HeaderWrapper>
    )
}

export default Header