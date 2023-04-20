import React from 'react';
import Header from '../Layout/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Layout/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;