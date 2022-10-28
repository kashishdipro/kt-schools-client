import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <section className='m-4 text-zinc-100'>
            <div className="card lg:card-side bg-slate-600 shadow-xl mb-4">
                <div className="card-body col-span-2">
                    <h2 className="card-title justify-center">Terms And Conditions</h2>
                    <p className='text-center'>This page contains important information about your legal rights and obligations when using any of the websites and services belonging to the Company.</p>
                    <p className='text-center'>Go back to <Link to='/register'>Registration</Link></p>
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditions;