import React, { createContext, useEffect } from 'react';
    import { GoogleAuthProvider } from "firebase/auth";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged , signInWithPopup} from "firebase/auth"; 
import { app } from '../Firebase.config.';

export const UserContext = createContext()
const AuthContext = ({ children }) => {
    const auth = getAuth(app)
    console.log(auth)
    // email sign in 
    const emailSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const emailSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google signIn 

const googleProvider = new GoogleAuthProvider();

const GoogleSignIn = (auth , googleProvider) => {
    return signInWithPopup(auth , googleProvider)
}
    // observer 
    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, (user) => {
                console.log(user)
            })

        }
        return  () => unsubscribe 
    }   , [])
    
    const Auth = { emailSignUp , emailSignIn , googleProvider , GoogleSignIn }
    return (
        <UserContext.Provider value={Auth}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;