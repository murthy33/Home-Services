import React from 'react'

function Navi() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="header-left">
      <a href="/" className=" text-white text-x1">Brand</a>
    </div>
    <div className="header-right">
      <ul className="flex space-x-4">
        <li><a href="/about" className="text-white">About</a></li>
        <li><a href="/services" className="text-white">Services</a></li>
        <li><a href="/contact" className="text-white">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navi
