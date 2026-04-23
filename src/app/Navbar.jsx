'use client';

import React, { useContext } from 'react';
import Link from "next/link";
import { QuotesContext } from './QuotesContext';

export default function Navbar() {
  const {likedQuotesList} = useContext(QuotesContext);

const totalLikedQuotes = likedQuotesList.length;

  return (
    <nav className='fixed flex justify-between top-0 w-full bg-white shadow-md font-bold'>
        <div className="max-w-7xl px-20 h-16 flex items-center justify-between">
            <Link href='/'>Home</Link>
        </div>
            <ul className='flex items-center gap-10 list-none mr-20 '>
          <li>
            <Link href='/user/quotes/liked'>❤️ {totalLikedQuotes}</Link>
          </li>
          <li>
            <Link href='/'>Profile</Link>
          </li>
        </ul>
      </nav>
  );
};
