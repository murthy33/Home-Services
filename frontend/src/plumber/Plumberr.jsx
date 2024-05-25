import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Plumber from '../components/Plumber';

function Plumberr() {
  return (
    <div>
      <Navbar/>
        <div className="min-h-screen">
        <Plumber/>
        </div>
        <Footer/>
    </div>
  )
}

export default Plumberr
