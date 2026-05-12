import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";

export const AuthContext = createContext();

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);  
        });
        return () => unsubscribe();  
    }, [])

    const LogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const Logout = () => {
        return signOut(auth)
            .then(() => alert('Sign-out successful'))
            .catch((error) => console.error(error));
    }

    const LoginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
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

    
    return (
        <AuthContext.Provider value={AuthData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;