import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/authprovider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  //   const user = { email: "a" };

  if (!user) {
    // navigate
    return <Navigate to="/login" />;
  } else {
    return children;
  }

  return <div></div>;
};

export default PrivateRoute;
