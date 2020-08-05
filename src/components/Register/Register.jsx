import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/registration';
import { useHistory } from 'react-router-dom';
import '../../assets/css/Login.css';

function Register() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [form, setForm] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (form.password.length < 6) {
            Swal.fire({
                title: 'Password must longer than six characters',
                text: '',
                icon: 'error',
                confirmButtonText: 'Cool',
            });
        } else {
            await dispatch(register(form, history));
            history.push('/login');
        }
    };

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    return (
        <div className="body">
            <section className="hero is-success is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <p className="subtitle has-text-black">Sign Up</p>
                            <hr className="login-hr" />
                            <div className="box">
                                <figure className="avatar">
                                    <img
                                        src="https://img.vim-cn.com/ef/26a9d5e371e8010bd4325e4298f254f87b4aa2.png"
                                        alt="brand"
                                    ></img>
                                </figure>
                                <form onSubmit={handleSubmit}>
                                    <div className="field">
                                        <label
                                            className="label"
                                            style={{ textAlign: 'start' }}
                                        >
                                            Nama Lengkap
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Full Name"
                                                autofocus=""
                                                id="fullname"
                                                name="fullname"
                                                value={form.fullname}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label
                                            className="label"
                                            style={{ textAlign: 'start' }}
                                        >
                                            Username
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Username"
                                                autofocus=""
                                                id="username"
                                                name="username"
                                                value={form.username}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label
                                            className="label"
                                            style={{ textAlign: 'start' }}
                                        >
                                            Email
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="email"
                                                placeholder="Your Email"
                                                autofocus=""
                                                id="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label
                                            className="label"
                                            style={{ textAlign: 'start' }}
                                        >
                                            Password
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="password"
                                                placeholder="Your Password"
                                                id="password"
                                                name="password"
                                                value={form.password}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <button className="button is-block is-info is-fullwidth">
                                        Daftar{' '}
                                        <i
                                            className="fa fa-sign-in"
                                            aria-hidden="true"
                                        ></i>
                                    </button>
                                    <br />
                                    <div className="field">
                                        <p className="has-text-grey">
                                            <label>
                                                Sudah punya akun?{' '}
                                                <a href="/login">Masuk</a>
                                            </label>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
