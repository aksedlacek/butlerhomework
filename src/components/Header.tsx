import * as React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <Navbar>
            <Navbar>
                <Navbar.Brand>
                    <Link to="/">jtlisabitch</Link>
                </Navbar.Brand>
            </Navbar>
            <Nav>
                <IndexLinkContainer to="/stick">
                    <NavItem>Page 1</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer to="/rock">
                    <NavItem>Page 2</NavItem>
                </IndexLinkContainer>
            </Nav>
        </Navbar>
    );
}