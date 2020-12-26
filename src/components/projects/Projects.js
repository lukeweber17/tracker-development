import React from 'react'
import '../../styles/dashboard/dashboard.css'
import '../../styles/projects/projects.css'
import Navigation from '../dashboard/Navigation'
import ProjectsContent from './ProjectsContent'
import ProjectSidebar from './ProjectSidebar'
import { Container, Col, Row } from 'react-bootstrap'

export default function Projects() {
    return (
        <html>
            <body>
                <div class="full-page">
                    <Navigation />
                    <Container fluid className="full-container">
                        <Row>
                            <Col xs={2}><ProjectSidebar /></Col>
                            <Col xs={10}><ProjectsContent /></Col>
                        </Row>
                    </Container>

                </div>
            </body>
        </html>
    )
}
