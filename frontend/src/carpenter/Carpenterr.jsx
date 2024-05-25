import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Carpenter from '../components/Carpenter';
function Carpenterr() {
  return (
    <div>
      <Navbar/>
        <div className="min-h-screen">
        <Carpenter/>
        </div>
        <Footer/>
    </div>
  )
}

export default Carpenterr
