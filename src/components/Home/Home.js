import React from 'react';
import { Helmet } from 'react-helmet';
import Carousel from '../Carousel/Carousel'
import LatestServices from '../LatestServices/LatestServices';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Friend's Care :: Home</title>
            </Helmet>
            <Carousel></Carousel>
            <LatestServices></LatestServices>
        </div>
    );
};

export default Home;