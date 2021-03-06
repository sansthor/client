import React, { useState } from 'react';
import '../../assets/css/Login.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/actions';
import { Link } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(userLogin(form, history));
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
                            <p className="subtitle has-text-black">Masuk</p>
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
                                            Email
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="email"
                                                placeholder="Email"
                                                autoFocus=""
                                                id="email"
                                                name="email"
                                                onChange={handleChange}
                                                value={form.email}
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
                                                onChange={handleChange}
                                                value={form.password}
                                            />
                                        </div>
                                    </div>
                                    <button className="button is-block is-info is-fullwidth">
                                        Masuk{' '}
                                        <i
                                            className="fa fa-sign-in"
                                            aria-hidden="true"
                                        ></i>
                                    </button>
                                    <br />
                                    <div className="field">
                                        <p className="has-text-grey">
                                            <label>
                                                Belum Daftar?{' '}
                                                <Link to="/register">
                                                    Buat Akun
                                                </Link>
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

export default Login;
