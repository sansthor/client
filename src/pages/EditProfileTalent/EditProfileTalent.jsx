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
        username: member.username || '',
        email: member.email || '',
        password: '',
        address: member.address || '',
        skills: member.skills || '',
        link: member.link || '',
        phone: member.phone || '',
    });

    const handleChange = (event) => {
        setupdated({ ...updated, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(editprofile(updated));
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
                            <label className="label">Nama Pengguna</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Nama Pengguna Baru"
                                    name="username"
                                    id="username"
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
                                    placeholder="Email Baru"
                                    name="email"
                                    id="email"
                                    value={updated.email}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Kata Sandi</label>
                            <div className="control has-icons-left ">
                                <input
                                    className="input"
                                    type="password"
                                    placeholder="Kata Sandi Baru"
                                    name="password"
                                    id="password"
                                    value={updated.password}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-key"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Alamat</label>
                            <div className="control has-icons-left ">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Alamat Baru"
                                    name="address"
                                    id="address"
                                    value={updated.address}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-map-marker-alt"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Nomor HP</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input "
                                    type="text"
                                    placeholder="Nomor HP"
                                    name="phone"
                                    id="phone"
                                    value={updated.phone}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-phone-square-alt"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Daftar Keahlian</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Pisahkan dengan koma, contoh: HTML, CSS, JS"
                                    name="skills"
                                    id="skills"
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
                                    id="link"
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
