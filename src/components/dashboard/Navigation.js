import React, { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { BrowserRouter, Switch } from "react-router-dom";
import { Navbar, Nav, Button } from 'react-bootstrap'
import "../../styles/dashboard/navigation.css"

export default function BootstrapNavbar() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
        await logout()
        history.push("/login")
        } catch {
        setError("Failed to log out")
        }
    }

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
                            <strong style={{ fontSize: "20px"}}>Current user email: </strong><i style={{ color: 'grey'}}>{currentUser.email}</i>
                        </div>

                        <Button variant="link" onClick={handleLogout}>
                            Log Out
                        </Button>

                    </Navbar.Collapse>
                </Navbar>
                <br />
            </BrowserRouter>
        </div>

    )

}
