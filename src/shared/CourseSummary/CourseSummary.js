import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { GiBulletBill } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const CourseSummary = ({course}) => {
    const { name, image, description, keys, course_id} = course;
    const ref = useRef();
    return (
        <div className='m-4'>
            <div ref={ref} className="card lg:card-side bg-slate-600 shadow-xl">
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
                    <Link to={`/course/${course_id}`} className="card-actions justify-end">
                        <button className="btn bg-sky-600">Get premium access</button>
                    </Link>
                </div>
            </div>
            <ReactToPrint trigger={() =><button className="btn my-2 bg-sky-600">Download PDF</button>} content={() => ref.current}/>
        </div>
    );
};

export default CourseSummary;