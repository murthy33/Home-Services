import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Acrepair from '../components/Acrepair';

function Acrepairr() {
  return (
    <div>
      <Navbar/>
        <div className="min-h-screen">
        <Acrepair/>
        </div>
        <Footer/>
    </div>
  )
}

export default Acrepairr
