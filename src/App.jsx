import React from 'react';
import { BrowserRouter as Router, Routes, Route ,useLocation} from "react-router-dom";
import { AnimatePresence,motion } from 'framer-motion';
import './App.css'
import SplashPage from './pages/splash/splash';
import RegisterPage from './pages/Register/RegisterPage';
import LoginPage from './pages/Login/LoginPage';
import ForgotPassPage from './pages/Forgot/ForgotPage';
import Navbar from './components/Navbar';
import HomePage from './pages/Home/HomePage';

function AppContent() {
  const location = useLocation();
  const hideNavRoutes = ['/','/login','/register','/reset-password'];
  
  return (
    <>
    {!hideNavRoutes.includes(location.pathname) && <Navbar />}
    
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname} >
        <Route path='/' element={ <SplashPage />} />

        <Route path='/register' element={<RegisterPage />} />

        <Route path='/login' element={<LoginPage />} />

        <Route path='/reset-password' element={<ForgotPassPage />} />

        <Route path='/home' element={<HomePage />}/>

        </Routes>
      </AnimatePresence>
      
      </>
  )
}


export default AppContent;
