import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Red from './Components/Red'
import Blue from './Components/Blue'
import Home from './Components/Home'



function App() {
  
  return (
    <div id="container">
    <h1>Hello React Router!</h1>
    <div id="navbar"><Link to="/">Home</Link> </div>
    <div id="navbar"><Link to="/red">Red</Link> </div>
    <div id="navbar"><Link to="/blue">Blue</Link> </div>
    <div id="main-section">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blue" element={<h1>Blue</h1>} />
     <Route path="/red" element={<h1>Red</h1>} />
      </Routes>
    </div>
  </div>
  )
}

export default App
