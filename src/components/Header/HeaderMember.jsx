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
const HeaderMember = (props) => {
    const dispatch = useDispatch();
    const member = useSelector((state) => state.getmember);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        dispatch(fetchGetMember());
    }, []);

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
                        <p>{member.fullname}</p>
                        <Dropdown role={member.role} />
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderMember;
