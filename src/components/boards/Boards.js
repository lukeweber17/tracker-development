import React from 'react'
import '../../styles/dashboard/dashboard.css'
import '../../styles/boards/boards.css'
import Navigation from '../dashboard/Navigation'
import BoardsContent from './BoardsContent'
import BoardSidebar from './BoardSidebar'
import { Container, Col, Row } from 'react-bootstrap'

export default function Boards() {
    return (
        <html>
            <body>
                <div class="full-page">
                    <Navigation />
                    <Container fluid className="full-container">
                        <Row>
                            <Col xs={2}><BoardSidebar /></Col>
                            <Col xs={10}><BoardsContent /></Col>
                        </Row>
                    </Container>

                </div>
            </body>
        </html>
    )
}
