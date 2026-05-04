'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { AiFillProduct } from 'react-icons/ai';
import { FaHome, FaRegUser } from 'react-icons/fa';
import { IoSunny } from "react-icons/io5";
import Image from 'next/image';

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <div className='bg-base-100 shadow-sm w-full'>
      <div className="navbar">

        <div className="navbar-start">

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-lg text-black">
              <div className='flex items-center gap-1 hover:text-orange-400'>
                <FaHome />
                <Link href={'/'}>Home</Link>
              </div>
              <div className='flex items-center gap-1 hover:text-orange-400'>
                <AiFillProduct />
                <Link href={'/products'}>Products</Link>
              </div>
              <div className='flex items-center gap-1 hover:text-orange-400'>
                <FaRegUser />
                <Link href={'/myprofile'}>My Profile</Link>
              </div>
            </ul>
          </div>

   
          <a className="flex items-center gap-2 text-2xl font-bold text-orange-400 ml-2">
            <IoSunny className='text-orange-400 text-3xl' />
            SUN <span className='text-gray-800 font-bold'>CART</span>
          </a>
        </div>

        
        <div className="navbar-center">
          <ul className="hidden lg:flex menu menu-horizontal px-1 text-lg text-gray-800">
            <div className='flex gap-5'>
              <div className='flex items-center gap-1 hover:text-orange-400'>
                <FaHome />
                <Link href={'/'}>Home</Link>
              </div>
              <div className='flex items-center gap-1 hover:text-orange-400'>
                <AiFillProduct />
                <Link href={'/products'}>Products</Link>
              </div>
              <div className='flex items-center gap-1 hover:text-orange-400'>
                <FaRegUser />
                <Link href={'/myprofile'}>My Profile</Link>
              </div>
            </div>
          </ul>
        </div>

     
        <div className="navbar-end">
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center gap-2 mr-3">
            {isPending ? (
              <span className="loading loading-spinner text-secondary"></span>
            ) : user ? (
              <>
                <Image
                  src={user?.image || "/assets/user.png"}
                  alt="user avatar"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <button
                  className="btn bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                  onClick={async () => await authClient.signOut()}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login">
                <button className="btn bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
                  Login with Email
                </button>
              </Link>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;