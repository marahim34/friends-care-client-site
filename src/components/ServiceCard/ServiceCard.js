import React from 'react';

const ServiceCard = ({ service }) => {
    const { _id, picture, serviceName, price, rating, about } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} className='h-44 w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title h-12 items-start">{serviceName}</h2>
                <p className='h-16'>{about.slice(0, 100)}... <a className="link link-primary">Read More</a> </p>
                <p>Pricing: <small>€</small> <strong>{price}</strong> <small>/hr</small> </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;