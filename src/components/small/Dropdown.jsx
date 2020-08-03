import React, { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
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
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>Edit Profile</DropdownItem>
                <DropdownItem divider />
                {props.role === 'TALENT' && (
                    <React.Fragment>
                        <DropdownItem>Dashboard</DropdownItem>
                    </React.Fragment>
                )}
            </DropdownMenu>
        </Dropdown>
    );
}
