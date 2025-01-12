import React from 'react'
import './navBar.css'
import { useAuth0 } from "@auth0/auth0-react";

import {Link} from 'react-router-dom';


const Navbar = () => {
  const {loginWithRedirect,isAuthenticated,logout}= useAuth0();

  const login=()=>{
    loginWithRedirect();
   }
   const logoutt=()=>{
    logout({ logoutParams: { returnTo: window.location.origin } })} 
   
  return (
   <nav className="Navbar">
    <ul className='nav-links'>
      <li className='hover-nav'> <Link to="/">Home</Link> </li>
      <li className='hover-nav'> <Link to="/about">About</Link></li>
      <li className='hover-nav'><Link to="/contact">Contact Us</Link></li>
   

     {
      isAuthenticated?(<li className='hover-nav'onClick={logoutt}>Log out</li>):(<li className='hover-nav' onClick={login}>Log in</li>)
     }
   
      
    </ul>
   </nav>
 )

}
export default Navbar


