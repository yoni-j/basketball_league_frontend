import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Player, Players, ScoreBoard, Login, Home } from './pages'
import { useAuth } from './hooks'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


import './App.css'

function App() {
  const { logout, isAuth, authUser } = useAuth()
  const handleLogut = () => {
    logout()
    window.location.href = "/login"
  }

  return (
    <Router>
      <main>
        <div class="container">
          <div class="row">
          {isAuth && 
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="#home"><h1>Hi {authUser.username}</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navgbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link onClick={handleLogut}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
          }
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/players" element={<Players />} />
              <Route path="/player/:playerId" element={<Player />} />
              <Route path="/scoreboard/:leagueId" element={<ScoreBoard />} />
            </Routes>
          </div>
        </div>
      </main>
    </Router>
    
  )
}

export default App