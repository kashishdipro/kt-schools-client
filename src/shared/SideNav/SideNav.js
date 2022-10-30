import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('https://kt-schools-server.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='bg-slate-600 h-full'>
            <p className='md:text-2xl text-lg font-semibold md:p-4 p-2'>Total courses: {courses.length}</p>
            <div className=''>
                {
                    courses.map(course => <p key={course.id} className='md:text-2xl text-lg font-semibold md:p-4 p-2'>
                        <Link to={`/course/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default SideNav;