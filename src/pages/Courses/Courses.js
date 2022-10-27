import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../../shared/CourseSummary/CourseSummary';
import SideNav from '../../shared/SideNav/SideNav';

const Courses = () => {
    const allCourse = useLoaderData ();
    return (
        <section className='bg-zinc-50 w-full h-screen text-zinc-200'>
            <div className='grid grid-cols-4'>
                <SideNav/>
                <div className='col-span-3'>
                    {
                        allCourse.map(course => <CourseSummary
                        key={course.id}
                        course={course}
                        ></CourseSummary>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Courses;