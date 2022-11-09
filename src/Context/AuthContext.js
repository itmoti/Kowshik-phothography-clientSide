import React, { createContext, useEffect, useState } from 'react';
    import { GoogleAuthProvider, signOut } from "firebase/auth";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged , signInWithPopup , updateProfile}  from "firebase/auth"; 
import { app } from '../Firebase.config.';

export const UserContext = createContext()
const AuthContext = ({ children }) => {
    const auth = getAuth(app)
    const [user,setUser] = useState('');
 
    // email sign up
    const emailSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //email sign in
    const emailSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
//  update profile 
const updatingProfile =(info) =>  {
    console.log(info)
    updateProfile(auth.currentUser ,{info} )
}
    // google signIn 

const googleProvider = new GoogleAuthProvider();

const GoogleSignIn = ( ) => {
    return signInWithPopup(auth , googleProvider)
}
// logout 
const signOutMail =() => {
      signOut(auth)
}
    // observer 
    useEffect(() => {
        const unsubscribe = 
            onAuthStateChanged(auth, (currentUser) => {
                   setUser(currentUser)
            })
            return () => {
                unsubscribe()
            }
        } , [] )
       
    
    const Auth = { emailSignUp , emailSignIn , googleProvider , GoogleSignIn ,updatingProfile , user , signOutMail }
    return (
        <UserContext.Provider value={Auth}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;