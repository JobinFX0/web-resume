import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="home-left">
      <h1 className="home-head">Welcome to WEB-RESUME,</h1>
      <br />
      <br />
      <p className="home-about">
      <span className= "span-title" style={{color:"#5adafa"}}>WEB-RESUME's </span>
      <br />
      <br />
       striking resume template ensures your profile commands attention, while your personalized website reflects your professionalism, commitment, and readiness to embrace new opportunities
        </p>
      <button className="getStarted-btn-home">START FOR FREE!!</button>
      <br />
      <br />
      </div>
    </div>
    </>
  );
};

export default Home;
