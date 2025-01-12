import { useState } from 'react'
import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/navBar'
import Home from './components/pages/home'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import LoginButton from './components/pages/login'
import LogoutButton from './components/pages/logout'


function App() {


  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<LoginButton/>} />
        <Route path="/logout" element={<LogoutButton/>} />
      </Routes>
      </Router>

      
    </>
  )
}




export default App
