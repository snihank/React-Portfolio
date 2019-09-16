import React from "react";
import { Navbar, Nav } from "react-bootstrap";


function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand style={{ marginLeft: '20px' }} href="/">Shakib Karim</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto navbar-right" style={{ marginRight: '40px' }}>
                    <Nav.Link style={{ marginLeft: '20px' }} href="/">Home</Nav.Link>

                    <Nav.Link style={{ marginLeft: '20px' }} href="/resume">Resume</Nav.Link>
                    <Nav.Link style={{ marginLeft: '20px' }} href="/projects">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
