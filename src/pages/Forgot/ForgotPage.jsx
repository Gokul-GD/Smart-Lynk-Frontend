import React from "react";
import { useState } from 'react';
import './ForgotPage.css';
import { useNavigate } from 'react-router-dom';
import PageTransition from "../../components/PageTransition";
import backIcon from "../../assets/b2.png";
import fogImg from "../../assets/fog.jpg";
import API from "../../utils/regCall";

const ForgotPassPage = () => { 
  const [form, setForm] = useState({ email: '', newPassword: '' });

    const navigate = useNavigate();

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(form)
      try {
        const res = await API.post('/api/auth/forgot-password', form);
        alert(res.data.message || 'Password reset successful ✅');
        navigate('/login')
      } catch (err) {
        alert(err.response?.data?.message || 'Password reset failed ❌');
      }
    };

    const handleGoBack = () => {
        navigate('/login')
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
          <img src={fogImg} alt="Illustration" className="illustration-imgss" />
        </div>

        {/* Forgot Password Form */}
        <div className="form-container">
          <h2 className="fr">Set a New Password</h2>
          <form onSubmit={handleSubmit} >
            <div className="form-group">
              <label>Email</label>
              <input name="email"   onChange={handleChange} type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>New Password</label>
              <input name="newPassword"  onChange={handleChange}  type="password" placeholder="Enter new password" />
            </div>

           

            <button type="submit" className="submit-btn">Reset Password</button>
          </form>
        </div>
       </div> 

    </PageTransition>
    </>

);

};

export default ForgotPassPage;