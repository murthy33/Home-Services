import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Painter from '../components/Painter';

function Painterr() {
  return (
    <div>
      <Navbar/>
        <div className="min-h-screen">
        <Painter/>
        </div>
        <Footer/>
    </div>
  )
}

export default Painterr
