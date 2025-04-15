import React from 'react';
import PageTransition from '../../components/PageTransition';
import Navbar from '../../components/Navbar';


function HomePage() {
  return (
    <>
        <PageTransition>
  
    <div className="home-container">
      <h1>Welcome to SmartHome Dashboard!</h1>
      <p >This is your control center.</p>
    </div>
    </PageTransition>
    </>

  )
}

export default HomePage;
