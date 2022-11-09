import React from 'react';
import NewComment from '../components/NewComments/NewComment';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';

const ServicesAndREviews = () => {
    return (
        <div>
            <Services></Services>
            <Testimonials></Testimonials>
            <NewComment></NewComment>
        </div>
    );
};

export default ServicesAndREviews;