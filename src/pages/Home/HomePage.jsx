import React from 'react';
import PageTransition from '../../components/PageTransition';
import './HomePage.css'
import { useState, useEffect } from 'react';
import Illimg from '../../assets/why.jpg';
import Illimg1 from '../../assets/int.jpg'
import Illimg2 from '../../assets/l1.jpg'
import Illimg3 from '../../assets/wapp.jpg'
import Illimg4 from '../../assets/sh.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Weather from '../../components/Weather';
import BlubOn from '../../assets/on.jpg';
import BulbOff from '../../assets/off.jpg';
import FanImg from '../../assets/fan.jpg';




function HomePage() {

    const user = JSON.parse(localStorage.getItem('user'));
    const words = ["Welcome ! to our Webpage ", "Ready ?", "Let's Go !", "Build Something !"];
    const [currentIndex, setCurrentIndex] = useState(0);
     
    const images = [Illimg, Illimg1, Illimg2,Illimg3,Illimg4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    
      const [isLightOn, setIsLightOn] = useState(false);
      const [isFanOn, setIsFanOn] = useState(false);

       const handleFanToggle = () => {
       setIsFanOn(!isFanOn);
      };

      const handleToggle = () => {
        setIsLightOn(!isLightOn);
      };
    
    

    useEffect(() => {
      const imageInterval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // change image every 3 seconds
    
      return () => clearInterval(imageInterval);
    }, []);
    
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
  
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      AOS.init({ duration: 1000 ,once: true });
    }, []);

    useEffect(() => {
      setTimeout(() => {
        AOS.refresh();
      }, 500); // small delay after mount to refresh AOS positions
    }, []);

  return (
    <>
    
   <PageTransition>  

    <div className="home-containers">
    <div className="home-heading">
        <h1 className="text">
          Hey {user?.name} 🎉 <span className='gr' key={currentIndex} >{words[currentIndex]}</span>
        </h1>
      </div>
      
      <div className="intro-section" data-aos="fade-up">
          <div className="intro-image" >
            <img src={images[currentImageIndex]} alt="Illustration" />
          </div>
          <div className="intro-text" data-aos="fade-left">
            <h2>Why This Website?</h2>
            <p >This platform is built to help users explore projects, discover ideas, and build something amazing with ease. Whether you're a developer, designer, or beginner — this space is for you.</p>
          </div>
        </div>
        
   
        <div className="weather-section">
        <h2 className='second-title' data-aos="fade-left">Weather Dashboard</h2>

      <div className="weather-board" data-aos="fade-left">
                   <Weather />

       </div>      
       </div>
      
      <div className='devices-section'>
        <h2 className='device-title'>Control Your Devices</h2>
        
        <div className='devices-container' >
    <div className='control-light' >

     
      <div className='light-content'>
      <div className='light-image'>
          <img src={isLightOn ? BlubOn : BulbOff} alt="Light bulb" />
        </div>
        <div className='light-info'>
          <label className="switch">
            <input type="checkbox" checked={isLightOn} onChange={handleToggle} />
            <span className="slider round"></span>
          </label>
          <p className='light-status'>{isLightOn ? 'ON' : 'OFF'}</p>
          <p className='light-description'>Control your room light with a single click!</p>
        </div>


    
 </div> 


    </div>
    <div className='control-fan' >
      
    <div className='light-content'>
    <div className='light-image'>
      <img 
        src={FanImg} 
        alt="Fan" 
        className={isFanOn ? 'fan-on' : ''} 
      />
    </div>
    <div className='light-info'>
      <label className="switch">
        <input type="checkbox" checked={isFanOn} onChange={handleFanToggle} />
        <span className="slider round"></span>
      </label>
      <p className='light-status'>{isFanOn ? 'ON' : 'OFF'}</p>
      <p className='light-description'>Control your fan with a single click!</p>
    </div>
  </div>




    </div>

    </div>
    </div>

   
    </div>
    </PageTransition>
    </>

  )
}

export default HomePage;
