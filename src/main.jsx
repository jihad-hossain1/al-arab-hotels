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
import Book from "./components/Book/Book";
import PrivateRoute from "./routes/PrivateRoute";
import Register from "./components/Register/Register";

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
      {
        path: "/book",
        element: (
          <PrivateRoute>
            <Book></Book>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
