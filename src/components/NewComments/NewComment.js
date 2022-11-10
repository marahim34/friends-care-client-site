import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const NewComment = () => {
    const serviceName = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleComments = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const comment = {
            serviceName,
            photo: user?.photoURL,
            name,
            email,
            message
        }

        if (!user) {
            navigate('/login')
            alert('Please login to add a review.')
            return
        }

        else {
            fetch('https://friends-care-server-marahim34.vercel.app/comments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(comment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        form.reset('');
                        navigate('/services')
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
    }

    return (

        <div>
            <div>
                <h2 className="text-5xl text-success font-bold text-center mt-3 mb-10">Share Your Experience With Us</h2>

            </div>
            <div className='bg-yellow-500 rounded justify-center'>
                <div>
                    <h4 className="text-5xl">Add your comments here</h4>
                </div>
                <form className='justify-center' onSubmit={handleComments}>

                    <div>
                        <input name="name" type="text" placeholder="First Name" className="input input-ghost w-3/5 input-bordered" />
                        <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email ? user?.email : ''} className="input input-bordered input-ghost w-3/5 w-full" />
                        <textarea name="message" className='bg-gray-100 rounded border border-gray-400 w-3/5 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' placeholder='Type your comments here' id="" cols="30" rows="10"></textarea>
                        <br />
                        <input name="" className='btn btn-success' type="submit" value="Add Your Comment" />
                    </div>
                </form >
            </div>
        </div>
    );
};

export default NewComment;