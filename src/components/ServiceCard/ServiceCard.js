import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, picture, serviceName, price, rating, about } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={picture}>
                    <img src={picture} className='h-44 w-full' alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title h-12 items-start">{serviceName}</h2>
                <p className='h-16'>{about.slice(0, 100)}... <Link to='/service/:id' className="link link-primary">Read More</Link> </p>
                <div className='flex justify-between'>
                    <div>
                        <p>Pricing: <small>€</small> <strong>{price}</strong> <small>/hr</small> </p>
                    </div>
                    <div className='rating items-center'>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <p>{rating}</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-success"> <Link to={`/services/${_id}`}>Details</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;