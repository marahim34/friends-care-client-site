import React from 'react';
import { Link } from 'react-router-dom';

const MyCommentsCard = ({ myReview, handleDelete }) => {
    const { _id, name, email, message, photo } = myReview;

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => { handleDelete(_id) }} className='btn'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                photo ?
                                    <>
                                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                                    </> :
                                    <>
                                        <img src="https://i.ibb.co/rH3mSXF/blank-avatar.jpg" alt="" />
                                    </>
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
            </td>
            <td>{message}</td>
            <th>
                <Link to={`/update/${_id}`}><button className='btn'>Edit</button></Link>
            </th>
        </tr>
    );
};

export default MyCommentsCard;