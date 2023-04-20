import React, { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// import cartProductsLoader from "../utilities/loader";
// import { Children } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  //   const { products, savedCart } = useLoaderData();
  //   console.log(products);
  const hotelsData = hotels;
  console.log(hotelsData);

  // const {sa }
  //   const loadedHotels = cartProductsLoader();

  const name = { rohim: 20, korim: "bogura", etc: 23 };
  useEffect(() => {
    fetch("/hotelsData.json")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  const authInfo = {
    name,
    hotels,
    hotelsData,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
