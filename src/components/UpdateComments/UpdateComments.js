import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const UpdateComments = () => {
    const updateComments = useLoaderData();
    const [comment, setComment] = useState(updateComments);

    const handleUpdate = event => {
        event.preventDefault();


        fetch(`http://localhost:5000/comments/${updateComments._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('comment updated');
                    event.target.reset();
                }
                console.log(data);
            })
    }

    const handleInputChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newComment = { ...comment };
        newComment[field] = value;
        setComment(newComment);
        // console.log(newUser);

    }

    return (
        <form onSubmit={handleUpdate} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6 ju">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Name
                    </label>
                    <input defaultValue={updateComments.name} onChange={handleInputChange} name='name' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="name" required />
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        email
                    </label>
                    <input onChange={handleInputChange} name="email" className="textarea appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" defaultValue={updateComments.email} type="text" placeholder="email" readOnly />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Your Comments
                    </label>
                    <textarea onChange={handleInputChange} defaultValue={updateComments.message} name='message' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="3" placeholder="Your message" required
                    ></textarea>
                    <p className="text-gray-600 text-xs italic">Your review matters</p>
                </div>
            </div>
            <input className='btn' type="submit" value="Submit" />

        </form>
    );
};

export default UpdateComments;