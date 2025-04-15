import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './RegisterPage.css';
import { Link } from 'react-router-dom';
import formimg from '../../assets/reg.jpg'
import PageTransition from '../../components/PageTransition';
import { useEffect } from 'react';
import VideoBackgroundLayout from '../../components/VideoBackgroundLayout';
import BackIcon from '../../assets/b2.png';

const RegisterPage = () => {
    const navigate = useNavigate();

    const handleGoback = () => {
         navigate('/');

    };

    
    
    return (
      <PageTransition >
      <>
      <button className='back-btn' onClick={handleGoback}>
        <img src={BackIcon} alt='Go Back' className='back-icon-img'/></button>
        
    
            <div className="register-container">
        {/* Form Container */}
        <div className="illustration-container">
          <img src={formimg} alt="Illustration" className="illustration-img" />
        </div>
        <div className="form-container">
          <h2>Register</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name </label>
              <input type="text" placeholder='Enter your name' id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input type="email" placeholder='Enter your email' id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password </label>
              <input type="password" placeholder='Enter your password' id="password" name="password" required />
            </div>
            <button type="submit" className="submit-btn">Sign up</button>
            <p> Already have an account? <Link to="/login" >Login here</Link></p>
          </form>
        </div>

        
      </div>
       
      </> 
      </PageTransition>
     

    )


};

export default RegisterPage;