import React from 'react';

const CarouselItem = ({ carouselItem }) => {
    const { image, prev, id, next } = carouselItem;
    return (
        <div id={`carouselItem${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt='' className="w-screen h-screen  rounded-xl" />
            </div>

            <div className="absolute flex justify-center items-center transform -translate-y-2/2 w-4/5 top-3/4">
                <button className="btn btn-warning">Get Started</button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#carouselItem${prev}`} className="btn btn-circle">❮</a>
                <a href={`#carouselItem${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default CarouselItem;