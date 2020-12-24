import React, { useState, useRef } from 'react'
import { ToggleButton, Button, Modal, Form, ButtonGroup } from 'react-bootstrap'
import "./createissue.css"
import { db } from '../../firebase';


export default function CreateIssue() {

    const handleClose = () => setShow(false);
    const summaryRef = useRef()
    const priorityRef = useRef()
    const descriptionRef = useRef()
    const projectRef = useRef()

    const [checked, setChecked] = React.useState(false);
    const [radioValue, setRadioValue] = React.useState("fire");
 
    const radios = [
        { name: "Fire", value: "fire" },
        { name: "Hot", value: "hot" },
        { name: "Warm", value: "warm" }
    ];

    const [show, setShow] = useState(false);
    const [prior, setPrior] = useState();

    function handleSubmit() {
        db.ref('/issues').push({
            summary: summaryRef.current.value,
            priority: radioValue,
            description: descriptionRef.current.value,
            project: projectRef.current.value
        });
    }

    function handleChange(e) {
        setPrior(e.target.value)
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
                    <ButtonGroup toggle className="mb-2">
                        {radios.map((radio, index) => (
                            <ToggleButton
                                key={index}
                                type="radio"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={e => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
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