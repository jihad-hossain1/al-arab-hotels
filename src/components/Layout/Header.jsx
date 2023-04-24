import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";

const Header = () => {
  const { name } = useContext(AuthContext);
  // console.log(name);
  return (
    <div className='bg-[url("https://i.ibb.co/0c1bGjP/marvin-meyer-8-CDu-HXff3zo-unsplash.jpg")]  bg-no-repeat bg-cover bg-center w-full  max-h-52 md:h-screen '>
      <div className="flex flex-col items-center py-48">
        <ul className="flex space-x-10">
          <li className="border rounded px-2 py-1 bg-cyan-100 font-semibold text-cyan-700 hover:bg-cyan-300">
            <Link to="/">Home</Link>
          </li>
          <li className="border rounded px-2 py-1 font-semibold text-cyan-700 hover:bg-cyan-300 bg-cyan-100">
            <Link to="/book">Books</Link>
          </li>
          <li className="border rounded px-2 py-1 font-semibold text-cyan-700 hover:bg-cyan-300  bg-cyan-100">
            <Link to="/login">Log-In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
