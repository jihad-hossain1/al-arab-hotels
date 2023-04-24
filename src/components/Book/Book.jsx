import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Book = () => {
  const user = null;
  // const user = { email: "a" };
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, []);
  return (
    <div className="mx-10 my-10 py-10 min-h-screen">
      <h2 className="text-center py-5 text-xl">all booking here ....</h2>
      {user ? (
        <form action="" className="">
          <textarea
            name=""
            id=""
            cols="100"
            rows="5"
            className="border border-cyan-600"
          ></textarea>
          <br />
          <button className="border border-cyan-500 rounded px-2 bg-cyan-100 hover:bg-cyan-400">
            Add your comment
          </button>
        </form>
      ) : (
        <Link
          className="text-2xl text-center underline hover:text-cyan-500 hover:font-semibold"
          to="/login"
        >
          Please Log-In First
        </Link>
      )}
    </div>
  );
};

export default Book;
