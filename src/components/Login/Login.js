import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { logIn, setLoading, googleSignIn } = useContext(AuthContext);
    const [user, setUser] = useState();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user);
                form.reset();
                setError('');

                const currentUser = {
                    email: user.email
                }

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('friends-token', data.token)
                    })

                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error()
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }

    return (
        <div>
            <Helmet>
                <title>Friend's Care :: Login</title>
            </Helmet>
            <form onSubmit={handleLogIn} className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Login with your credentials and let me know your required services.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success">Login</button>
                            </div>
                            <hr />
                            <div className='items-center text-center'>
                                <p>Social Login</p>
                                <button onClick={handleGoogleSignIn} className='btn'>Google</button>
                            </div>
                            <p>{error.slice(10, 40)}</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;