import React, { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateCurrentUser,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const name = { rohim: 20, korim: "bogura", etc: 23 };

  const logOut = () => {
    return signOut(auth);
  };

  const register = (email, password) => {
    // call firebase function
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth state change", currentUser);
      setUser(currentUser);
    });
    return () => {
      unsuscribe();
    };
  }, []);

  useEffect(() => {
    fetch("/hotelsData.json")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  const authInfo = {
    name,
    hotels,
    register,
    login,
    user,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
