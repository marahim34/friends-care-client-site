import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyCommentsCard from '../MyCommentsCard.js/MyCommentsCard';

const MyComments = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/comments?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('friends-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            }
            )
            .then(data => {
                setMyReviews(data);
            })
    }, [user?.email, logOut])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review')
        if (proceed) {
            fetch(`http://localhost:5000/comments/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('friends-care')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        toast(<div className="alert alert-success shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Your requested task has been done!</span>
                            </div>
                        </div>)
                        const remaining = myReviews.filter(smr => smr._id !== id)
                        setMyReviews(remaining);
                    }
                })
        }
    }


    return (
        <div>
            {
                myReviews.length === 0 ?
                    <p className='text-5xl font-semibold mt-10 mb-10 text-center'>No reviews were added</p> :
                    <>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>
                                            <label>

                                            </label>
                                        </th>
                                        <th>Name and Email Address</th>
                                        <th>Service Name and Comments</th>
                                        <th>Want to Update?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myReviews.map(myReview => <MyCommentsCard key={myReview._id} myReview={myReview} handleDelete={handleDelete}></MyCommentsCard>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
            }
        </div>
    );
};

export default MyComments;