'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
      
      const {register, handleSubmit, formState:{errors}} = useForm()

      const [isShowPassword, setIsShowPassword] = useState(true);

  const handleLoginInfo = async(data)=>{
    console.log(data, "data")
const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
   console.log(res, error)
  }
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

    <fieldset className="fieldset relative cursor-pointer">
  <legend className="fieldset-legend text-[16px]">Password</legend>
  <input type={isShowPassword ? "text": "password"} {...register("password",{required: "Password field is required"})} className="input" placeholder="Type your password" />
  <span className='absolute right-2 top-4' onClick={()=>setIsShowPassword(!isShowPassword)}>{ isShowPassword ? <FaEye className='text-lg text-orange-600'/>: <FaEyeSlash className='text-lg text-orange-600'/>}</span>
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