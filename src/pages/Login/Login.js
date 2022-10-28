import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const [error, setError] = useState('');

    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6){
            setError('Password should be 6 character or more');
            return;
        }

        logIn(email, password)
        .then(result =>{
            const user = result.user;
            form.reset();
            setError('');
            navigate('/');
        })
        .catch(error => {
            setError(error.message);
            console.error(error);
        })
    }
    
    return (
        <section>
            <h2 className="font-bold">This is Login component</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login</h1>
                        <p className="py-6">Welcome back</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text">Email</span>
                                </label>
                                <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text">Password</span>
                                </label>
                                <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                                />
                                <label className="label">
                                <Link to='/register' className="label-text-alt link link-hover">
                                    Don’t have an account? 
                                </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-sky-600">Login</button>
                            </div>
                            <p className="text-lg text-red-500 font-medium">{error}</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
