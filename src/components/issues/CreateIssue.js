import React, { useState, useRef } from 'react'
import { Button, Modal, Form, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import "./createissue.css"
import { db } from '../../firebase';


export default function CreateIssue() {

    const handleClose = () => setShow(false);
    const summaryRef = useRef()
    const priorityRef = useRef()
    const descriptionRef = useRef()
    const projectRef = useRef()

    const [show, setShow] = useState(false);

    function handleSubmit() {
        db.ref('/issues').push({
            summary: summaryRef.current.value,
            priority: priorityRef.current.value,
            description: descriptionRef.current.value,
            project: projectRef.current.value
        });
    }

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Create New Issue</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="string">
                        <Form.Label>Summary</Form.Label>
                        <Form.Control ref={summaryRef} type="text" placeholder="Summary" />
                    </Form.Group>
                    <Form.Label>Priority</Form.Label>
                    <br />
                    <ButtonGroup className="mb-2">
                        <Button ref={priorityRef} value={"fire"} style={{ backgroundColor: "#eb330e", margin: "5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)" }}>Fire</Button>
                        <Button ref={priorityRef} value={"hot"} style={{ backgroundColor: "#e05702", margin: "5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)" }}>Hot</Button>
                        <Button ref={priorityRef} value={"warm"} style={{ backgroundColor: "#c98b18", margin: "5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)" }}>Warm</Button>
                    </ButtonGroup>
                    <Form.Group controlId="string">
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descriptionRef} type="text" placeholder="Description" />
                    </Form.Group>
                    <Form.Group controlId="string">
                        <Form.Label>Project</Form.Label>
                        <Form.Control ref={projectRef} type="text" placeholder="Project" />
                    </Form.Group>

                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Create!
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </>
    );
}
