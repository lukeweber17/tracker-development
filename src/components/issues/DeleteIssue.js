import React, { useState, useRef } from 'react'
import { ToggleButton, Button, Modal, Form, ButtonGroup } from 'react-bootstrap'
import { db } from '../../firebase';


export default function DeleteIssue() {

    const handleClose = () => setShow(false);
    const summaryRef = useRef()
    const priorityRef = useRef()
    const descriptionRef = useRef()
    const projectRef = useRef()

    const [show, setShow] = useState(false);
    const [prior, setPrior] = useState();

    function handleSubmit() {
        // db.ref('/issues').push({
        //     summary: summaryRef.current.value,
        //     priority: radioValue,
        //     description: descriptionRef.current.value,
        //     project: projectRef.current.value
        // });
    }

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure you want to delete the selected issue?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="string">
                        <Form.Label>Summary</Form.Label>
                        <p>Sfljasflja</p>
                    </Form.Group>
                    <Form.Group controlId="string">
                        <Form.Label>Project</Form.Label>
                        <p>Projecttt</p>
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Delete!
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </>
    );
}
