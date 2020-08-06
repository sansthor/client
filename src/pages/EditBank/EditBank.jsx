import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editbank } from '../../redux/actions';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const Form = Styled.form`
@media (max-width: 1000px) {
padding: 30px;
}
`;
function EditBank() {
    const dispatch = useDispatch();
    const [updated, setupdated] = useState({
        bankname: '',
        bankaccnumber: '',
        bankaccname: '',
    });

    const handleChange = (event) => {
        setupdated({ ...updated, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await dispatch(editbank(updated));
    };

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
            <Form onSubmit={handleSubmit}>
                <div className="columns" style={{ minHeight: '80vh' }}>
                    <div className="column"></div>
                    <div className="column is-half">
                        <div className="field">
                            <label className="label">Bank Name</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Nama Bank"
                                    name="bankname"
                                    value={updated.bankname}
                                    onChange={handleChange}
                                    required
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
                                    name="bankaccname"
                                    value={updated.bankaccname}
                                    onChange={handleChange}
                                    required
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
                                    name="bankaccnumber"
                                    value={updated.bankaccnumber}
                                    onChange={handleChange}
                                    required
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
                    <div className="column"></div>
                </div>
            </Form>
        </div>
    );
}

export default EditBank;
