import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetMember, registerTalent } from '../../redux/actions';
import { useHistory } from 'react-router-dom';

import '../../assets/css/Login.css';

function RegisTalent() {
    const dispatch = useDispatch();
    const history = useHistory();
    const member = useSelector((state) => state.getmember);
    const [updated, setupdated] = useState({
        fullname: member.fullname,
        username: member.username,
        email: member.email,
        password: member.password,
        address: member.address,
        skills: '',
        link: '',
        phone: '',
    });

    const handleChange = (event) => {
        setupdated({ ...updated, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await dispatch(registerTalent(updated, history));
    };
    useEffect(() => {
        dispatch(fetchGetMember());
    }, [dispatch]);
    return (
        <div className="body">
            <section className="hero is-success is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <p className="subtitle has-text-black">
                                Talent Registration
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
                                                placeholder="Full Name"
                                                autoFocus=""
                                                name="fullname"
                                                value={updated.fullname}
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
                                                autoFocus=""
                                                name="username"
                                                value={updated.username}
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
                                                name="email"
                                                value={updated.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label
                                            className="label"
                                            style={{ textAlign: 'start' }}
                                        >
                                            Address
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Address"
                                                autoFocus=""
                                                name="address"
                                                value={updated.address}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label
                                            className="label"
                                            style={{ textAlign: 'start' }}
                                        >
                                            Skills
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Contoh: HTML, CSS, JS"
                                                name="skills"
                                                value={updated.skills}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label
                                            className="label"
                                            style={{ textAlign: 'start' }}
                                        >
                                            Link Portofolio
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Contoh: github.com/digitarian"
                                                name="link"
                                                value={updated.link}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label
                                            className="label"
                                            style={{ textAlign: 'start' }}
                                        >
                                            Nomor HP
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Nomor HP"
                                                name="phone"
                                                value={updated.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <button className="button is-block is-info is-fullwidth">
                                        Daftar jadi Talent!
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RegisTalent;
