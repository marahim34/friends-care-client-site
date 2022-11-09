import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, setLoading, } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm);

        if (password.length < 6) {
            setError('Password length should be at least 6 characters')
            return
        }

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password should include one UPPERCASE and one SPECIAL character.')
            return;
        }

        if (password !== confirm) {
            setError('Confirm password did not match')
            return
        }

        setError('');

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setUser(user);
                form.reset();
                toast(
                    <div className="alert alert-info">
                        <div>
                            <span>User Created Successfully. Please login.<br />
                            </span>
                        </div>
                    </div>
                )
            }
            )
            .catch(error => console.error(error))
            .finally(() => {
                navigate('/login')
            }

            )



    }



    return (
        <div>
            <Helmet>
                <title>Friend's Care :: Register</title>
            </Helmet>
            <form onSubmit={handleRegister} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="text" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input name="confirm" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>
                                {error}
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;