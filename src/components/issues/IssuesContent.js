import React from 'react'
import { Card, Col, Row } from "react-bootstrap"
import "../../styles/issues/issuescontent.css"
import { db, auth } from '../../firebase'
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class IssuesContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            issueslist: [],
            currTitle: "",
            currSummary: "",
            currPriority: "",
            currDescription: "",
            currProject: "",
            currDate: ""
        };
    }

    componentDidMount() {
        this.getUserData()
    }

    getUserData = () => {
        const userID = auth.currentUser.uid
        db.ref('users/' + userID + '/issues').on("value", snapshot => {
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
                fontSize: '14px',
                height: '100%'
            };
        };

        const columns = [{
            dataField: 'title',
            text: 'Title',
            headerStyle: {
                backgroundColor: '#c5cbe3',
            }
        }, {
            dataField: 'project',
            text: 'Project',
            headerStyle: {
                backgroundColor: '#c5cbe3',
            }
        }, {
            dataField: 'priority',
            text: 'Priority',
            headerStyle: {
                backgroundColor: '#c5cbe3',
            }
        }];

        const rowEvents = {
            onClick: (e, row) => {
                this.setState({ currTitle: row.title });
                this.setState({ currPriority: row.priority });
                this.setState({ currDescription: row.description });
                this.setState({ currProject: row.project });
                this.setState({ currDate: row.date })
            }
        };


        return (
            <Row className="wrapper">
                <Col xs={6}>
                    <Card className="issues-list">
                        <BootstrapTable
                            keyField='id'
                            data={this.state.issueslist}
                            columns={columns}
                            rowStyle={rowStyle}
                            rowEvents={rowEvents}
                        />
                    </Card>
                </Col>
                <br />
                <Col xs={6}>
                    <Card className="current-issue-card">
                        <Card.Header style={{ backgroundColor: '#c5cbe3', color: '#212529', fontWeight: 'bold' }}>Selected Issue</Card.Header>
                        <Card.Body style={{ backgroundColor: '#f8f8f6' }}>
                            <Row>
                                <Col xs={6}>
                                    <Card.Title>Title</Card.Title>
                                    <Card.Text className="card-content">
                                        {this.state.currTitle}
                                    </Card.Text>
                                </Col>
                                <Col xs={6}>
                                    <Card.Title>Priority</Card.Title>
                                    <Card.Text className="card-content">
                                        {this.state.currPriority}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col xs={6}>
                                    <Card.Title>Project</Card.Title>
                                    <Card.Text className="card-content">
                                        {this.state.currProject}
                                    </Card.Text>
                                </Col>
                                <Col xs={6}>
                                    <Card.Title>Date Created</Card.Title>
                                    <Card.Text className="card-content">
                                        {this.state.currDate}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <br/>
                            <Card.Title>Description</Card.Title>
                            <Card.Text className="card-content">
                                {this.state.currDescription}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        );
    }
}