import React from "react"
import Signup from "./authentication/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./dashboard/Dashboard"
import Login from "./authentication/Login"
import PrivateRoute from "./authentication/PrivateRoute"
import Projects from "./projects/Projects"
import Issues from "./issues/Issues"
import Boards from "./boards/Boards"

function App() {

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    > 
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/projects" component={Projects} />
              <PrivateRoute path="/issues" component={Issues} />
              <PrivateRoute path="/boards" component={Boards} />
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />                            
              </div>
            </Switch>
          </AuthProvider>
        </Router>
    </Container>
  )
}

export default App