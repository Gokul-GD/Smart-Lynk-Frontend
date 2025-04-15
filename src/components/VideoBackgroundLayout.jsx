import React from 'react';
import './video.css';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const VideoBackgroundLayout = ({ children, videoSrc }) => {
    // useEffect(() => {
    //     document.body.style.backgroundColor = "#000"; // set fallback bg while video loads
    //     return () => {
    //       document.body.style.backgroundColor = "";
    //     };
    //   }, []);


  return (
    <motion.div
    className="video-layout"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.1, ease: 'easeInOut' }}
  >
      <video autoPlay muted loop playsInline className="background-video">
      <source src="/splash.mp4" type="video/mp4" />
      </video>
      <div className="page-content">
        {children}
      </div>
    </motion.div>
  );
};

export default VideoBackgroundLayout;