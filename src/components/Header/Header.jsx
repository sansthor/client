import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
} from "reactstrap";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/">FindThes</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink style={{ color: "black" }} href="/">
                                Help
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <p style={{ margin: "5px 10px 5px 0", cursor: "pointer" }}>
                        Login
                    </p>

                    <Button color="danger">Become Talent</Button>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
