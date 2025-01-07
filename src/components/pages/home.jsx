import React from "react";
import Lottie from 'lottie-react';

import "./home.css";

const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="home-left">
      <h1 className="home-welcome">Welcome to WEB-RESUME,</h1>
      <br />
      <br />
      <p className="home-about">
        The free platform to create professional resumes and stunning personal
        resume websites in just minutes!
      </p>
      <br />
      <br />
      <p className="home-about home-about-two">
        Whether you're applying for your dream job or showcasing your portfolio,
        <br />
        WEB-RESUME offers sleek, customizable templates that are clean,
        impactful, and designed to make you stand out.
      </p>
      <br />
      <br />
      <p className="home-about home-about-two">In today’s competitive world, a professional resume isn’t just a document—it’s your first impression. With WEB-RESUME, ensure that impression is unforgettable. It’s quick, easy, and completely free to get started!</p>
      <br />
      <br />
      <button className="getStarted-btn-home">Try Now</button>
      </div>
      
    </div>
    </>
  );
};

export default Home;
