import React, { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Course = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-center gap-4 md:px-16 px-4 py-5'>
                {
                    courses.map(course =>
                        <div className='bg-slate-600 rounded-lg'>
                            <img className='rounded-lg p-2' src={course.image} alt="" />
                            <div className='text-center mt-2 p-2'>
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
        </section>
    );
};

export default Course;