import React from "react"
import Navigation from "./Navigation"
import "../../styles/dashboard/dashboard.css"
import Sidebar from "./Sidebar"
import { Row, Col, Container } from "react-bootstrap"
import { db, auth } from "../../firebase"

export default function Dashboard() {

  // const user = auth.currentUser

  // if (user != null) {
  //   let uid = user.uid;
  //   db.ref('/users/'+uid).push({
  //      email: auth.currentUser.email
  //   });
  // }

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
