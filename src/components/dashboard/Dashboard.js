import React, { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory, BrowserRouter } from "react-router-dom"
import Navigation from "./Navigation"
import "./dashboard.css"
import { Button } from 'react-bootstrap'
import Sidebar from "./Sidebar"

export default function Dashboard() {
  
  return (
    <html>
    <body>
      <div class="full-page">
      
        <Navigation />  
        <Sidebar />
        
      </div>    
    </body>
    </html>
  )
}
