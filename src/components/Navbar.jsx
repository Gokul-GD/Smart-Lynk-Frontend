import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';


function Navbar() {

  const navigate = useNavigate();

  const HandleAbout = () => {
        navigate('/about');
  }



  return (
    <>
    
    <nav className="navbar">
      
      <div className="navbar-logo">
        <h2>Smart Lynk</h2>
      </div>
      <div className="navbar-links">
        <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/project" className={({ isActive }) => (isActive ? 'active' : '')}>
          Project 
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About us
        </NavLink>
        <NavLink to="/logout" className={({ isActive }) => (isActive ? 'active' : '')}>
          Logout
        </NavLink>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
