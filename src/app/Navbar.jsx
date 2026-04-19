'use client';

import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full bg-white shadow-md z-50'>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href='/'>Home</Link>
        </div>
        <div className='flex items-center gap-8 list-none'>
            <ul>
          <li>
            <Link href='/user/quotes/liked'>❤️</Link>
          </li>
          <li>
            <Link href='/'>Profile</Link>
          </li>
        </ul>
        </div>
        
      </nav>
  );
};

export default Navbar;
