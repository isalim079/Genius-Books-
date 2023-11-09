/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Register with email and password
    const registerWithEmailPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Google Login Handler
    const handleGoogleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Github Login Handler
    const handleGithubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    };

    // Login with email and password
    const loginWithEmailPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("current user", currentUser);

            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email: userEmail}

            setUser(currentUser);
            setLoading(false);




            // jwt-----
            if(currentUser){
                
                axios.post( "https://assignment-11-server-r4tang1gd-isalim079.vercel.app/jwt", loggedUser, {withCredentials: true})
                .then(res => {
                    console.log("token response", res.data)
                })
            }
            else{
                axios.post("https://assignment-11-server-r4tang1gd-isalim079.vercel.app/logout", loggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                })
            }


            
            

        });
        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        user,
        registerWithEmailPass,
        loading,
        loginWithEmailPass,
        logOut,
        handleGoogleLogin,
        handleGithubLogin,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
