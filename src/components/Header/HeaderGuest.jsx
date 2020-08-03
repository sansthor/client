import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Input,
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import Styled from 'styled-components';

const SearchWrappers = Styled.div`
display: flex;
flex direction: row;
justify-content: space-between;

`;
const HeaderGuest = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const toggle = () => setIsOpen(!isOpen);

    const handleSignUp = () => {
        history.push('/user/register');
    };
    return (
        <div>
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/">FindThes</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink style={{ color: 'black' }} href="/">
                                Help
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <SearchWrappers>
                                <Input
                                    style={{ marginRight: '1rem' }}
                                    placeholder="Search..."
                                />

                                <Button color="danger">Search</Button>
                            </SearchWrappers>
                        </NavItem>
                    </Nav>

                    <Link to="/user/login">
                        <p
                            style={{
                                margin: '5px 10px 5px 0',
                                cursor: 'pointer',
                            }}
                        >
                            Login
                        </p>
                    </Link>

                    <Button color="danger" onClick={handleSignUp}>
                        Sign Up
                    </Button>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderGuest;
