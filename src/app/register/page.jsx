'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
      
      const {register, handleSubmit, formState:{errors}} = useForm()

  const handleRegisterInfo = (data)=>{
    console.log(data, "data")
  }
  console.log(errors, "errors")
       
 

    return (
     <div className="mx-auto min-h-[85vh] w-full max-w-4xl px-4 mt-10 flex justify-center items-center 
bg-gradient-to-br from-sky-200 via-yellow-50 to-orange-200">
            <div className='p-10 rounded-xl bg-white shadow-2xl'>
                <h2 className='font-bold text-3xl text-center mb-5'>Login your account</h2>
<form className='space-y-3' onSubmit={handleSubmit(handleRegisterInfo)}>
 <fieldset className="fieldset">
  <legend className="fieldset-legend text-[16px]">Name</legend>
  <input type="name" {...register("name",{required: "Name field is required"})} className="input" placeholder="Type your name" />
  { errors.name && <p className='text-red-500'>{errors.name.message}</p>}
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend text-[16px]">Photo</legend>
  <input type="photo url" {...register("name",{required: "Photo field is required"})} className="input" placeholder="Type your photo url" />
  { errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
</fieldset>
 <fieldset className="fieldset">
  <legend className="fieldset-legend text-[16px]">Email</legend>
  <input type="email" {...register("email",{required: "Email field is required"})} className="input" placeholder="Type your email" />
  { errors.email && <p className='text-red-500'>{errors.email.message}</p>}
</fieldset>
    
    <fieldset className="fieldset">
  <legend className="fieldset-legend text-[16px]">Password</legend>
  <input type="password" {...register("password",{required: "Password field is required"})} className="input" placeholder="Type your password" />
  { errors.password && <p className='text-red-500'>{errors.password.message}</p>}
</fieldset>

<button className="
  btn 
  bg-orange-400 
  text-white 
  border border-gray-200 
  rounded-md 
  mt-2 w-full

  transition-all duration-300 
  hover:bg-orange-500 
  hover:shadow-lg 
  hover:shadow-orange-400/50 
">
  Register
</button>

</form>
  
            </div>

          
        </div>
    );
};

export default RegisterPage;