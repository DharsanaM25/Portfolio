import React from 'react';
import './Home.css'; // Make sure to update this CSS file

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="profile-picture">
          <img src="Profile_canva.jpg" alt="Profile" />
        </div>
        <div className="content">
          <h1 className="slide-in">Hello Everyone...! <br /> I am Dharsana</h1>
          <p className="slide-in"> <span className="typewriter">Frontend Developer..!</span> </p>
          <button className="home-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
