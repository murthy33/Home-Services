import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import 'daisyui/dist/full.css'; // Import Daisy UI

const workers = [
  {
    name: 'Mahesh',
    phone: '+91 9963****01',
    location: 'vizag',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEb0m0TqIn9Xrd9Szf9LyDGWnEVRucIJHXMQ&s',
  },
  {
    name: 'Vinay',
    phone: '+91 9962****01',
    location: 'hyderabad',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLT_WVpeV7UD6a1Y4enij5jxgcLJhm-LQ1QA&s',
  },
  {
    name: 'Pavan',
    phone: '+91 9961****01',
    location: 'vijayawada',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJINlyhAAZt7ZljCWxQPNIrw8OsS3N2lT_rg&s',
  },
  {
    name: 'Sachin',
    phone: '+91 9961****01',
    location: 'Nellore',
    img: 'https://tse3.mm.bing.net/th?id=OIP.nPNISLIGHwO7wJyyqI3LbQHaE8&pid=Api&P=0&h=180',
  },
];

function Electrician11() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14   gap-y-1 mt-14 m-2 ml-0 justify-center">
      {workers.map((worker, index) => (
        <div key={index} className="h-500px w-full object-cover">
            <div className="border-3 border-blue-500 mt-15 m-10 ml-1 mr-1 h-500px w-full">
          <figure className="px-0 pt-0 ">
            <img src={worker.img} alt="electrician img" className="h-300px w-full object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-xl font-bold text-gray-700">{worker.name}</h2>
            <h3 className="text-xl font-semibold text-gray-700">{worker.location}</h3>
            <h4 className="text-xl text-gray-700">{worker.phone}</h4>
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

export default Electrician11;
