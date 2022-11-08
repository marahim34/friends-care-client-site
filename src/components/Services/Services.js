import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    // const {} = useLoaderData();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            {

            }
        </div>
    );
};

export default Services;