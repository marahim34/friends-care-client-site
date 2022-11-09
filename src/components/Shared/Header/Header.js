import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItems = <>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/services'>Services</Link> </li>
        {
            user?.uid ?
                <>
                    <li> <Link to='/add-service'>Add Services</Link> </li>
                    <li> <Link to='/my-comments'>My Reviews</Link> </li>
                    <li> <Link>{user?.displayName ? user?.displayName : user?.email} </Link></li>
                    <li> <button onClick={handleLogOut}>Log out</button> </li>

                </> :
                <li> <Link to='/login'>Login</Link> </li>
        }
        <li> <Link to='/about'>About Friend's Care</Link> </li>
        <li> <Link to='/blog'>Blog</Link> </li>

    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <Link to='/'><img src={logo} alt="" width={100} className='h-4/5' /></Link>

                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className='btn' to='register'>Register Now</Link>
            </div>
        </div>
    );
};

export default Header;