import React, { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
export default function DropdownMember(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

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
            </DropdownMenu>
        </Dropdown>
    );
}
