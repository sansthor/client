import React, { useState } from 'react';

import { Link } from 'react-router-dom';

function NavbarGuest() {
    const [isActive, setIsActive] = useState(false);

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

                    <span
                        role="button"
                        className={`navbar-burger burger ${
                            isActive ? 'is-active' : ''
                        }`}
                        aria-label="menu"
                        aria-expanded="false"
                        onClick={() => {
                            setIsActive(!isActive);
                        }}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </span>
                </div>

                <div
                    id="navbarBasicExample"
                    className={`navbar-menu ${isActive ? 'is-active' : ''}`}
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                >
                    <div className="navbar-start">
                        <Link to="/bantuan" className="navbar-item">
                            Bantuan
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link
                                    to="/login"
                                    className="button is-light is-rounded"
                                >
                                    Masuk
                                </Link>
                                <Link
                                    to="/register"
                                    className="button is-primary is-rounded"
                                >
                                    <strong>Gabung Disini!</strong>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarGuest;
