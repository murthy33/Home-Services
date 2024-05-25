import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dailog">
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          <h3 className="font-bold text-lg">Signup</h3>
          <div className='mt-4 space-y-2'>
            <span>Name</span>
            <br/>
            <input type="text"
            placeholder='Enter your fullname' 
            className='w-80 px-3 py-1 border rounded-md '
            {...register("name", { required: true })}
            />
            <br/>
            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br/>
            <input type="email"
            placeholder='Enter your email' 
            className='w-80 px-3 py-1 border rounded-md '
            {...register("email", { required: true })}
            />
            <br/>
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br/>
            <input type="text"
            placeholder='Enter your password' 
            className='w-80 px-3 py-1 border rounded-md '
            {...register("password", { required: true })}
            />
            <br/>
            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className='flex justify-around mt-4'>
            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300'>Signup</button>
            <p>Have account?{" "}
            <Link to="/" className='underline text-blue-500'>
                Login
            </Link></p>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup