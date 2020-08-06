import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import PersonIcon from '@material-ui/icons/Person';
function NavbarUser(props) {
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
                                <PersonIcon />
                                &nbsp;&nbsp;
                                {props.username}
                            </Link>
                            <Dropdown />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarUser;
