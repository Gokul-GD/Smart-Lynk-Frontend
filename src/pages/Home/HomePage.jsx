import React from 'react';
import PageTransition from '../../components/PageTransition';
import './HomePage.css'
import { useState, useEffect } from 'react';
import Illimg from '../../assets/reg.jpg'


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
 <PageTransition>       
      <div className="intro-section">
          <div className="intro-image">
            <img src={Illimg} alt="Illustration" />
          </div>
          <div className="intro-text">
            <h2>Why This Website?</h2>
            <p>This platform is built to help users explore projects, discover ideas, and build something amazing with ease. Whether you're a developer, designer, or beginner — this space is for you.</p>
          </div>
        </div>
        </PageTransition>



      <div className="projects-section">
        

                   
      <h2>My Projects</h2>
          
         

        </div>
    </div>
    </>

  )
}

export default HomePage;
