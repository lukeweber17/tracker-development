import React, { useState } from 'react'
import CreateIssue from "./CreateIssue"
import "./issuesidebar.css"
import { Link } from "react-router-dom"
import { Modal, Button } from "react-bootstrap"


export default function IssueSidebar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <CreateIssue />
                
            </Modal>


            <ul class="list-group">
                <li class="list-group-item"><Link onClick={handleShow}>Create Issue</Link></li>
                <li class="list-group-item"><Link onClick={CreateIssue}>Action</Link></li>
                <li class="list-group-item"><Link onClick={CreateIssue}>Action</Link></li>
                <li class="list-group-item"><Link onClick={CreateIssue}>Action</Link></li>
                <li class="list-group-item"><Link onClick={CreateIssue}>Action</Link></li>                
            </ul>
        </>
    )
}
