import React from 'react'
import '../dashboard/dashboard.css'
import Navigation from '../dashboard/Navigation'
import firebase from '../../firebase';
import CreateIssue from './CreateIssue'


export default function Issues() {
    return (
        <html>
        <body>
            <div class="full-page">
                <Navigation />
                <CreateIssue />
            </div>
        </body>
        </html>
        
    )
}


