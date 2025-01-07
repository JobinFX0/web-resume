import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='about' >
      <h2 className='about-head s-1'>About WEB-RESUME</h2>
      <br />
      <br />
      <p className='about-head-items'>WEB-RESUME is a user-friendly platform designed to help professionals create visually striking resumes effortlessly.<br/> Whether you're just starting your career or looking to make a powerful impression, <br />our service simplifies the process of building a standout resume and personal website.</p>
      <br />
      <br />
      <h2 className='about-how s-1'>HOW IT WORKS?</h2>
      <ul className='about-how-items'>
        <li><span className='about-li'>Sign Up Easily:</span> Get started quickly by signing up with Google or any other preferred method.</li>
        <li><span className='about-li'>Add Your Details:</span>Simply input your personal and professional information into the easy-to-use form. </li>
        <li><span className='about-li'>Customize Your Resume:</span>Select the sections and information you want to highlight. </li>
        <li><span className='about-li'>Instant PDF & Website:</span>Receive a polished PDF of your resume and a personalized resume website to showcase your profile online.</li>
      </ul>
      <br />
      <br />
      <h2 className='about-mission s-1'>OUR MISSION.</h2>
      <p className='about-mission-items'>At WEB-RESUME, our mission is to empower professionals across all industries to present their qualifications in the best possible way. <br /> We believe that a well-crafted resume and a personal website are essential tools in today's competitive job market. <br /> Our goal is to provide an easy and affordable solution for anyone looking to advance their career.</p>
      <br />
      <br />
      <p className='about-signup '>Stop searching for fake free resume builders <br /> sign up now and create your professional resume in minutes!</p>
      <br />
      <div className="about-btn-container">
    <button className='getStarted-btn-about'>CREATE NOW</button>
    </div>
    <br />
    <br />
    <br />
    </div>
   
    
  )
}

export default About;
