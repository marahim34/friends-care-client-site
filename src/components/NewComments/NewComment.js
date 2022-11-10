import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
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
            fetch('http://localhost:5000/comments', {
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
        <form onSubmit={handleComments}>
            <h2 className="text-4xl"></h2>
            <h4 className="text-3xl">Add your comments here</h4>
            <div className='grid grid-cols-1 md:w-1/2 gap-4'>
                <input name="name" type="text" placeholder="First Name" className="input input-ghost w-full input-bordered" />
                <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email ? user?.email : ''} className="input input-bordered input-ghost w-full" />
                <textarea name="message" className='bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' placeholder='Type your comments here' id="" cols="30" rows="10"></textarea>
                <br />
                <input name="" className='btn btn-success' type="submit" value="Add Your Comment" />
            </div>
        </form>
    );
};

export default NewComment;