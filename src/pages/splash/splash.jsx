import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './splash.css';
import PageTransition from '../../components/PageTransition';
import VideoBackgroundLayout from '../../components/VideoBackgroundLayout';
import TextTypingEffect from '../../components/TextEffect';

const SplashPage = () => {
    const navigate = useNavigate();

    const handleGetstarted = () => {
        navigate('/register');
    }


return (

  <VideoBackgroundLayout>
    <PageTransition>
      
      
    <motion.div 
    className="splash-container"
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >

      <h2 className="title">
      Welcome to Smart Lynk 
        
      </h2>
      <p className="subtitle">
      Manage your home with ease, wherever you are.
      Your devices, always connected, always in control.
      
      </p>
      <button className="get-started-btn" onClick={handleGetstarted}>
        Get Started
      </button>
    </motion.div>
    </PageTransition>

    </VideoBackgroundLayout>
   

)

};

export default SplashPage;