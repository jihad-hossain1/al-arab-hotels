import React, { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";

const Cart = ({ hotel }) => {
  const { hotelsData, name } = useContext(AuthContext);
  // console.log(hotelsData);
  const handleBook = () => {
    console.log("ckick");
  };
  //   console.log(hotels.length, name);
  const { hotel_name, image_url, rating, price_per_night, room } = hotel;
  return (
    <div className="rounded-md border shadow hover:shadow-md ">
      <img className="p-2 object-cover" src={image_url} alt="" />
      <div className="flex justify-between px-2 my-3">
        <h4 className="font-semibold text-xl">{hotel_name}</h4>
        <button
          onClick={handleBook}
          className="border bg-cyan-200 rounded-md px-3 hover:bg-cyan-400 hover:font-semibold"
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default Cart;
