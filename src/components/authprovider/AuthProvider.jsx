import React, { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const name = { rohim: 20, korim: "bogura", etc: 23 };
  const login = (email, password) => {
    // call firebase function
    return new Promise((resolve) => {
      resolve({
        user: { email: "a@a.com" },
      });
    });
  };
  useEffect(() => {
    fetch("/hotelsData.json")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  const authInfo = {
    name,
    hotels,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
