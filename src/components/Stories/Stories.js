import React from 'react';

const Stories = () => {
    return (
        <div>
            <h1 className='text-5xl text-success font-bold text-center mt-10 mb-10'>Our Stories</h1>
            <div className='block ml-5 mr-5 md:ml-2 md:mr-2 mt-5 md:flex justify-center gap-3'>
                <div className='mt-8'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qOp4Y2_g5ZI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='mt-8'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_s20iNLTRwo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Stories;