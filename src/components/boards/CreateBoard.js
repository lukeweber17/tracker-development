import React, { useState, useRef } from 'react'
import { ToggleButton, Button, Modal, Form, ButtonGroup, Row, Col } from 'react-bootstrap'
import "../../styles/issues/createissue.css"
import { db, fire, auth } from '../../firebase';

export default function CreateBoard() {

    const boardRef = useRef()
    const [proficiencyValue, setProficiencyValue] = React.useState("")
    const radios = [
        { name: "Expert", value: "expert" },
        { name: "Advanced", value: "advanced" },
        { name: "Intermediate", value: "intermediate" },
        { name: "Novice", value: "novice" }
    ];

    function handleSubmit() {
        const user = auth.currentUser
        const uid = user.uid
        const userRef = fire.doc(`users/${uid}`);

        const date = new Date()
        const fullDate = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
        console.log(boardRef.current.value)
        console.log(proficiencyValue)
        console.log(fullDate)

        

        fire.collection('users').where('userRef', '==', uid).collection('dashboards').doc(boardRef.current.value).add({
            board: boardRef.current.value,
            proficiency: proficiencyValue,
            date: fullDate
        });

        // db.ref("users/" + id + "/boards").push({
        //     board: boardRef.current.value,
        //     proficiency: proficiencyValue,
        //     date: fullDate
        // });
    }

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Create New Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="string">
                        <Form.Label>Board Title</Form.Label>
                        <Form.Control ref={boardRef} type="text" placeholder="Title" />
                    </Form.Group>
                    <Form.Label>Proficiency</Form.Label>
                    <br />
                    <ButtonGroup toggle className="mb-2">
                        {radios.map((radio, index) => (
                            <ToggleButton
                                key={index}
                                type="radio"
                                name="radio"
                                value={radio.value}
                                checked={proficiencyValue === radio.value}
                                onChange={e => setProficiencyValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Create!
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </div>
    );
}