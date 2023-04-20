import React from "react";
import Header from "../Layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Layout/Footer";

const Main = () => {
  return (
    <div className="bg-cyan-50">
      <Header></Header>
      <div className="bg-white">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
