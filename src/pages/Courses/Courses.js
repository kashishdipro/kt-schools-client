import React from 'react';
import SideNav from '../../shared/SideNav/SideNav';
import Course from '../Course/Course';

const Courses = () => {
    return (
        <section className='bg-zinc-50 w-full h-screen text-zinc-200'>
            <div className='grid grid-cols-4'>
                <SideNav/>
                <div className='col-span-3'>
                    <Course/>
                </div>
            </div>
        </section>
    );
};

export default Courses;