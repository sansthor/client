import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetMember, editprofile } from '../../redux/actions';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const Form = Styled.form`
@media (max-width: 1000px) {
padding: 30px;
}
`;
function EditProfileTalent() {
    const dispatch = useDispatch();
    const member = useSelector((state) => state.getmember);
    const [updated, setupdated] = useState({
        fullname: member.fullname,
        username: member.username,
        email: member.email,
        password: member.password,
        address: member.address,
        skills: member.skills,
        link: member.link,
        phone: member.phone,
    });

    const handleChange = (event) => {
        setupdated({ ...updated, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await dispatch(editprofile(updated));
    };
    useEffect(() => {
        dispatch(fetchGetMember());
    }, [dispatch]);

    return (
        <div>
            <div className="tabs is-centered">
                <ul>
                    <li className="is-active">
                        <Link to="/profile/edit">Profile</Link>
                    </li>
                    <li>
                        <Link to="/profile/bank">Akun Bank</Link>
                    </li>
                </ul>
            </div>
            <Form onSubmit={handleSubmit}>
                <div className="columns" style={{ minHeight: '120vh' }}>
                    <div className="column"></div>
                    <div className="column is-half">
                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="New Username"
                                    name="username"
                                    value={updated.username}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input "
                                    type="email"
                                    placeholder="Email input"
                                    name="email"
                                    value={updated.email}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control has-icons-left ">
                                <input
                                    className="input"
                                    type="password"
                                    placeholder="New Password"
                                    name="password"
                                    value={updated.password}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-key"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Address</label>
                            <div className="control has-icons-left ">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="New Address"
                                    name="address"
                                    value={updated.address}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i class="fas fa-map-marker-alt"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Phone Number</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input "
                                    type="text"
                                    placeholder="New Phone Number"
                                    name="phone"
                                    value={updated.phone}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-phone-square-alt"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Skills</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Pisahkan dengan koma, contoh: HTML, CSS, JS"
                                    name="skills"
                                    value={updated.skills}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-tools"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Link Portofolio</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Masukkan link. Contoh: github.com/digitarian"
                                    name="link"
                                    value={updated.link}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-scroll"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link">
                                    Simpan Perubahan
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="column"></div>
                </div>
            </Form>
        </div>
    );
}

export default EditProfileTalent;
