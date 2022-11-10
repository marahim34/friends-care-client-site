import React from 'react';
import toast from 'react-hot-toast';

const AddNewService = () => {

    const handleNewService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const picture = form.picture.value;
        const price = form.price.value;
        const about = form.about.value;
        const rating = form.rating.value;
        console.log(serviceName, picture, price, about, rating);

        const newService = {
            picture, serviceName, price, rating, about
        }

        console.log(newService);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset('');
                    toast(
                        <div className="alert alert-success shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Your comment has been posted!</span>
                            </div>
                        </div>
                    )
                }
            })
            .catch(error => console.error(error))


    }

    return (
        <form onSubmit={handleNewService} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Do you want to offer something different?</h1>
                    <p className="py-6">We're sorry to hear that you were unable to find what you were looking for on our website. Tell us what you think, and feel free to include your offerings.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span name="serviceName" className="label-text">Service Name</span>
                            </label>
                            <input name='serviceName' type="text" placeholder="Service Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span name="picture" className="label-text">Service Photograph URL</span>
                            </label>
                            <input name='picture' type="text" placeholder="Service Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span name="price" className="label-text">Offered Price/hr</span>
                            </label>
                            <input name='price' type="text" placeholder="Your offerings" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span name="about" className="label-text">Details About the Service</span>
                            </label>
                            <textarea name="about" className='bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' placeholder='Please include service details' id="" cols="30" rows="10" required></textarea>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span name="rating" className="label-text">Rating</span>
                            </label>
                            <input name='rating' type="text" placeholder="Rating" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <input className='btn' type="submit" value="Submit" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddNewService;