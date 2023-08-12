import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue.jsx';
import Red from './components/Red.jsx';
import Home from './components/Home.jsx';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <h1></h1>
      <div id="navbar">
        <Link to = "/blue">blue</Link>
        <Link to = "/red">red</Link>
        <Link to = "/home">home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path = "/blue" element = {<Blue/>}/>
          <Route path = "/red" element = {<Red/>}/>
          <Route path = "/home" element = {<Home/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
