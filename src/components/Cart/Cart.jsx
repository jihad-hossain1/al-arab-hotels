import React, { useContext, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { Link } from "react-router-dom";

const Cart = ({ hotel, handleBook }) => {
  const { hotel_name, image_url, rating, price_per_night, rooms, hotel_id } =
    hotel;
  console.log(hotel.hotel_id);
  return (
    <div className="rounded-md border shadow hover:shadow-md mx-2">
      <div></div>
      <img className="p-2 h-52 w-96 lg:h-96 lg:w-full" src={image_url} alt="" />
      <div className="flex justify-between px-2 my-3">
        <h4 className="font-semibold text-xl">{hotel_name}</h4>
        <Link
          to="/login"
          onClick={() => handleBook(hotel_id)}
          className="border bg-cyan-200 rounded-md px-3 hover:bg-cyan-400 hover:font-semibold"
        >
          Book
        </Link>
      </div>
    </div>
  );
};

export default Cart;
