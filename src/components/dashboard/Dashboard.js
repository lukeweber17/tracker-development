import React from "react"
import Navigation from "./Navigation"
import "../../styles/dashboard/dashboard.css"
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
