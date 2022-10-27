import React from 'react';

const Blog = () => {
    return (
        <section className='m-4 text-zinc-100'>
            <div className="card lg:card-side bg-slate-600 shadow-xl mb-4">
                <div className="card-body col-span-2">
                    <h2 className="card-title">What is cors?</h2>
                    <p><span className='text-xl'>Ans:</span> Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
                </div>
            </div>
            <div className="card lg:card-side bg-slate-600 shadow-xl mb-4">
                <div className="card-body col-span-2">
                    <h2 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p><span className='text-xl'>Ans:</span> Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-slate-600 shadow-xl mb-4">
                <div className="card-body col-span-2">
                    <h2 className="card-title">How does the private route work?</h2>
                    <p><span className='text-xl'>Ans:</span> Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-slate-600 shadow-xl">
                <div className="card-body col-span-2">
                    <h2 className="card-title">What is Node? How does Node work?</h2>
                    <p><span className='text-xl'>Ans:</span> Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>
            </div>
        </section>
    );
};

export default Blog;