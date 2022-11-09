import React from 'react';
import { Helmet } from 'react-helmet';
import NewComment from '../components/NewComments/NewComment';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';
import PrivateRoutes from '../Routes/PrivateRoutes/PrivateRoutes';

const ServicesAndREviews = () => {
    return (
        <div>
            <Helmet>
                <title>Friend's Care :: Services and Reviews</title>
            </Helmet>
            <Services></Services>
            <Testimonials></Testimonials>
            <PrivateRoutes><NewComment></NewComment></PrivateRoutes>
        </div>
    );
};

export default ServicesAndREviews;