import React, { useEffect, useState } from 'react';
import { Authcontex } from './Authcontex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase.init';

const Authprovider = ({children}) => {
    const[user,setUser]=useState(null)
    const[loading,setloading]=useState(true)
    const provider = new GoogleAuthProvider();
const createuser=(email,password)=>{
     setloading(true)
    return createUserWithEmailAndPassword(auth,email,password);
}

const Googlelogin=()=>{
     setloading(true)
    return signInWithPopup(auth,provider)
}
const login=(email,password)=>{
     setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

 const upadeteuser=(updatadata)=>{
        return updateProfile(auth.currentUser,updatadata)
      }
 const logOut = () => {
     setloading(true)
    return signOut(auth);
   
  };

 useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setloading(false)
    });
    return () => {
        unsubscribe();
      };
    },
    [])

    const userinfo={
        user,
        setUser,
        createuser,
        login,
        logOut,
        Googlelogin,
        upadeteuser,
        loading,
        setloading
    }
    return <Authcontex value={userinfo}> {children}</Authcontex>
};

export default Authprovider;