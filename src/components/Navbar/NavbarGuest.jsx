import React from 'react';

import { Link } from 'react-router-dom';

function NavbarGuest() {
    let url = '';
    return (
        <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <Link class="navbar-item" to="/">
                        <img
                            src="https://img.vim-cn.com/6a/ed728d1db5126a936b5e1237e9e3aa58dd3100.png"
                            width="112"
                            height="28"
                            alt="brand"
                        ></img>
                    </Link>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <Link to={url} class="navbar-item">
                            Bantuan
                        </Link>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <Link
                                    to="/login"
                                    class="button is-light is-rounded"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    class="button is-primary is-rounded"
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
