import React, { useState, useRef } from 'react'
import { ToggleButton, Button, Modal, Form, ButtonGroup, Row, Col } from 'react-bootstrap'
import "../../styles/issues/createissue.css"
import { db, auth } from '../../firebase';

export default function CreateIssue() {

    const descriptionRef = useRef()
    const projectRef = useRef()
    const titleRef = useRef()
    const [radioValue, setRadioValue] = React.useState("")

    const radios = [
        { name: "Fire", value: "fire" },
        { name: "Hot", value: "hot" },
        { name: "Warm", value: "warm" }
    ];

    const id = auth.currentUser.uid

    function handleSubmit() {
        const date = new Date()
        const fullDate = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
        console.log(titleRef.current.value)
        console.log(radioValue)
        console.log(fullDate)
        db.ref("users/" + id + "/boards/projects/issues").push({
            title: titleRef.current.value,
            priority: radioValue,
            description: descriptionRef.current.value,
            project: projectRef.current.value,
            date: fullDate
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
                        <Form.Label>Title</Form.Label>
                        <Form.Control ref={titleRef} type="text" placeholder="Title" />
                    </Form.Group>


                    <Row>
                        <Col xs={6}>
                            {/* <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group> */}
                            <Form.Group controlId="string">
                                <Form.Label>Project</Form.Label>
                                <Form.Control ref={projectRef} type="text" placeholder="Project" />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
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
                        </Col>
                    </Row>



                    <Form.Group controlId="string">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" ref={descriptionRef} type="text" placeholder="Description" />
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