import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';
import '../Logout/Logout.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../components/Footer';

 const LogoutPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };


  return (
    <>
    <div className='log' >
     <PageTransition>
<h2> <span className='nameL'>hey {user?.name}</span>  Session ended , control is just a login away ! </h2>
<button className='logout' onClick={handleLogout}>Logout</button>
</PageTransition>
    </div>
    
    </>
  
  )
}

export default LogoutPage;