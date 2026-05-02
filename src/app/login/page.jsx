'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
      
      const {register, handleSubmit, formState:{errors}} = useForm()

  const handleLoginInfo = (data)=>{
    console.log(data, "data")
  }
  console.log(errors, "errors")
       
 

    return (
       <div className="mx-auto min-h-[85vh] w-full max-w-4xl px-4 mt-10 flex justify-center items-center 
bg-gradient-to-br from-sky-200 via-yellow-50 to-orange-200">
            <div className='p-10 rounded-xl bg-white shadow-2xl'>
                <h2 className='font-bold text-3xl text-center mb-5'>Login your account</h2>
<form className='space-y-3' onSubmit={handleSubmit(handleLoginInfo)}>
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
  Login 
</button>

</form>
   <p className='text-center mt-3'>Do not have an account ? <Link href={'/register'} className='text-blue-500'>Register</Link></p>
            </div>

          
        </div>
    );
};

export default Login;