import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    // const allTestimonials = useLoaderData();
    const [testimonials, settestimonials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/comments')
            .then(res => res.json())
            .then(data => {
                settestimonials(data);
            })
            .catch(error => console.error(error))
    }, [])



    return (

        <div>
            <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
                <h3 className="text-5xl font-bold mb-6 text-success mt-10">Testimonials</h3>
                <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                    We love our fans and crafty friends! See what some of them have to say about us! We take our work seriously and want you to be happy. We’re proud and honored to have received thousands of positive comments!
                </p>
            </div>
            <div className='grid md:grid-cols-3 gap-6 text-center'>
                {
                    testimonials.map(testimonial => <Testimonial key={testimonial._id} testimonial={testimonial}></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;