import React, { useState } from 'react'
import { Button, Modal, Form, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import "./createissues.css"


export default function CreateIssue() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function handlePriority(e) {
        console.log(e.target.value);

    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create New Issue
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Issue</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group controlId="string">
                            <Form.Label>Summary</Form.Label>
                            <Form.Control type="text" placeholder="Summary" />
                        </Form.Group>

                        <Form.Label>Priority</Form.Label>
                        <br />

                        <ButtonGroup className="mb-2">
                            <Button value={"fire"} style={{ backgroundColor: "#eb330e", margin: "5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)" }} onClick={handlePriority}>Fire</Button>
                            <Button value={"hot"} style={{ backgroundColor: "#e05702", margin: "5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)" }} onClick={handlePriority}>Hot</Button>
                            <Button value={"warm"} style={{ backgroundColor: "#c98b18", margin: "5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)" }} onClick={handlePriority}>Warm</Button>
                        </ButtonGroup>



                        <Form.Group controlId="string">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description" />
                        </Form.Group>

                        <DropdownButton id="dropdown-basic-button" title="Project">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>

                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Create!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
