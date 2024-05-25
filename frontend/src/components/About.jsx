import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='mt-28 text-3xl text-center'>
      <h1>Follow me <span className="text-red-500">instagram</span></h1>
      <Link to="/">
        <button className='bg-pink-500 text-white px-4 py-2 mt-10 rounded-md hover-bg-pink-700 duration-300'>Back</button>
      </Link>
    </div>
    
  )
}

export default About;
