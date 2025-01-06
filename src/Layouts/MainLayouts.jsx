import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            {/* bg-[#262626] */}
                <header className='pb-16 lg:pb-28'>
                    <Navbar></Navbar>
                </header>
                <Outlet></Outlet>
                <section>
                <Footer></Footer>
                </section>
        </div>
    );
};

export default MainLayouts;