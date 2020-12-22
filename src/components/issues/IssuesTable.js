import React from 'react'
import { Table } from 'react-bootstrap'
import "./issuestable.css"
import { db } from '../../firebase'

export default function IssuesTable() {
    return (
        <div>
            <Table style={{ maxHeight: "450px" }} striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Descprition</th>
                        <th>Project</th>
                        <th>Priority</th>
                        <th>Date</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>This is my project Description</td>
                        <td>Project Title</td>
                        <td>Fire</td>
                        <td>12/21/2020</td>
                    </tr>
                    <tr>
                        <td>This is my project Description</td>
                        <td>Project Title</td>
                        <td>Fire</td>
                        <td>12/21/2020</td>
                    </tr>
                    <tr>
                        <td>This is my project Description</td>
                        <td>Project Title</td>
                        <td>Fire</td>
                        <td>12/21/2020</td>
                    </tr>
                    <tr>
                        <td>This is my project Description</td>
                        <td>Project Title</td>
                        <td>Fire</td>
                        <td>12/21/2020</td>
                    </tr>
                    <tr>
                        <td>This is my project Description</td>
                        <td>Project Title</td>
                        <td>Fire</td>
                        <td>12/21/2020</td>
                    </tr>
                    <tr>
                        <td>This is my project Description</td>
                        <td>Project Title</td>
                        <td>Fire</td>
                        <td>12/21/2020</td>
                    </tr>
                    <tr>
                        <td>This is my project Description</td>
                        <td>Project Title</td>
                        <td>Fire</td>
                        <td>12/21/2020</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

