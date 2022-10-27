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
            {/* <div className="card lg:card-side bg-slate-600 shadow-xl">
                <div className="avatar">
                    <div className="w-80 rounded">
                        <img src={image} alt={name}/>
                    </div>
                </div>
                <div className="card-body col-span-2">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Introduction:</p>
                    <ul>
                        {
                            keys.map(key => <li className='flex items-center'
                            key={key} 
                            ><GiBulletBill className='mr-2'/> {key}</li>)
                        }
                    </ul>
                    <Link to={`/course/${course.id}`} className="card-actions justify-end">
                        <button className="btn bg-sky-600">Get premium access</button>
                    </Link>
                </div>
            </div> */}
        </section>
    );
};

export default Course;