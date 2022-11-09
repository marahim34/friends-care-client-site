import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import MyComments from '../../components/MyComments/MyComments';
import Register from '../../components/Register/Register';
import Service from '../../components/Service/Service';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';
import UpdateComments from '../../components/UpdateComments/UpdateComments';
import Main from '../../layout/Main';
import ServicesAndREviews from '../../ServicesAndReviews/ServicesAndREviews';

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
                path: '/my-comments',
                element: <MyComments></MyComments>
            },
            {
                path: '/update/:id',
                element: <UpdateComments></UpdateComments>,
                loader: ({ params }) => fetch(`http://localhost:5000/comments/${params.id}`)
            }
        ]
    }
])
