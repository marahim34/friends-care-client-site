import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewComment from '../NewComments/NewComment';

const Service = () => {
    const { price, picture, serviceName, about } = useLoaderData();
    return (
        <div>
            <div className="container my-24 px-6 mx-auto">
                <section className="mb-32">
                    <div className="flex flex-wrap">
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
                            <div className="flex lg:py-12">
                                <img src={picture} className="w-full rounded-lg shadow-lg" id="cta-img-nml-50" alt="" />
                            </div>
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                            <div
                                className="bg-yellow-500 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
                                <div className="lg:pl-12">
                                    <h2 className="text-3xl font-bold mb-6">{serviceName}</h2>
                                    <p className="mb-6 pb-2 lg:pb-0"> {about} </p>
                                    <div className="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
                                        <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                                                <path fill="currentColor"
                                                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                </path>
                                            </svg>
                                            Best Support
                                        </p>

                                        <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                                                <path fill="currentColor"
                                                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                </path>
                                            </svg>
                                            Highest quality
                                        </p>
                                        <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                                                <path fill="currentColor"
                                                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                </path>
                                            </svg>
                                            Greatest expertise
                                        </p>
                                    </div>

                                    <p>
                                        <strong>Service Charge:</strong> <small>€</small>  <strong>{price}</strong> <small>/hr</small>
                                    </p>
                                    <p>
                                        <strong>Service Rating:</strong>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-9" className="rating-hidden" />
                                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <NewComment></NewComment>
        </div>
    );
};

export default Service;