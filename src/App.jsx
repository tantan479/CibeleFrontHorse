import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/pages/Login'
import { Route, BrowserRouter } from "react-router-dom";
import Routes from './Routes'
import Dashboard from './components/pages/Dashboard'



function App(){

  return (
    <div className="App">
        <Dashboard/>
    </div>
  )
}

export default App
