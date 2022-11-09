import React from 'react';
import { Helmet } from 'react-helmet';
import Carousel from '../Carousel/Carousel'
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Friend's Care :: Home</title>
            </Helmet>
            <Carousel></Carousel>
            <Services></Services>
        </div>
    );
};

export default Home;