import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    // const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin,setAdmin] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // google sign in method
    const signInUsingGoogle = (location,history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email,user.displayName);
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
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
        }).catch((error) => {
        }).finally(() => setIsLoading(false));

    }
    
    const saveUser = (email,displayName) => {
        const user = {email,displayName};
        fetch('http://localhost:5000/users',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    // find admin
    useEffect(() => {
        fetch(`http://localhost:5000/admin/${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log('admin role = ',data.admin);
            setAdmin(data.admin);
        })
    },[user.email]);

    return {
        signInUsingGoogle,
        user,
        logOut,
        admin,
        isLoading

    }
}

export default useFirebase;