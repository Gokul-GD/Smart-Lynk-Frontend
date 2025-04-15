import React from 'react';
import PageTransition from '../../components/PageTransition';
import Navbar from '../../components/Navbar';
import './HomePage.css'
import { useState, useEffect } from 'react';


function HomePage() {


    const words = ["Welcome ! to our Webpage ", "Ready ?", "Let's Go !", "Build Something !"];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <>
    
  
    <div className="home-containers">
    <div className="home-heading">
        <h1 className="text">
          Hey Gokul 🎉, <span className='gr' key={currentIndex} >{words[currentIndex]}</span>
        </h1>
      </div>
      <div className="projects-section">
          <h2>My Projects</h2>
          {/* your projects or components here */}
        </div>
    </div>
    </>

  )
}

export default HomePage;
