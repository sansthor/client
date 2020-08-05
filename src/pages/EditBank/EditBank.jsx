import React from 'react';

import { Link } from 'react-router-dom';

function EditBank() {
    return (
        <div>
            <div className="tabs is-centered">
                <ul>
                    <li>
                        <Link to="/profile/edit/talent">Profile</Link>
                    </li>
                    <li className="is-active">
                        <Link to="/profile/bank">Akun Bank</Link>
                    </li>
                </ul>
            </div>
            <div class="columns" style={{ minHeight: '80vh' }}>
                <div class="column"></div>
                <div class="column is-half">
                    <div className="field">
                        <label className="label">Bank Name</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Nama Bank"
                                value=""
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Account Name</label>
                        <div className="control ">
                            <input
                                className="input "
                                type="text"
                                placeholder="Nama Lengkap di Bank"
                                value=""
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Account Number</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Nomor Rekening"
                                value=""
                            />
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

export default EditBank;
