import React from 'react'
import '../../styles/dashboard/dashboard.css'
import "../../styles/issues/issues.css"
import Navigation from '../dashboard/Navigation'
import IssueSidebar from './IssueSidebar'
import IssuesTable from './IssuesTable'
import { Container, Row, Col } from 'react-bootstrap'

export default function Issues() {
    return (
        <html>
            <body>
                <div class="full-page">
                    <Navigation />
                    <Container fluid className="full-container">
                        <Row>
                            <Col xs={2}><IssueSidebar /></Col>
                            <Col xs={10}><IssuesTable /></Col>
                        </Row>
                    </Container>

                </div>
            </body>
        </html>
    )
}