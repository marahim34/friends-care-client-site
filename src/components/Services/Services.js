import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import Testimonials from '../Testimonials/Testimonials';

const Services = () => {
    // const {} = useLoaderData();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div >
            <div className='mt-10'>
                <h1 className='text-center text-5xl text-success font-bold'>Our All Services</h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center ml-4 gap-4'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;