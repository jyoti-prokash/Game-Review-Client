import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";
export const AuthContext = createContext(null);
const AuthProvider=({ children })=>{
    const [user, setUser] = useState(null);
    const [errorText, setErrorText] = useState('')
    const [loading, setLoading] = useState(true);
    // google auth login
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };
    // creating new user by email pass
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    };
    // creating login user by email pass
    const loginUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };
    
    // creating logOut user
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    };
    // update profile data
    const updateUserProfile = (updateData) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,updateData)
    };
    // creating auth State change by email pass
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoading(false);
        })
        return unsubscribe;
    },[]);
    const userInfo = {
        createUser,
        loginUser,
        user,
        setUser,
        updateUserProfile,
        logOut,
        googleLogin,
        loading,
        errorText,
        setErrorText
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;