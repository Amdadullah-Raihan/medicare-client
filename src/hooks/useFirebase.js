import React, { useEffect, useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication()
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLaoding, setIsLaoding] = useState(true)

    //
    const signInUsingGoogle = (e) => {
        e.preventDefault()

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
    }


 //remembering user state
 useEffect(()=>{
    onAuthStateChanged(auth, user =>{
        if(user){
            setUser(user)
            setIsLaoding(false)
        }
        else{
            setUser({})
            setIsLaoding(true)
        }
    })
 },[])

 const handleLogOut = () =>{
    signOut(auth)
    .then(setUser({}))
    .catch(error=>{
        setError(error.message)
    })
 }

    return {
        user,
        setUser,
        signInUsingGoogle,
        error,
        setError, 
        handleLogOut

    }
       
    
}

export default useFirebase