// Navigation bar for the web application.
/*
    Attributes:
    - Contains basic navigation bar: Done
    - Contains support to mobile devices: Done
    - Uses this.state.currentMenuItem to get active link (later be used to get jumbotron image) TODO://

    constants can be declared in react using const
 */
import React, { Component } from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import "../../css/custom-navbar.css";

const menuItems = [
    'notes',
    'projects',
    'tutoring',
    'single_page_elements'
];


class Header extends React.Component {


    render() {
        return (
            <div>
                <Navbar className="navbar-blur" collapseOnSelect expand="lg"  bg="light" variant="light" fixed = "top" >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div>
                            <Navbar.Brand href="./">Elijah Ahmad</Navbar.Brand>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        </button>
                        <Nav className="nav-fill w-100">
                            <NavItem className="w-25">
                                <Nav.Link href="./notes">Notes</Nav.Link>
                            </NavItem>
                            <NavItem  className="w-25">
                                <Nav.Link href="./projects">Projects</Nav.Link>
                            </NavItem>
                            <NavItem className="w-25">
                                <Nav.Link href="./tutoring">Tutoring </Nav.Link>
                            </NavItem>
                            <NavItem className="w-25">
                                <Nav.Link href="./contact">Contact</Nav.Link>
                             </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </div>
        );
    }
}

export default Header;