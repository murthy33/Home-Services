import React from 'react'
import Navbar from '../components/navbar';
import About from '../components/About';
import Footer from '../components/Footer';

function Aboutt() {
  return (
    <div>
        <Navbar/>
        <div className="min-h-screen">
        <About/>
        </div>
        <Footer/>
    </div>
  )
}

export default Aboutt
