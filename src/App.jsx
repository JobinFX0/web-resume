import { useState } from 'react'
import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css'
import Navbar from './components/navBar/navBar'
import Home from './components/pages/home'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Log from './components/pages/log'

function App() {


  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/log" element={<Log/>} />
      </Routes>
      </Router>

      
    </>
  )
}




export default App
