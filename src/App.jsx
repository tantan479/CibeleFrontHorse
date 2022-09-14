import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/pages/Login'
import Menu from './components/layout/Menu'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
