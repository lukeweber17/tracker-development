import React, { useState } from 'react'
import CreateProject from "./CreateProject"
import DeleteProject from "./DeleteProject"
import "../../styles/issues/issuesidebar.css"
import { Link } from "react-router-dom"
import { Modal } from "react-bootstrap"

export default function ProjectSidebar() {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);

    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);

    return (
        <div class="sidebar">
            <Modal show={show} onHide={handleClose}>
                <CreateProject />
            </Modal>
            <Modal show={show2} onHide={handleClose2}>
                <DeleteProject />
            </Modal>
            <ul className="list-group">
                <li class="list-group-item"><Link onClick={handleShow}>Create Project</Link></li>         
                <li class="list-group-item"><Link onClick={handleShow2}>Delete Project</Link></li>         
            </ul>
        </div>
    )
}
