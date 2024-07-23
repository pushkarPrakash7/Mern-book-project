import { createContext,useState,useEffect } from "react";
import {FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
export const BooksContext = createContext("");
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const loginWithGoogle =() =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    } 

    const loginWithGithub =() =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }

    const loginWithFacebook =() =>{
        setLoading(true);
        return signInWithPopup(auth,facebookProvider);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[]);
    
    const authInfo = {
        user,
        createUser,
        loading,
        loginWithGoogle,
        loginWithGithub,
        loginWithFacebook,
        loginUser,
        logoutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
