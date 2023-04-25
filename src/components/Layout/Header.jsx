import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const loggOut = result.user;
        setSuccess(loggOut);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };
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
          <li>
            {user ? (
              <>
                <span className="text-sm underline bg-cyan-100 rounded px-1 shadow text-cyan-500">
                  {user.email}
                </span>
                <span
                  onClick={handleLogOut}
                  className="border rounded px-2 py-1 font-semibold text-cyan-700 hover:bg-cyan-300  bg-cyan-100 cursor-pointer ml-1"
                >
                  Log-Out
                </span>
              </>
            ) : (
              <Link
                className="border rounded px-2 py-1 font-semibold text-cyan-700 hover:bg-cyan-300  bg-cyan-100"
                to="/login"
              >
                Log-In
              </Link>
            )}
            <p className="text-sm text-green-400">
              {success && <span>Successfully Log-out</span>}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
