'use client';

import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(true);
  const router = useRouter()

  const handleGoogleSignin = async (e) => {
    e.preventDefault();

    try {
      await authClient.signIn.social({
        provider: 'google',
         callbackURL: '/',
      });

      toast.success('Google signup successful 🚀');
    } catch (err) {
      toast.error('Google signup failed');
    }
  };

  const handleRegisterInfo = async (data) => {
    try {
      const { email, name, photo, password } = data;

      const { data: res, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image: photo,
        callbackURL: '/',
      });

      if (error) {
        toast.error(error.message || 'Signup failed');
        return;
      }

      if (res) {
        toast.success('Signup Successful 🎉');
         router.push('/');
      }
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="mx-auto min-h-[85vh] w-full max-w-4xl px-4 mt-10 flex justify-center items-center 
    bg-gradient-to-br from-sky-200 via-yellow-50 to-orange-200">

      <div className="p-10 rounded-xl bg-white shadow-2xl">

        <h2 className="font-bold text-3xl text-center mb-5">
          Create account
        </h2>

        <form className="space-y-3" onSubmit={handleSubmit(handleRegisterInfo)}>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[16px]">Name</legend>
            <input
              type="text"
              {...register('name', { required: 'Name field is required' })}
              className="input"
              placeholder="Type your name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[16px]">Photo</legend>
            <input
              type="text"
              {...register('photo', { required: 'Photo field is required' })}
              className="input"
              placeholder="Photo URL"
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[16px]">Email</legend>
            <input
              type="email"
              {...register('email', { required: 'Email field is required' })}
              className="input"
              placeholder="Type your email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend text-[16px]">Password</legend>

            <input
              type={isShowPassword ? 'text' : 'password'}
              {...register('password', {
                required: 'Password field is required',
                minLength: {
                  value: 6,
                  message: 'Minimum 6 characters required',
                },
              })}
              className="input"
              placeholder="Type your password"
            />

            <span
              className="absolute right-2 top-4 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? (
                <FaEye className="text-lg text-orange-600" />
              ) : (
                <FaEyeSlash className="text-lg text-orange-600" />
              )}
            </span>

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn bg-orange-400 text-white w-full hover:bg-orange-500 transition"
          >
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>

          <button
            type="button"
            onClick={handleGoogleSignin}
            className="btn bg-blue-500 text-white w-full hover:bg-blue-600 transition"
          >
            Signup with Google
          </button>

        </form>
      </div>
    </div>
  );
};

export default RegisterPage;