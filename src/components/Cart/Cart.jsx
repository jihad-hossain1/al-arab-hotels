import React, { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";

const Cart = () => {
  const { hotelsData, name } = useContext(AuthContext);
  console.log(hotelsData);
  //   console.log(hotels.length, name);

  return <div></div>;
};

export default Cart;
