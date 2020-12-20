import React, { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory, BrowserRouter } from "react-router-dom"
import Navigation from "./Navigation"
import "./dashboard.css"

export default function Dashboard() {
  {/*
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  */}

  return (
    <html>
    <body>
      <div class="full-page">
      
        <Navigation />  
     
        
        {/*
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
        */}
      </div>    
    </body>
    </html>
  )
}
