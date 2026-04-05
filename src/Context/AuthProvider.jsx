import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext()
const provider = new GoogleAuthProvider();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    // Create User with Email And Password
    const createUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Set an authentication state observer and get user data
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            // console.log(currentUser);
            
        });
        return () => {
            setLoading(false);
            unsubscribe();
        }
    }, [])


    //  Sign in existing users

    const LogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // User logout system

    const Logout = () => {
        return signOut(auth).then(() => {
            alert('Sign-out successful')
        }).catch((error) => {
            console.log(error);


        });
    }
    // Login With Google
    const LoginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }


    const AuthData = {
        auth,
        user,
        setUser,
        createUser,
        LogIn,
        Logout,
        LoginWithGoogle,
        loading,
        setLoading
    }
    return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;