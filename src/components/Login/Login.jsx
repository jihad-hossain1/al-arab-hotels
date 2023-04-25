import React, { useContext, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { login, setUser } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(password);
    // if (emailError) {
    //   a.target.email.focus();
    //   return;
    // } else if (passError) {
    //   a.target.password.focus();
    //   return;
    // }
    login(email, password)
      .then((result) => {
        const user = result.user;
        // setUser(user);
        console.log(user);
        setSuccess(user);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // uncontrolled components => controlled component
  const handlePassword = (e) => {
    // const passwordInput = e.target.value;
    // setPassword(passwordInput);
    // // console.log(passwordInput);
    // if (passwordInput.langth < 6) {
    //   setPassError("Must be 6 or more character or number");
    // } else if (!/(?=.*[a-z])/.test(passwordInput)) {
    //   setPassError("must a capital letter");
    // } else {
    //   setPassError("");
    // }
  };

  const handleEmail = (e) => {
    // const emailInput = e.target.value;
    // setEmail(emailInput);
    // console.log(emailInput);
    // if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput)) {
    //   return setEmailError("please valid email input");
    // } else {
    //   setEmailError("");
    // }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="py-10 md:mx-60  px-5 ">
        <div className="relative z-0  mb-6 group">
          <input
            type="email"
            name="email"
            // value={email}
            // onChange={handleEmail}
            id="email"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none   focus:outline-none focus:ring-0  peer ${
              email
                ? emailError
                  ? "border-red-500"
                  : "border-green-400"
                : "border-gray-300 focus:border-blue-600"
            }`}
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
          {emailError && (
            <span className="text-red-600 text-sm">{emailError}</span>
          )}
        </div>
        <div className="relative z-0  mb-6 group">
          <input
            type="password"
            name="password"
            // value={password}
            // onChange={handlePassword}
            id="password"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer ${
              password
                ? passError
                  ? "border-red-500"
                  : "border-green-400"
                : "border-gray-300 focus:border-blue-600"
            }`}
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          {passError && (
            <span className="text-red-700 text-sm">{passError}</span>
          )}
        </div>

        <input
          type="submit"
          value="login"
          className="border border-cyan-600 rounded px-2 py-1 text-sm cursor-pointer hover:bg-cyan-300"
        />
        <p className="text-sm mt-5">
          you don't have a account ?
          <Link to="/register" className="pl-2 text-cyan-600 hover:underline">
            Register here
          </Link>
        </p>
        <p>
          {success && (
            <span className="text-sm text-green-400 text-center">
              login successfull
            </span>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
