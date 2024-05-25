import React from 'react';

const Services1 = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 mt-20 text-center">Services Available</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2 justify-center ">
      <div className='h-300px w-full object-cover'>
        <div className="border-3 border-blue-500 m-5 h-500">
        <a href="/electrician">      
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.ylFRRx6pE_2Ab3O6UQDOoQAAAA&pid=Api&P=0&h=180"
              alt="Electrician"
              
              className=" h-300px w-full object-cover"
            />
            <h3 className="text-center">
              <span className="block text-2xl font-serif bg-bisque p-2 rounded-md">Electrician</span>
            </h3>
        </a> 
        </div>
        </div>
        
        <div className="border-3 border-blue-500 m-5">
          <a href="/plumber">
            <img
              className="h-300px w-full object-cover"
              src="https://www.myzeo.com/wp-content/uploads/2020/03/load-image-13-1024x682.jpg"
              alt="Plumber"
            />
            <h3 className="text-center">
              <span className="block text-2xl font-serif bg-bisque p-2 rounded-md">Plumber</span>
            </h3>
          </a>
        
        </div>
        
        
        <div className="border-3 border-blue-500 m-5">
          <a href="/acrepair">
            <img
              className="h-300px w-full object-cover"
              src="https://tse3.mm.bing.net/th?id=OIP.cu8SDl_b19fOPDsNU661kwHaE8&pid=Api&P=0&h=180"
              alt="AC Repair"
            />
            <h3 className="text-center">
              <span className="block text-2xl font-serif bg-bisque p-2 rounded-md">AC Repair</span>
            </h3>
          </a>
        
        </div>
        
        <div className="border-3 border-blue-500 m-5">
          <a href="/Carpenter">
            <img
              className="h-300px w-full object-cover"
              src="https://www.niagaracollege.ca/trades/wp-content/uploads/sites/73/2021/06/i-gc-1-scaled.jpg"
              alt="Carpenter"
            />
            <h3 className="text-center">
              <span className="block text-2xl font-serif bg-bisque p-2 rounded-md">Carpenter</span>
            </h3>
          </a>
        
        </div>
        <div className="border-3 border-blue-500 m-5">
          <a href="/Painter">
            <img
              className="h-300px w-full object-cover"
              src="https://www.firstplacehousepainting.com/wp-content/uploads/2020/03/shutterstock_505745179-scaled.jpg"
              alt="Painter"
            />
            <h3 className="text-center">
              <span className="block text-2xl font-serif bg-bisque p-2 rounded-md">Painter</span>
            </h3>
          </a>
        </div>
        
      </div>
      <div>
      <label className="input input-bordered flex items-center gap-2 mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
        <input type="text" className="grow" placeholder="Email" />
      </label>
      </div>
      <div>
      <button className="btn btn-secondary mt-4 mb-6">Secondary</button>
      </div>

    </div>
  );
};

export default Services1;
