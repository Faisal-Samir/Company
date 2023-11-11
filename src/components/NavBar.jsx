import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-blue-500 text-white justify-around">
                <div className="navbar-start">
                    <div className="dropdown bg-blue-500 text-black">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/aboutUs'>About us</Link></li>
                            <li><a href='#contactUs'>Contact us</a></li>
                            <li><Link to='/projects'>Projects</Link></li>
                        </ul>
                    </div>
                    <Link to='/'><h1 className="normal-case text-xl font-bold ">AATradeInternational</h1></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex space-x-5 px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/aboutUs'>About us</Link></li>
                        <li><a href='#contactUs'>Contact us</a></li>
                        <li><Link to='/projects'>Projects</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;