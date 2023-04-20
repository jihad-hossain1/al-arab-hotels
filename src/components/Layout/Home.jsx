import React, { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import Cart from "../Cart/Cart";

const Home = () => {
  const { hotels } = useContext(AuthContext);
  //   console.log(hotels);
  return (
    <div className="my-10 md:px-8">
      <div className="grid md:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          <Cart key={hotel.id} hotel={hotel}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Home;
