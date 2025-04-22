import React from 'react';
import PageTransition from '../../components/PageTransition';
import './HomePage.css'
import { useState, useEffect } from 'react';
import Illimg from '../../assets/why.jpg';
import Illimg1 from '../../assets/int.jpg'
import Illimg2 from '../../assets/l1.jpg'
import Illimg3 from '../../assets/wapp.jpg'
import Illimg4 from '../../assets/sh.jpg'
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Weather from '../../components/Weather';
import BlubOn from '../../assets/on.jpg';
import BulbOff from '../../assets/off.jpg';
import FanImg from '../../assets/Fan.jpg';
import Footer from '../../components/Footer';
import last1 from '../../assets/last.jpg'
import last2 from '../../assets/last2.jpg'
import last3 from '../../assets/last 3.jpg'






function HomePage() {

    const user = JSON.parse(localStorage.getItem('user'));
    const words = ["Let's Make Your Home Smarter !", "Let's Go !", "Let Technology Serve!","Lights On , Worries Gone !"];
    const [currentIndex, setCurrentIndex] = useState(0);
     
    const images = [Illimg, Illimg1, Illimg2,Illimg3,Illimg4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imagesl = [last1, last2, last3];
    const [LastImageIndex, setLastImageIndex] = useState(0);
    
    
      const [isLightOn, setIsLightOn] = useState(false);
      const [isFanOn, setIsFanOn] = useState(false);

      


      
      const controlDevice = (device, status) => {
        fetch("http://localhost:5000/api/devices/control", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ device, status }),
        })
          .then((res) => res.text())
          .then((data) => alert(data))
          .catch((err) => console.error("Error:", err));
      };
    
      const handleFanToggle = () => {
        const newStatus = !isFanOn ? "on" : "off";
        setIsFanOn(!isFanOn);
        controlDevice("fan", newStatus); 
      };
    
      const handleToggle = () => {
        const newStatus = !isLightOn ? "on" : "off";
        setIsLightOn(!isLightOn);
        controlDevice("light", newStatus); 
      };

    

    useEffect(() => {
      const imageInterval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000); 
    
      return () => clearInterval(imageInterval);
    }, []);

    useEffect(() => {
      const imagelInterval = setInterval(() => {
        setLastImageIndex((prevIndex) =>
          prevIndex === imagesl.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000); 
    
      return () => clearInterval(imagelInterval);
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
      }, 500); 
    }, []);

  return (
    <>
    
   <PageTransition>  

    <div className="home-containers" data-aos="fade-left">
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
            <h3>Why This Webpage Matters !</h3>
            <p >Our personalized smart home control hub — check live weather, room conditions, and manage your devices like lights and fans securely from anywhere, anytime with a simple click !</p>
          </div>
        </div>
        
   
        <div className="weather-section">
        <h2 className='second-title' data-aos="fade-left">Stay Ahead with Weather Data !</h2>

      <div className="weather-board" data-aos="fade-left">
                   <Weather />

       </div>      
       </div>
      
      <div className='devices-section'>
        <h2 className='device-title'>" One Click to Smart Living "</h2>
        
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
    <div className='intro-sections'>
    <div className="intro-image" >
            <img src={imagesl[LastImageIndex]} alt="Illustration" />
          </div>
          <div className="intro-text" >
            <h3> Meet the Minds Behind Smart Living </h3>
            <p> We are passionate final-year Computer Science students driven by innovation. This IoT Smart Device project empowers users to control home appliances through a simple, secure, and user-friendly web interface. </p>
          </div>

           
             

    </div>
    
    <Footer />
    </PageTransition>
    
    </>

  )
}

export default HomePage;
