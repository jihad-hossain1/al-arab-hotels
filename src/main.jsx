import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/main/Main";
import Home from "./components/Layout/Home";
import Login from "./components/Login/Login";
import AuthProvider from "./components/authprovider/AuthProvider";
import cartProductsLoader from "./components/utilities/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // loader: cartProductsLoader,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
