import React from 'react'
import { Card } from 'react-bootstrap'
import "./currentissue.css"

export default function CurrentIssue() {
    return (
        <div>
            <Card>
                <Card.Header>Selected Issue</Card.Header>
                <Card.Body>
                    <Card.Title>Description</Card.Title>
                    <Card.Text>
                        Description... asdf asdf asdf asdf
                    </Card.Text>
                    <Card.Title>Summary</Card.Title>
                    <Card.Text>
                        Description... asdf asdf asdf asdf
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
    )
}
