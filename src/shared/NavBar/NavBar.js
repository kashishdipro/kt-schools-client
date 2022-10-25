import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'

const NavBar = () => {
    return (
        <nav className="navbar justify-between bg-sky-600 md:px-8">
            <h2 className='text-2xl font-bold text-white'>KT<span className='text-zinc-100'>school</span></h2>
        </nav>
    );
};

export default NavBar;