import React from 'react';
import { Helmet } from 'react-helmet';
import Carousel from '../Carousel/Carousel'
import LatestServices from '../LatestServices/LatestServices';
import StayConnected from '../StayConnected/StayConnected';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Friend's Care :: Home</title>
            </Helmet>
            <Carousel></Carousel>
            <LatestServices></LatestServices>
            <StayConnected></StayConnected>
        </div>
    );
};

export default Home;