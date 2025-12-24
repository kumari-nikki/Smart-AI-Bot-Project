import React from 'react'
import Home from './pages/Home'
import Signup from './LoginSignup/Signup'
import Login from './LoginSignup/Login'
import Navbar from './LoginSignup/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// <Navbar/>
//<Signup/>