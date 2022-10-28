import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import { FaBars, FaUserAlt } from 'react-icons/fa';
import { ImCross } from 'react-icons/im'
import { AuthContext } from '../../contexts/UserContext';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
    }

    return (
        <nav className="navbar justify-between bg-slate-800 text-zinc-200 text-xl font-semibold md:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost md:hidden">
                    <div onClick={() => setOpen(!open)} className='w-6 h-6 text-zinc-200 absolute right-2 top-4 cursor-pointer md:hidden'>
                        {
                            open ? <ImCross/> : <FaBars/>
                        }
                    </div>
                </label>
                <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-2 p-0 shadow bg-slate-800 rounded w-52 ${open ? 'left-0' : 'left-[-14rem]'}`}>
                    <li tabIndex={0}><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    {
                        user?.uid ?
                        <li onClick={handleLogOut}><Link>Log Out</Link></li>
                        :
                        <li><Link to='/login'>Login</Link></li>
                    }
                </ul>
                </div>
                <Link to='/' className='flex justify-center items-center'>
                <img className='w-12 mr-2' src={logo} alt="" />
                <p className="text-xl"><span className='text-zinc-100 text-2xl font-bold'>KT</span>schools</p>
                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal p-0">
                <li tabIndex={0}>
                    <Link to='/courses'>
                    Courses
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </Link>
                    <ul className="p-2 bg-slate-600 rounded">
                        {
                            courses.map(course =><li
                            key={course.id}
                            ><Link to={`/course/${course.id}`}>{course.name}</Link></li>)
                        }
                    </ul>
                </li>
                <li><Link to='/faq'>FAQ</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                {
                    user?.uid ? 
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            {
                                user?.photoURL ? 
                                <div className="w-10 bg-zinc-50 rounded-full">
                                    <img src={user.photoURL} alt=''/>
                                </div>
                                :
                                <FaUserAlt/>
                            }
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-600 rounded-box w-52">
                            <li><small>{user?.displayName}</small></li>
                            <li onClick={handleLogOut}><Link>Logout</Link></li>
                        </ul>
                    </div>
                    :
                    <li><Link to='/login'>Login</Link></li>
                }
                </ul>
            </div>
            
        </nav>
    );
};

export default NavBar;