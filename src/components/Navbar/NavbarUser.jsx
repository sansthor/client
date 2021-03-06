import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import PersonIcon from '@material-ui/icons/Person';

function NavbarUser(props) {
    const [isActive, setIsActive] = useState(false);
    const transaction = useSelector(
        (state) => state.transaction.transactionCartByID
    );
    const [totalCart, settotalCart] = useState(0);
    useEffect(() => {
        settotalCart(transaction.length);
    }, [transaction]);
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
                        data-target="navbarBasicExample"
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
                        <div className="buttons">
                            <Link to="/catalog" className="button is-light">
                                <i
                                    className="fas fa-search"
                                    aria-hidden="true"
                                ></i>
                            </Link>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link
                                    to={`/payment/${props.id}`}
                                    className="button is-light"
                                >
                                    <div>
                                        <i className="fas fa-shopping-cart"></i>
                                    </div>
                                    <div
                                        style={{
                                            fontWeight: 'bolder',
                                            height: '20px',
                                            width: '20px',
                                            backgroundColor: '#7fdbda',
                                            color: '#002858',
                                            borderRadius: '50%',
                                            fontSize: '12px',
                                            padding: '2px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {transaction.length === undefined
                                            ? 0
                                            : totalCart}
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div
                            className={`navbar-item has-dropdown ${
                                isActive ? 'is-hoverable' : ''
                            }`}
                            onClick={() => {
                                setIsActive(!isActive);
                            }}
                            style={{ marginRight: '5em' }}
                        >
                            <span className="navbar-link">
                                <PersonIcon />
                                &nbsp;&nbsp;
                                {props.username}
                            </span>
                            <Dropdown />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarUser;
