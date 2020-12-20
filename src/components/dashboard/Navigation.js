import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import "./navigation.css"

class BootstrapNavbar extends React.Component {

    render() {
        return (
            <div class="navigation">
                <BrowserRouter>
                    <Navbar className="color-nav" variant="dark" expand="sm" sticky="top">
                        <Navbar.Brand href="/">Tracker</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Switch>
                                <Nav className="mr-auto">
                                    <Nav.Link href="/">About</Nav.Link>
                                    <Nav.Link href="/projects">Projects</Nav.Link>
                                    <Nav.Link href="/issues">Issues</Nav.Link>
                                    <Nav.Link href="/boards">Boards</Nav.Link>
                                </Nav>
                            </Switch>
                            <div class="cur-user">
                                <strong>Email:</strong> <i>luke.weber@valpo.edu</i>
                            </div>
                            
                            <Button variant="link">
                                Log Out
                            </Button>
                            
                        </Navbar.Collapse>
                    </Navbar>
                    <br />
                </BrowserRouter>
            </div>

        )
    }
}

export default BootstrapNavbar;
