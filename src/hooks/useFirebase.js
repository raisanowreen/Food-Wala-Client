import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

// Google Signin Method Implementation
    const signInUsingGoogle = () =>{
        setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
    
    .finally(() => setIsLoading(false));
    }

// observe user state change
useEffect(() =>{
const unSubscribed = onAuthStateChanged(auth, user =>{
        if(user){
            setUser(user)
        }
        else{
            setUser({})
        }
        setIsLoading(false);
    });
    return () => unSubscribed;
},[])


const logOut = () =>{
    setIsLoading(true);
    signOut(auth)
    .then(() =>{})
    .finally(() => setIsLoading(false));
}
    return {
        user,
        logOut,
        isLoading,
        signInUsingGoogle
    }
};

export default useFirebase;