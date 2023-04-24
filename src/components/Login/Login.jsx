import React, { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    console.log(password);
  };
  // uncontrolled components => controlled component
  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    // console.log(passwordInput);
    if (passwordInput.langth < 6) {
      setPassError("Must be 6 or more character or number");
    } else if (!/.+[A-Z].+/.test(passwordInput)) {
      setPassError("must a capital letter");
    } else {
      setPassError("");
    }
  };

  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    console.log(emailInput);
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput)) {
      setEmailError("please valid email input");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="py-10 md:mx-60  px-5 ">
        <div className="relative z-0  mb-6 group">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
            value={password}
            onChange={handlePassword}
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
          value="submit"
          className="border border-cyan-600 rounded px-2 py-1 text-sm cursor-pointer hover:bg-cyan-300"
        />
      </form>
    </div>
  );
};

export default Login;
