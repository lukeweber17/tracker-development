import React, { useState } from 'react'
import CreateBoard from "./CreateBoard"
import DeleteBoard from "./DeleteBoard"
import "../../styles/issues/issuesidebar.css"
import { Link } from "react-router-dom"
import { Modal } from "react-bootstrap"

export default function BoardSidebar() {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);

    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);

    return (
        <div class="sidebar">
            <Modal show={show} onHide={handleClose}>
                <CreateBoard />
            </Modal>
            <Modal show={show2} onHide={handleClose2}>
                <DeleteBoard />
            </Modal>
            <ul className="list-group">
                <li className="list-group-item"><Link onClick={handleShow}>Create Board</Link></li>         
                <li className="list-group-item"><Link onClick={handleShow2}>Delete Board</Link></li>         
            </ul>
        </div>
    )
}
