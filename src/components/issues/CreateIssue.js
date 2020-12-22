import React, { useState } from 'react'
import { Button, Modal, Form, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import "./createissue.css"
import { db } from '../../firebase';

export default function CreateIssue() {

    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    const [descrip, setDescrip] = useState("Description")
    const [prior, setPrior] = useState("Priority")
    const [summ, setSumm] = useState("Summary")
    const [proj, setProj] = useState("Project")


    function handlePriority(e) {
        console.log(e.target.value);

    }

    function handleCreate() {
        db.ref('/issues').push({
            description: descrip,
            summary: summ,
            priority: prior,
            project: proj,
        });
    }

    return (
        <>

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

                    <Form.Group controlId="string">
                        <Form.Label>Project</Form.Label>
                        <Form.Control type="text" placeholder="Project" />
                    </Form.Group>
                    
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleCreate}>
                            Create!
                        </Button>
                    </Modal.Footer>
                </Form>

            </Modal.Body>

        </>
    );
}
