import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/footer';
import logo from '../../../public/Capture.png';
const Main = () => {
    return (
        <div>
            <img src={logo} className='  h-24 ml-0 lg:ml-20 mb-2 w-2/3' alt="" />
            <NavBar></NavBar>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;