import Link from 'next/link';
import React from 'react';
import { AiFillProduct } from 'react-icons/ai';
import { FaHome, FaRegUser } from 'react-icons/fa';
import { IoSunny } from "react-icons/io5";
import { LuLogIn } from 'react-icons/lu';
const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm w-full'>
            <div className="navbar ">
  <div className="navbar-start  ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg text-black ">
     <div className='flex items-center gap-1 hover:text-orange-400'>
       <FaHome  />
      <Link href={'/'}>  Home</Link>
     </div>
       <div className='flex items-center gap-1 hover:text-orange-400'>
          <AiFillProduct />
      <Link href={'/'}>Products</Link>
    </div>
    <div className='flex items-center gap-1 hover:text-orange-400'>
      <FaRegUser />
       <Link href={'/'}>My Profile</Link>
     </div>
      </ul>
    </div>
    <a className="ml-5 flex items-center gap-2  text-2xl font-bold text-orange-400 bg-[#00000000]"> <IoSunny className='text-orange-400 text-3xl' />SUN <span className='text-gray-800  font-bold'>CART</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg text-black">
 <div className='flex gap-5 '>
     <div className='flex items-center gap-1 hover:text-orange-400'>
       <FaHome  />
      <Link href={'/'}>  Home</Link>
     </div>
    <div className='flex items-center gap-1 hover:text-orange-400'>
          <AiFillProduct />
      <Link href={'/'}>Products</Link>
    </div>
     <div className='flex items-center gap-1 hover:text-orange-400'>
      <FaRegUser />
       <Link href={'/'}>My Profile</Link>
     </div>
 </div>
    </ul>
  </div>
  <div className="flex flex-row md:navbar-end lg:navbar-end gap-3 mr-5">
    <a className="px-6 border font-semibold border-orange-500 text-orange-500 hover:bg-orange-400 hover:text-white  py-2 rounded flex items-center gap-1">Login <LuLogIn className='text-lg' /></a>
  
  
  </div>
</div>
        </div>
    );
};

export default Navbar;