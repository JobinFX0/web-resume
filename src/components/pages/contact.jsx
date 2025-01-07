import React from 'react'
// import {FontAwesomeIcon} from 'fontawesome/react-fontawesome'
// import {faCopy} from 'fontawesome/free-solid-svg-icons'
import './contact.css'

const Contact = () => {

const handleCopy=()=>{
  // a btn to copy email easily 
  const email = 'webresumeindia@gmail.com';
  navigator.clipboard.writeText(email);
  alert('MAIL COPIED')
}

  return (
    <div className='contact'>
      <h2 className='contact-items  h2'>GOT A MINUTE?</h2>
      <h2 className='contact-items h2'>FEEL FREE TO CONTACT US</h2>
      <div className='btn-container'>
      <p className='contact-items p'>mail us at: webresumeindia@gmail.com</p>
      <button onClick={handleCopy} className='copy-btn hover'>COPY
      </button>
      </div>
    </div>
  )
}

export default Contact
// CONTACT US