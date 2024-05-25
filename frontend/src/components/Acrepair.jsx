import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import 'daisyui/dist/full.css'; // Import Daisy UI

const workers = [
  {
    name: 'Mahesh',
    phone: '+91 9963****01',
    location: 'vizag',
    img: 'https://tse3.mm.bing.net/th?id=OIP.KIZyFbNVIlvn41MHrMC1bgHaE8&pid=Api&P=0&h=180=',
  },
  {
    name: 'Vinay',
    phone: '+91 9962****01',
    location: 'hyderabad',
    img: 'https://tse1.mm.bing.net/th?id=OIP.Bgy35YC5wdATjkoEY3ZHYwHaE8&pid=Api&P=0&h=180',
  },
  {
    name: 'Pavan',
    phone: '+91 9961****01',
    location: 'vijayawada',
    img: 'https://tse2.mm.bing.net/th?id=OIP.Bu9YWd5wHZ28-1n99Oce-wHaE8&pid=Api&P=0&h=180',
  },
];

function Acrepair() {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 gap-y-1 mt-14 m-2 ml-0 justify-center">
      {workers.map((worker, index) => (
        <div key={index} className="h-500px w-full object-cover">
            
            <div className="border-3 border-blue-500 mt-20 m-10 ml-1 mr-1 h-500 w-full">
          <figure className="px-0 pt-0 ">
            <img src={worker.img} alt="electrician img" className="h-300px w-full object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-xl  font-bold text-gray-700">{worker.name}</h2>
            <h3 className="text-xl font-semibold text-gray-700">{worker.location}</h3>
            <h4 className="text-xl text-gray-700">Ph: {worker.phone}</h4>
            <div className="card-actions">
              <h3 className="text-lg font-bold mt-3">
                <span className="text-blue-700 bg-phonepe text-white rounded  px-2 py-1 hover:bg-phonepeHover cursor-pointer">PAY ONLINE</span>
              </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Acrepair;
