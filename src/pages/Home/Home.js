import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import banner from '../../img/banner.png'
import { FaAngleRight } from "react-icons/fa";

const Home = () => {
    const courses = useLoaderData();
    return (
        <section className='bg-zinc-50 w-full h-screen text-zinc-100'>
            <div className='md:flex items-center justify-around bg-teal-800 '>
                <div className='mr-4 mb-4 p-2'>
                    <p className='lg:text-4xl md:text-xl font-bold'>Get Trained For The Future,</p>
                    <p className='lg:text-4xl md:text-xl font-bold'>With KT<span className='text-zinc-200'>schools</span></p>
                    <div className='pt-4'>
                        <p className='lg:text-xl md:text-md text-zinc-400'>You can learn programming languages in this website. Then what are you waiting for. Let's jump!!!</p>
                    </div>
                </div>
                <div className='w-70 h-full'>
                    <img src={banner} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-center gap-4 md:px-16 px-4 py-5'>
                {
                    courses.map(course =>
                        <div key={course.id} className='bg-slate-600 rounded-lg'>
                            <div className='text-center my-2 p-2'>
                                <p className='text-2xl font-bold'>{course.name}</p>
                                <p className='text-xl font-semibold'>{course.description}</p>
                                <Link to={`/course/${course.id}`} className='flex justify-center items-center  mt-2 p-2 rounded-lg text-white font-semibold bg-sky-600'>
                                <p>Explore {course.name}</p>
                                <FaAngleRight className='w-4 h-4 ml-2'/>
                                </Link>
                            </div>
                        </div>    
                    )
                }
            </div>
        </section>
    );
};

export default Home;