import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../../shared/CourseSummary/CourseSummary';

const Course = () => {
    const courses = useLoaderData();
    return (
        <section className='text-zinc-100'>
            {
                courses.map(course => <CourseSummary
                    key={course.id}
                    course={course}
                ></CourseSummary>)
            }
        </section>
    );
};

export default Course;