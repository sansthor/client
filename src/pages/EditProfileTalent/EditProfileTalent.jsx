import React from 'react';

import { Link } from 'react-router-dom';

function EditProfileTalent() {
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
            <div class="columns" style={{ minHeight: '120vh' }}>
                <div class="column"></div>
                <div class="column is-half">
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

                    <div className="field">
                        <label className="label">Phone Number</label>
                        <div className="control has-icons-left">
                            <input
                                className="input "
                                type="text"
                                placeholder="New Phone Number"
                                value=""
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
                                value=""
                            />
                            <span className="icon is-small is-left">
                                <i class="fas fa-tools"></i>
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
                                value=""
                            />
                            <span className="icon is-small is-left">
                                <i class="fas fa-scroll"></i>
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
                <div class="column"></div>
            </div>
        </div>
    );
}

export default EditProfileTalent;
