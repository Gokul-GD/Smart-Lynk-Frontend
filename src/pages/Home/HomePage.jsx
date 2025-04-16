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




function HomePage() {

    const user = JSON.parse(localStorage.getItem('user'));
    const words = ["Welcome ! to our Webpage ", "Ready ?", "Let's Go !", "Build Something !"];
    const [currentIndex, setCurrentIndex] = useState(0);
     
    const images = [Illimg, Illimg1, Illimg2,Illimg3,Illimg4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      AOS.init({ duration: 1000 });
    }, []);

  return (
    <>
    
  
    <div className="home-containers">
    <div className="home-heading">
        <h1 className="text">
          Hey {user?.name} 🎉 <span className='gr' key={currentIndex} >{words[currentIndex]}</span>
        </h1>
      </div>
 <PageTransition>       
      <div className="intro-section" data-aos="fade-up">
          <div className="intro-image" >
            <img src={images[currentImageIndex]} alt="Illustration" />
          </div>
          <div className="intro-text" data-aos="fade-left">
            <h2>Why This Website?</h2>
            <p >This platform is built to help users explore projects, discover ideas, and build something amazing with ease. Whether you're a developer, designer, or beginner — this space is for you.</p>
          </div>
        </div>
        </PageTransition>



      <div className="projects-section" data-aos="fade-left">
        

                   
      <h2>Weather Dashboard</h2>
          
         

        </div>
    </div>
    </>

  )
}

export default HomePage;
