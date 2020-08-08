import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';
function DropdownTalent() {
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <React.Fragment>
            <div className="navbar-dropdown">
                <Link to="/profile" className="navbar-item">
                    Feed
                </Link>
                <Link to="/profile/edit/talent" className="navbar-item">
                    Ubah Profile
                </Link>
                <Link to="/history" className="navbar-item">
                    Pesanan Saya
                </Link>
                <Link to="/dashboard" className="navbar-item">
                    <strong>Halaman Talent</strong>
                </Link>

                <hr className="navbar-divider" />
                <span
                    onClick={() => dispatch(logout(history))}
                    className="navbar-item"
                    style={{ cursor: 'pointer' }}
                >
                    <i className="fa fa-sign-out-alt" aria-hidden="true"></i>
                    &nbsp;&nbsp;Keluar
                </span>
            </div>
        </React.Fragment>
    );
}

export default DropdownTalent;
