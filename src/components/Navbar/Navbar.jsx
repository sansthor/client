import React from 'react';

import { Link } from 'react-router-dom';
function Navbar() {
    let url = '';
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img
                            src="https://img.vim-cn.com/6a/ed728d1db5126a936b5e1237e9e3aa58dd3100.png"
                            width="112"
                            height="28"
                            alt="brand"
                        ></img>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href={url} className="navbar-item">
                            Bantuan
                        </a>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <Link
                                    to="/login"
                                    class="button is-light is-rounded"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/register"
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

export default Navbar;
