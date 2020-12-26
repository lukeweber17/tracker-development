import React from 'react'
import { Card, Col, Row } from "react-bootstrap"
import "../../styles/issues/issuescontent.css"
import { db, auth} from '../../firebase'
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class IssuesContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            issueslist: [],
            currSummary: "",
            currPriority: "",
            currDescription: "",
            currProject: ""
        };
    }
    
    componentDidMount() {
        this.getUserData()
    }

    getUserData = () => {
        const userID = auth.currentUser.uid
        db.ref('users/'+ userID +'/issues').on("value", snapshot => {
            let issueslist = [];
            snapshot.forEach(snap => {
                // snap.val() is the dictionary with all your keys/values from the 'issues' path
                issueslist.push(snap.val());
            });
            this.setState({ issueslist: issueslist });
        });
    }

    render() {
        
        const rowStyle = () => {
            return {
                backgroundColor: '#f8f8f6',
                fontSize: '14px'
            };
        };

        const columns = [{
            dataField: 'summary',
            text: 'Summary',
            headerStyle: { 
                backgroundColor: '#c5cbe3',
            }
        }, {
            dataField: 'priority',
            text: 'Priority',
            headerStyle: { 
                backgroundColor: '#c5cbe3',
            }
        }, {
            dataField: 'description',
            text: 'Description',
            headerStyle: { 
                backgroundColor: '#c5cbe3',
            }
        }, {
            dataField: 'project',
            text: 'Project',
            headerStyle: { 
                backgroundColor: '#c5cbe3',
            }
        }];


        const rowEvents = {
            onClick: (e, row) => {
                this.setState({ currSummary: row.summary });
                this.setState({ currPriority: row.priority });
                this.setState({ currDescription: row.description });
                this.setState({ currProject: row.project });
            }
        };

        return (
            <Row className="wrapper">
                <Col className="dbtable" xs={6}>
                    <BootstrapTable
                        keyField='id'
                        data={this.state.issueslist}
                        columns={columns}
                        rowStyle={rowStyle}
                        rowEvents={rowEvents}
                    />
                </Col>
                <br />
                <Col xs={6}>
                    <Card >
                        <Card.Header style={{backgroundColor: '#c5cbe3', color: '#212529'}}>Selected Issue</Card.Header>
                        <Card.Body style={{backgroundColor: '#f8f8f6'}}>
                            <Card.Title>Description</Card.Title>
                            <Card.Text>
                                {this.state.currDescription}
                            </Card.Text>
                            <br />
                            <Row>
                                <Col xs={6}>
                                    <Card.Title>Project</Card.Title>
                                    <Card.Text>
                                        {this.state.currProject}
                                    </Card.Text>
                                </Col>
                                <Col xs={6}>
                                    <Card.Title>Priority</Card.Title>
                                    <Card.Text>
                                        {this.state.currPriority}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <br />
                            <Card.Title>Summary</Card.Title>
                            <Card.Text>
                                {this.state.currSummary}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        );
    }
}