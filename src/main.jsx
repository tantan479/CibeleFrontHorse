import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Menu from './components/layout/Menu'
import './index.css'
import Login from './components/pages/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
)
