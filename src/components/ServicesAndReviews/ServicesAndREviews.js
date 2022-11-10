import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import NewComment from '../NewComments/NewComment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServicesAndREviews = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Helmet>
                <title>Friend's Care :: Services and Reviews</title>
            </Helmet>
            <Services></Services>
            <Testimonials></Testimonials>
            {
                user ?
                    <div>
                        <p className='text-5xl text-center mt-8 mb-8 font-bold'>Please select a service to add your comments</p>
                    </div>
                    :
                    <NewComment></NewComment>
            }
        </div>
    );
};

export default ServicesAndREviews;