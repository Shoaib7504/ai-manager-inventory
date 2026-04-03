import React from 'react';
import Navbar from '../components/Navbar';
import HomePage from '../Pages/HomePage';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto bg-[#F9FAFB]'>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default MainLayout;