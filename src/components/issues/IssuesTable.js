import React, { useState, useRef } from 'react'
import "./issuestable.css"
import { db } from '../../firebase'
import overlayFactory from 'react-bootstrap-table2-overlay'
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom'


export default class IssuesTable extends React.Component {
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

        return (
            <div>
                <BootstrapTable 
                    
                    rowStyle={{ 
                        backgroundColor: 'white',
                    }} 
                    keyField='id' 
                    data={this.state.issueslist} 
                    columns={columns} 
                />
            </div >
        );
    }
}