import React from 'react';

function Navbar() {
    let url = '';
    return (
        <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img
                            src="https://img.vim-cn.com/6a/ed728d1db5126a936b5e1237e9e3aa58dd3100.png"
                            width="112"
                            height="28"
                            alt="brand"
                        ></img>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a href={url} class="navbar-item">
                            Bantuan
                        </a>

                        {/* <div class="navbar-item has-dropdown is-hoverable">
                    <a href={url} class="navbar-link">
                      More
                    </a>

                    <div class="navbar-dropdown">
                      <a href={url} class="navbar-item">
                        About
                      </a>
                      <a href={url} class="navbar-item">
                        Jobs
                      </a>
                      <a href={url} class="navbar-item">
                        Contact
                      </a>
                      <hr class="navbar-divider" />
                      <a href={url} class="navbar-item">
                        Report an issue
                      </a>
                    </div>
                  </div> */}
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a
                                    href="/register"
                                    class="button is-primary is-rounded"
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
