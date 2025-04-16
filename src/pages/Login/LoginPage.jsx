import React from "react";
import './LoginPage.css'
import { useNavigate, Link } from 'react-router-dom';
import PageTransition from "../../components/PageTransition";
import logImg from '../../assets/log.jpg';
import API from "../../utils/regCall";
import { useState } from "react";

import backIcon from "../../assets/b2.png"

const LoginPage = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await API.post('/api/auth/login', form);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user',JSON.stringify(res.data.user));
        navigate('/home');
      }catch (err) {
          alert(err.response.data.message || 'Login failed ❌');
      }
  };



    const handleGoBack = () => {
        navigate('/register');
    };

    const handleResetpass = () => {
        navigate('/reset-password');
    };
     
    const handleGohome = () => {
      navigate('/home');
  };


return (

     <>

     <PageTransition>
        <button className="back-btn" onClick={handleGoBack}>
        <img src={backIcon} alt="Go Back" className="back-icon-img" />
      </button>
      <div className="register-container">
        {/* Illustration */}
        <div className="illustration-container">
          <img src={logImg} alt="Illustration" className="illustration-imgs" />
        </div>

        {/* Login Form */}
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input name="email"  onChange={handleChange} type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input name="password" onChange={handleChange} type="password" placeholder="Enter your password" />
            </div>

            <button type="submit" className="submit-btn">Login</button>

            <p className="forgot-password" >
            Having trouble logging in ?<span onClick={handleResetpass}> Click here</span> to reset it.
            </p>
          </form>
        </div>
        <button onClick={handleGohome}>Click me</button>
      </div>

        

      </PageTransition>
     </>    

)


};

export default LoginPage;