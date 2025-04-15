import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import PageTransition from './PageTransition';

function Navbar() {
  return (
    <PageTransition>
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Smart Lynk</h2>
      </div>
      <div className="navbar-links">
        <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/control" className={({ isActive }) => (isActive ? 'active' : '')}>
          Control
        </NavLink>
        <NavLink to="/logout" className={({ isActive }) => (isActive ? 'active' : '')}>
          Logout
        </NavLink>
      </div>
    </nav>
    </PageTransition>
  );
}

export default Navbar;
