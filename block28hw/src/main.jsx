import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<BrowserRouter> - gives our entire application access to the react router API */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
   
  </React.StrictMode>,
)
