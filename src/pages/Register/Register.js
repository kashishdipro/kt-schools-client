import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../contexts/UserContext";

const Register = () => {
    const {createUser, signInWithGoogle} = useContext(AuthContext);

    const [error, setError] = useState('');
    
    const googleProvider = new GoogleAuthProvider();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.displayName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(displayName, photoURL, email, password);

        if(password.length < 6){
            setError('Password should be 6 character or more');
            return;
        }

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log('register user', user);
            setError('');
            form.reset();
        })
        .catch(error =>{
            setError(error.message);
            console.error(error)
        })
    };

    const handleGoogleSignIn = () =>{
        signInWithGoogle(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    return (
        <section>
            <h2 className="font-bold">This is Register component</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register</h1>
                        <p className="py-6">Create an account</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body pb-0">
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text">Name</span>
                                </label>
                                <input
                                type="text"
                                name="displayName"
                                placeholder="name"
                                className="input input-bordered"
                                required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text">Name</span>
                                </label>
                                <input
                                type="text"
                                name="photoURL"
                                placeholder="photo url"
                                className="input input-bordered"
                                required
                                />
                            </div>
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
                                <Link to='/login' className="label-text-alt link link-hover">
                                    Already, have an account?
                                </Link>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" className="border border-gray-400 mr-2"/>
                                <span>I accept the <Link to='/termsandconditions' className="font-medium">Terms of Use & Privacy Policy</Link></span>
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-md bg-sky-600">Register</button>
                            </div>
                            <p className="text-lg text-red-500 font-medium">{error}</p>
                        </form>
                        <div className="flex flex-col w-full border-opacity-100">
                            <div className="divider">OR</div>
                        </div>
                        <div className='flex justify-around mb-8'>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success text-xl"><FaGoogle/></button>
                            <button className="btn btn-outline btn-error text-xl"><FaGithub/></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
