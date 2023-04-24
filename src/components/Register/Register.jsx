import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="pt-10 flex flex-col justify-center items-center">
      <form
        onSubmit={handleRegSubmit}
        action=""
        className="flex flex-col border border-cyan-300 px-10 py-8 md:w-96 "
      >
        <label htmlFor="name">User Name</label>
        <input
          type="text"
          name="name"
          className="rounded border border-cyan-200 py-1"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id=""
          className="rounded border border-cyan-200 py-1"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id=""
          className="rounded border border-cyan-200 py-1"
        />
        <div>
          <input
            type="submit"
            value="register"
            className="mt-5 rounded border border-cyan-400 px-3 py-1 cursor-pointer"
          />
        </div>
        <p className="text-sm mt-4">
          You have already account?
          <Link to="/login" className="text-cyan-500 hover:underline pl-2">
            log-In here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
