import React, { useState, useEffect } from 'react';
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
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { fetchGetMember } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from '../small';

const SearchWrappers = Styled.div`
display: flex;
flex direction: row;
justify-content: space-between;
`;
const HeaderMember = () => {
    const dispatch = useDispatch();
    const member = useSelector((state) => state.getmember);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        dispatch(fetchGetMember());
    }, [dispatch]);

    return (
        <div>
            <Navbar
                color="faded"
                light
                expand="md"
                style={{
                    backgroundColor: '#6f4a8e',
                    position: 'fixed',
                    zIndex: '99',
                    width: '100%',
                }}
            >
                <NavbarBrand tag={Link} to="/">
                    FindThes
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink
                                tag={Link}
                                style={{ color: 'black' }}
                                to="/"
                            >
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
                    <Dropdown role={member.role} username={member.username} />
                </Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderMember;
