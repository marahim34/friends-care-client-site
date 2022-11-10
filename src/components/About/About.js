import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Friend's Care :: About</title>
            </Helmet>
            <div className='mb-10'>
                <p className='text-5xl text-success font-bold text-center mt-10 mb-10'>About</p>

                <p>As a reliable partner, we offer high-quality care and healthcare services to municipalities, the public healthcare sector and private customers. ONNI has a group-wide ISO9001 quality certification that serves as proof of ONNI’s customer-oriented approach and systematic quality development.</p>
            </div>
        </div>
    );
};

export default About;