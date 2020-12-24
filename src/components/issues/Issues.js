import React from 'react'
import '../dashboard/dashboard.css'
import Navigation from '../dashboard/Navigation'
import IssueSidebar from './IssueSidebar'
import CurrentIssue from './CurrentIssue'
import IssuesTable from './IssuesTable'
import { Container, Row, Col } from 'react-bootstrap'
import "./issues.css"

export default function Issues() {
    return (
        <html>
            <body>
                <div class="full-page">
                    <Navigation />
                    <Container fluid className="full-container">
                        <Row>
                            <Col xs={2}><IssueSidebar /></Col>
                            <Col xs={5}><IssuesTable /></Col>
                            <Col xs={5}><CurrentIssue /></Col>
                        </Row>
                    </Container>

                </div>
            </body>
        </html>
    )
}