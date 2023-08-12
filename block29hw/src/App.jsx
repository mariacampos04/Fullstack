import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import AllPlayers from './components/AllPlayers';
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer';



function App() {
  
  return (
    <>
      <div id="container">
        <h1></h1>
      <div id="navbar">
        <Link to = "/players">Player List</Link>
        <Link to = "/newPlayer">Add a New Player</Link>
        <Link to = "/details">Details</Link>

        
      </div>
      <div id="main-section">
        <Routes>
          <Route path = "/players" element = {<AllPlayers/>}/>
          <Route path = "/newPlayer" element = {<NewPlayerForm/>}/>
          <Route path = "/details" element = {<SinglePlayer/>}/>
          
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
