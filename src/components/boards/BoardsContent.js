import React from 'react'
import { Card, Col, Row } from "react-bootstrap"
import "../../styles/boards/boardscontent.css"
import { db, auth } from '../../firebase'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class BoardsContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // issueslist: [],
            // currTitle: "",

        };
    }

    render() {
        return (
            <div className="wrapper">
                <Row className="top-row">
                    <Col xs={7}>
                        <Card className="card">
                            <Card.Header style={{ backgroundColor: '#c5cbe3', color: '#212529', fontWeight: 'bold' }}>Selected Issue</Card.Header>

                            <Card.Body style={{ backgroundColor: '#f8f8f6' }}>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={5}>
                        <Card className="card">
                            <Card.Header style={{ backgroundColor: '#c5cbe3', color: '#212529', fontWeight: 'bold' }}>Selected Issue</Card.Header>

                            <Card.Body style={{ backgroundColor: '#f8f8f6' }}>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="bottom-row">
                    <Col xs={5}>
                        <Card className="card">
                            <Card.Header style={{ backgroundColor: '#c5cbe3', color: '#212529', fontWeight: 'bold' }}>Selected Issue</Card.Header>

                            <Card.Body style={{ backgroundColor: '#f8f8f6' }}>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={7}>
                        <Card className="card">
                            <Card.Header style={{ backgroundColor: '#c5cbe3', color: '#212529', fontWeight: 'bold' }}>Selected Issue</Card.Header>

                            <Card.Body style={{ backgroundColor: '#f8f8f6' }}>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
