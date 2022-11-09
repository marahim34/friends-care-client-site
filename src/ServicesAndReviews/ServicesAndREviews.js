import React from 'react';
import { Helmet } from 'react-helmet';
import NewComment from '../components/NewComments/NewComment';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';

const ServicesAndREviews = () => {
    return (
        <div>
            <Helmet>
                <title>Friend's Care :: Services and Reviews</title>
            </Helmet>
            <Services></Services>
            <Testimonials></Testimonials>
            <NewComment></NewComment>
        </div>
    );
};

export default ServicesAndREviews;