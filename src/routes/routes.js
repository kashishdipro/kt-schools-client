import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import Course from "../pages/Course/Course";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/courses/',
                element: <Courses/>
            },
            {
                path: '/course/:id',
                element: <Course/>
            },
            {
                path: '/faq',
                element: <FAQ/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])