import React from 'react';

import { Link } from 'react-router-dom';

function EditProfile() {
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
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control has-icons-left">
                            <input
                                className="input"
                                type="text"
                                placeholder="New Username"
                                value=""
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
                                value=""
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
                                value=""
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-key"></i>
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
        </div>
    );
}

export default EditProfile;
