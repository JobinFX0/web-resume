import React from 'react'
import './navBar.css'

import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
   <nav className="Navbar">
    <ul className='nav-links'>
      <li className='hover-nav'> <Link to="/">Home</Link> </li>
      <li className='hover-nav'> <Link to="/about">About</Link></li>
      <li className='hover-nav'><Link to="/contact">Contact Us</Link></li>
      <li className='hover-nav'><Link to="/log">Log in</Link></li>
    </ul>
   </nav>
  )
}
export default Navbar


