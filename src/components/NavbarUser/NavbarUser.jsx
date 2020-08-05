import React from 'react';
import { Link } from 'react-router-dom';

function NavbarUser() {
    let url = '';
    return (
        <div>
            <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <img
                            src="https://img.vim-cn.com/6a/ed728d1db5126a936b5e1237e9e3aa58dd3100.png"
                            width="112"
                            height="28"
                            alt="brand"
                        ></img>
                    </Link>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item">Bantuan</Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link to="/catalog" className="button is-light">
                                    <i
                                        className="fas fa-search"
                                        aria-hidden="true"
                                    ></i>
                                </Link>
                            </div>
                        </div>
                        <div
                            className="navbar-item has-dropdown is-hoverable"
                            style={{ marginRight: '5em' }}
                        >
                            <Link to={url} className="navbar-link">
                                @username
                            </Link>

                            <div className="navbar-dropdown">
                                <Link to="/profile" className="navbar-item">
                                    Feed
                                </Link>
                                <Link
                                    to="/profile/edit"
                                    className="navbar-item"
                                >
                                    Edit Profile
                                </Link>
                                <Link to="/history" className="navbar-item">
                                    Riwayat Pembelian
                                </Link>
                                <Link to="/dashboard" className="navbar-item">
                                    <strong>Halaman Talent</strong>
                                </Link>
                                <Link
                                    to="/register/talent"
                                    className="navbar-item"
                                >
                                    <i className="fas fa-user-plus"></i>
                                    &nbsp;&nbsp;
                                    <strong>Daftar jadi Talent</strong>
                                </Link>
                                <hr className="navbar-divider" />
                                <Link to={url} className="navbar-item">
                                    <i
                                        className="fa fa-sign-out-alt"
                                        aria-hidden="true"
                                    ></i>
                                    &nbsp;&nbsp;Keluar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarUser;
