import React, { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { NavLink, useHistory } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';

export default function DropdownMember(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const history = useHistory();

    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
    const dispatch = useDispatch();

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle
                color="link"
                style={{ color: 'black', textDecoration: 'none' }}
                caret
            >
                <PersonIcon />
                {props.username}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>General</DropdownItem>
                <NavLink to="/user/member">
                    <DropdownItem>Profile</DropdownItem>
                </NavLink>
                <NavLink to="/user/editprofile">
                    <DropdownItem>Edit Profile</DropdownItem>
                </NavLink>
                <DropdownItem divider />
                {props.role === 'TALENT' && (
                    <React.Fragment>
                        <NavLink to="/user/halamantalent">
                            <DropdownItem>Dashboard</DropdownItem>
                        </NavLink>
                    </React.Fragment>
                )}
                <DropdownItem onClick={() => dispatch(logout(history))}>
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
