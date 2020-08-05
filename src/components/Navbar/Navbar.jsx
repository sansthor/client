import React from 'react';

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

                        {/* <div className="navbar-item has-dropdown is-hoverable">
                    <a href={url} className="navbar-link">
                      More
                    </a>

                    <div className="navbar-dropdown">
                      <a href={url} className="navbar-item">
                        About
                      </a>
                      <a href={url} className="navbar-item">
                        Jobs
                      </a>
                      <a href={url} className="navbar-item">
                        Contact
                      </a>
                      <hr className="navbar-divider" />
                      <a href={url} className="navbar-item">
                        Report an issue
                      </a>
                    </div>
                  </div> */}
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a
                                    href="/register"
                                    className="button is-primary is-rounded"
                                >
                                    <strong>Gabung Disini!</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
