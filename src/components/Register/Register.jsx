import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/registration';
import { useHistory, Link } from 'react-router-dom';
import '../../assets/css/Login.css';

function Register() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [form, setForm] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
        address: '',
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (
            form.fullname === '' ||
            form.username === '' ||
            form.email === '' ||
            form.password === '' ||
            form.address === ''
        ) {
            Swal.fire({
                title: 'Harap Selesaikan Form Registrasi',
                text: '',
                icon: 'error',
                // confirmButtonText: 'Cool',
            });
        } else {
            if (form.password.length < 6) {
                Swal.fire({
                    title: 'Password harus lebih dari 6 karakter',
                    text: '',
                    icon: 'error',
                    // confirmButtonText: 'Cool',
                });
            } else {
                await dispatch(register(form, history));
            }
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
                            <p className="subtitle has-text-black">
                                Registrasi
                            </p>
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
                                                placeholder="Nama Lengkap"
                                                autoFocus=""
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
                                            Nama Pengguna
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Username"
                                                autoFocus=""
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
                                                autoFocus=""
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
                                            Kata Sandi
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="password"
                                                placeholder="Kata Sandi"
                                                id="password"
                                                name="password"
                                                value={form.password}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label
                                            className="label"
                                            style={{ textAlign: 'start' }}
                                        >
                                            Alamat
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Alamat"
                                                id="address"
                                                name="address"
                                                value={form.address}
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
                                                <Link to="/login">Masuk</Link>
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
