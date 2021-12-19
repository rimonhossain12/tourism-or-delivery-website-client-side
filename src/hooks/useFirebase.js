import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    // const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // google sign in method
    const signInUsingGoogle = (location,history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                // setUser(user);
                // setAuthError('');
            }).catch((error) => {
                // setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, [auth])

    // google logout;
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));

    }

    return {
        signInUsingGoogle,
        user,
        // error,
        logOut,
        isLoading

    }
}

export default useFirebase;