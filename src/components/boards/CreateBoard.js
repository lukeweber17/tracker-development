import React, { useState, useRef } from 'react'
import { ToggleButton, Button, Modal, Form, ButtonGroup, Row, Col } from 'react-bootstrap'
import "../../styles/issues/createissue.css"
import { db, auth } from '../../firebase';

export default function CreateBoard() {

    const titleRef = useRef()
    const boardRef = useRef()

    const id = auth.currentUser.uid
   
    function handleSubmit() {
        const date = new Date()
        const fullDate = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
        const dateValue = fullDate

        db.ref("users/" + id + "/boards/projects").push({
            title: titleRef.current.value,
            board: boardRef.current.value,
            date: dateValue
        });
    }

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Create New Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="string">
                        <Form.Label>Title</Form.Label>
                        <Form.Control ref={titleRef} type="text" placeholder="Title" />
                    </Form.Group>


                    <Row>
                        <Col xs={6}>
                            <Form.Group controlId="string">
                                <Form.Label>Board</Form.Label>
                                <Form.Control ref={boardRef} type="text" placeholder="Project" />
                            </Form.Group>
                        </Col>
                    </Row>



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