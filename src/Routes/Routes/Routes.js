import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../../components/About/About';
import Blog from '../../components/Blog/Blog';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import MyComments from '../../components/MyComments/MyComments';
import NewComment from '../../components/NewComments/NewComment';
import Register from '../../components/Register/Register';
import Service from '../../components/Service/Service';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';
import UpdateComments from '../../components/UpdateComments/UpdateComments';
import Main from '../../layout/Main';
import ServicesAndREviews from '../../ServicesAndReviews/ServicesAndREviews';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <ServicesAndREviews></ServicesAndREviews>
            },
            {
                path: '/services/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/testimonials',
                element: <Testimonials></Testimonials>
            },
            {
                path: '/comments',
                element: <PrivateRoutes><NewComment></NewComment></PrivateRoutes>
            },
            {
                path: '/my-comments',
                element: <PrivateRoutes><MyComments></MyComments></PrivateRoutes>
            },
            {
                path: '/update/:id',
                element: <UpdateComments></UpdateComments>,
                loader: ({ params }) => fetch(`http://localhost:5000/comments/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])
