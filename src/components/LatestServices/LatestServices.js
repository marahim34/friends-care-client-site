import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LatestService from './LatestService';


const LatestServices = () => {
    const [latestServices, setLatestServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/latest')
            .then(res => res.json())
            .then(data => setLatestServices(data))

    }, [])

    return (
        <div className='content-center items-center justify-center align-middle'>
            <div>
                <h1 className='text-5xl font-bold text-center'>Glimpse of Services</h1>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 items-center ml-4 gap-4'>
                {
                    latestServices.map(latestService => <LatestService key={latestService._id} latestService={latestService}></LatestService>)
                }
            </div>
            <div className='flex items-center'>
                <Link to='/services'><button className='btn items-center'>See All Services</button></Link>
            </div>
        </div>
    );
};

export default LatestServices;