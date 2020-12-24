import React from 'react'
import { Card, Col, Row } from "react-bootstrap"
import "../../styles/issues/issuestable.css"
import { db } from '../../firebase'
import BootstrapTable, { TableHeaderColumn } from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class IssuesTable extends React.Component {
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
        db.ref("issues").on("value", snapshot => {
            let issueslist = [];
            snapshot.forEach(snap => {
                // snap.val() is the dictionary with all your keys/values from the 'issueslist' path
                issueslist.push(snap.val());
            });
            this.setState({ issueslist: issueslist });
        });
    }

    render() {
        const columns = [{
            dataField: 'summary',
            text: 'Summary'
        }, {
            dataField: 'priority',
            text: 'Priority'
        }, {
            dataField: 'description',
            text: 'Description'
        }, {
            dataField: 'project',
            text: 'Project'
        }];

        const rowStyle = (row, rowIndex) => {
            return {
                backgroundColor: 'white',
                fontSize: '14px'
            };
        };

        const rowEvents = {
            onClick: (e, row) => {
                this.setState({ currSummary: row.summary });
                this.setState({ currPriority: row.priority });
                this.setState({ currDescription: row.description });
                this.setState({ currProject: row.project });
            }
        };

        return (
            <Row>
                <Col xs={6}>
                    <BootstrapTable
                        keyField='id'
                        data={this.state.issueslist}
                        columns={columns}
                        rowStyle={rowStyle}
                        rowEvents={rowEvents}
                        
                    // bordered
                    // striped
                    />
                </Col>
                <br />
                <Col xs={6}>
                    <Card>
                        <Card.Header>Selected Issue</Card.Header>
                        <Card.Body>
                            <Card.Title>Description</Card.Title>
                            <Card.Text>
                                {this.state.currDescription}
                            </Card.Text>
                            <br/>
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
                            <br/>
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