import React, { useState } from 'react'
import CreateIssue from "./CreateIssue"
import DeleteIssue from "./DeleteIssue"
import "../../styles/issues/issuesidebar.css"
import { Link } from "react-router-dom"
import { Modal } from "react-bootstrap"

export default function IssueSidebar() {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);

    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);

    return (
        <div className="sidebar">
            <Modal show={show} onHide={handleClose}>
                <CreateIssue />
            </Modal>
            <Modal show={show2} onHide={handleClose2}>
                <DeleteIssue />
            </Modal>
            <ul className="list-group">
                <li className="list-group-item"><Link onClick={handleShow}>Create Issue</Link></li>         
                <li className="list-group-item"><Link onClick={handleShow2}>Delete Issue</Link></li>         
            </ul>
        </div>
    )
}
