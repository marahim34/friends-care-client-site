import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    // const {} = useLoaderData();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 items-center ml-4 gap-4'>
            {
                services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default Services;