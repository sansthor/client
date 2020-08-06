import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetMember, editprofile } from '../../redux/actions';
import { Link } from 'react-router-dom';

function EditProfile() {
    const dispatch = useDispatch();
    const member = useSelector((state) => state.getmember);
    const [updated, setupdated] = useState({
        fullname: member.fullname,
        username: member.username,
        email: member.email,
        password: member.password,
        address: member.address,
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
                </ul>
            </div>
            <div className="columns" style={{ minHeight: '80vh' }}>
                <div className="column"></div>
                <div className="column is-half">
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="New Username"
                                    name="fullname"
                                    value={updated.fullname}
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

                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link">
                                    Simpan Perubahan
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="column"></div>
            </div>
        </div>
    );
}

export default EditProfile;
