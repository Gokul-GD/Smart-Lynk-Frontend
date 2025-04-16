import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ x: window.innerWidth, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -window.innerWidth, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
