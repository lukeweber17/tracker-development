import React from "react"
import Navigation from "./Navigation"
import "../../styles/dashboard/dashboard.css"
import Sidebar from "./Sidebar"
import { Row, Col, Container } from "react-bootstrap"

export default function Dashboard() {

  return (
    <html>
      <body>
        <div class="full-page">
          <Navigation />
          <Container fluid className="full-container">
            <Row>
              <Col xs={2}><Sidebar /></Col>
              <Col xs={5}>
                Yo
              </Col>
              <Col xs={5}>
                oY
              </Col>
            </Row>
          </Container>
        </div>
      </body>
    </html>
  )
}
