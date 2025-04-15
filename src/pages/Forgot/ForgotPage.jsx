import React from "react";
import './ForgotPage.css';
import { useNavigate } from 'react-router-dom';
import PageTransition from "../../components/PageTransition";
import backIcon from "../../assets/b2.png";
import fogImg from "../../assets/fog.jpg";

const ForgotPassPage = () => {

    const navigate = useNavigate();

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
          <form >
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>New Password</label>
              <input type="password" placeholder="Enter new password" />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm your password" />
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