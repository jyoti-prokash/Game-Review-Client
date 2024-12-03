import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
                <header className='bg-[#262626]'>
                    <Navbar></Navbar>
                </header>
                <Outlet></Outlet>
                <Footer></Footer>
        </div>
    );
};

export default MainLayouts;