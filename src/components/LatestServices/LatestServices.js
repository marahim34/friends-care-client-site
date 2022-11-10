import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LatestService from './LatestService';


const LatestServices = () => {
    const [latestServices, setLatestServices] = useState([]);

    useEffect(() => {
        fetch('https://friends-care-server-marahim34.vercel.app/latest')
            .then(res => res.json())
            .then(data => setLatestServices(data))

    }, [])

    return (
        <div className='w-full py-10 items-center justify-center'>
            <div>
                <div className='mb-10'>
                    <h1 className='text-5xl font-bold text-center text-success'>Glimpse of Services</h1>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center ml-4 gap-4'>
                    {
                        latestServices.map(latestService => <LatestService key={latestService._id} latestService={latestService}></LatestService>)
                    }
                </div>
            </div>
            <div className='mt-10 flex justify-center sm:items-center sm:ml-4 mx-auto'>
                <Link to='/services'><button className='btn btn-success items-center'>See All Services</button></Link>
            </div>
        </div>
    );
};

export default LatestServices;