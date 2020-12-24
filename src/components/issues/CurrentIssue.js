import React from 'react'
import { Card } from 'react-bootstrap'
import "./currentissue.css"
import { db } from "../../firebase"

export default class CurrentIssue extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            issueslist: [],
        };
    }

    componentDidMount() {
        this.getUserData()
    }


    getUserData = () => {
        db.ref("issues").on("value", snapshot => {
            let issueslist = [];
            snapshot.forEach(snap => {
                // snap.val() is the dictionary with all your keys/values from the 'students-list' path
                issueslist.push(snap.val());
            });
            this.setState({ issueslist: issueslist });
        });
    }
    
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>Selected Issue</Card.Header>
                    <Card.Body>
                        <Card.Title>Description</Card.Title>
                        <Card.Text>
                            {this.state.decription}
                        </Card.Text>
                        <Card.Title>Summary</Card.Title>
                        <Card.Text>
                            {this.state.summary}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
            </div>
        );
    }
}
