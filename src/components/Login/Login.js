import React, { useContext, useState } from 'react';
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
                console.log(user);
                setUser(user);
                form.reset();
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error()
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            }
            )
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }

    return (
        <form onSubmit={handleLogIn} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Login with your credentials and let me know your required services.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                            <button className="btn btn-primary">Login</button>
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
    );
};

export default Login;