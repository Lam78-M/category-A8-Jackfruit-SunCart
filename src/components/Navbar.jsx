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
    <div className="bg-base-100 shadow-sm w-full">
      <div className="navbar max-w-7xl mx-auto px-2">

        {/* LEFT */}
        <div className="navbar-start">

          {/* MOBILE MENU */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-56 text-base"
            >
              <li>
                <Link href="/" className="flex items-center gap-2">
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="flex items-center gap-2">
                  <AiFillProduct /> Products
                </Link>
              </li>
              <li>
                <Link href="/myprofile" className="flex items-center gap-2">
                  <FaRegUser /> My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold ml-2">
            <IoSunny className="text-orange-400 text-3xl" />
            <span className="text-orange-400">SUN</span>
            <span className="text-gray-800">CART</span>
          </Link>
        </div>

        {/* CENTER (DESKTOP MENU) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg gap-5">
            <li>
              <Link href="/" className="flex items-center gap-2 hover:text-orange-400 transition">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="flex items-center gap-2 hover:text-orange-400 transition">
                <AiFillProduct /> Products
              </Link>
            </li>
            <li>
              <Link href="/myprofile" className="flex items-center gap-2 hover:text-orange-400 transition">
                <FaRegUser /> My Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">
          <div className="flex items-center gap-2">

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
                  className="btn btn-md bg-white px-5 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transition"
                  onClick={async () => await authClient.signOut()}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login">
                <button className="btn btn-md bg-white px-5 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transition">
                  Login
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