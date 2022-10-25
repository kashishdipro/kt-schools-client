import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';

const Main = () => {
    return (
        <div className='bg-cyan-50 w-full h-screen'>
            <NavBar/>
            <div className='grid'>
                <div className='w-4/12'>
                    <h2 className='text-2xl font-bold text-slate-500'>Left Nav</h2>
                </div>
                <div className='w-8/12'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Main;