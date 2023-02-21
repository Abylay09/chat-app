import React, { useContext } from 'react'
import { auth } from '../../firebase/firebase';
import { AuthBtn, HeaderWrapper, LogOutBtn } from 'styles/UiStyles'
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from 'context/UserAuthContext';

function Header() {
    const [user, loading, error] = useAuthState(auth);
    const authContext = useContext(AuthContext)


    return (
        <HeaderWrapper>
            {
                user ? <h3>{user.displayName}</h3> : <h2>Chat-App</h2>
            }

            <div>
                {
                    user ? <LogOutBtn onClick={() => authContext.logout()}>Logout</LogOutBtn>
                        : <AuthBtn onClick={() => authContext.signin()}>Google auth</AuthBtn>
                }


            </div>

        </HeaderWrapper>
    )
}

export default Header