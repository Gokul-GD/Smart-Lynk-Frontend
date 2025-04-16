import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './RegisterPage.css';
import { Link } from 'react-router-dom';
import formimg from '../../assets/reg.jpg'
import PageTransition from '../../components/PageTransition';
import { useEffect, useState } from 'react';
import VideoBackgroundLayout from '../../components/VideoBackgroundLayout';
import BackIcon from '../../assets/b2.png';
import API from '../../utils/regCall';

const RegisterPage = () => {

  const [form, setForm] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();
    
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await API.post('/api/auth/register', form);
        alert('Registered successfully ✅');
        navigate('/login');
      } catch (err) {
        alert(err.response.data.msg || 'Registration failed ❌');
      }
    };


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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name </label>
              <input onChange={handleChange} type="text" placeholder='Enter your name' id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input onChange={handleChange} type="email" placeholder='Enter your email' id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password </label>
              <input onChange={handleChange} type="password" placeholder='Enter your password' id="password" name="password" required />
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