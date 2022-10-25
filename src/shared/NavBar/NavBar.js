import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'

const NavBar = () => {
    return (
        <nav className="navbar justify-between bg-cyan-600 md:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li tabIndex={0}>
                    <Link className="justify-between">
                        Courses
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                    </Link>
                    <ul className="p-2">
                        <li><Link>Submenu 1</Link></li>
                        <li><Link>Submenu 2</Link></li>
                        <li><Link>Submenu 3</Link></li>
                        <li><Link>Submenu 4</Link></li>
                        <li><Link>Submenu 5</Link></li>
                        <li><Link>Submenu 6</Link></li>
                    </ul>
                    </li>
                    <li><Link>FAQ</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Item 4</Link></li>
                </ul>
                </div>
                <img className='w-12' src={logo} alt="" />
                <Link className="btn btn-ghost normal-case text-xl"><span className='text-zinc-50'>KT</span>schools</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                <li tabIndex={0}>
                    <Link>
                    Courses
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </Link>
                    <ul className="p-2">
                    <li><Link>Submenu 1</Link></li>
                    <li><Link>Submenu 2</Link></li>
                    <li><Link>Submenu 3</Link></li>
                    <li><Link>Submenu 4</Link></li>
                    <li><Link>Submenu 5</Link></li>
                    <li><Link>Submenu 6</Link></li>
                    </ul>
                </li>
                <li><Link>FAQ</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>Item 4</Link></li>
                </ul>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <Link className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </Link>
                        </li>
                        <li><Link>Settings</Link></li>
                        <li><Link>Logout</Link></li>
                    </ul>
                </div>
            </div>
            
        </nav>
    );
};

export default NavBar;