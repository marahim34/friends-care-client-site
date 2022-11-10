import React from 'react';
import CarouselItem from './CarouselItem';

const carouselItems = [
    {
        image: 'https://i.ibb.co/yhWFdbM/pexels-kampus-production-7551606.jpg',
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: 'https://i.ibb.co/nLwVCwy/pexels-andrea-piacquadio-3791664.jpg',
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: 'https://i.ibb.co/jw3RPFn/photo-1530789253388-582c481c54b0-ixlib-rb-4-0.jpg',
        prev: 2,
        id: 3,
        next: 1
    }
]

const Carousel = () => {
    return (
        <div className="carousel w-full py-10 pt-0 pb-0">
            {
                carouselItems.map(carouselItem => <CarouselItem key={carouselItem.id} carouselItem={carouselItem}></CarouselItem>)
            }
        </div>
    );
};

export default Carousel;