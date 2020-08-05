import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';
function DropdownUser() {
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <React.Fragment>
            <div className="navbar-dropdown">
                <Link to="/profile" className="navbar-item">
                    Feed
                </Link>
                <Link to="/profile/edit" className="navbar-item">
                    Edit Profile
                </Link>
                <Link to="/history" className="navbar-item">
                    Riwayat Pembelian
                </Link>

                <Link to="/register/talent" className="navbar-item">
                    <i class="fas fa-user-plus"></i>
                    &nbsp;&nbsp;
                    <strong>Daftar jadi Talent</strong>
                </Link>
                <hr className="navbar-divider" />
                <Link
                    onClick={() => dispatch(logout(history))}
                    className="navbar-item"
                >
                    <i className="fa fa-sign-out-alt" aria-hidden="true"></i>
                    &nbsp;&nbsp;Keluar
                </Link>
            </div>
        </React.Fragment>
    );
}

export default DropdownUser;
