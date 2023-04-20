import React, { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import Cart from "../Cart/Cart";
import { addToDb } from "../utilities/db";

const Home = () => {
  const { hotels } = useContext(AuthContext);
  //   console.log(hotels);
  const handleBook = (id) => {
    // console.log(id);
    addToDb(id);
  };
  return (
    <div className="my-10 md:px-8">
      <div className="grid md:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          <Cart
            key={hotel.hotel_id}
            hotel={hotel}
            handleBook={handleBook}
          ></Cart>
        ))}
      </div>
    </div>
  );
};

export default Home;
