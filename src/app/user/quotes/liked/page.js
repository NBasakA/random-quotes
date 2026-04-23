'use client'

import React from 'react';
import { H3 } from '@/components/typography/H3';
import { useContext } from 'react';
import { QuotesContext } from '@/app/QuotesContext';
import Link from 'next/link';

export default function LikedQuotesPage () {
    const { likedQuotesList } = useContext(QuotesContext);
    return (
        <main className='min-h-screen pt-24 pb-10 bg-slate-200 flex flex-col items-center'>
      <div className="w-full max-w-2xl px-4">
        <div className='flex justify-center items-center mt-20 mb-8'>
          <h1 className='text-3xl font-bold text-slate-800'>Liked Quotes ❤️</h1>
        </div>

        {likedQuotesList.length === 0 ? (
          <div className='bg-white/50 p-10 rounded-md text-center shadow-sm'>
            <p className='text-slate-600 text-lg'> No liked quotes yet. 💔</p>
          </div>
        ) : (
          <div className='space-y-4'>
            {likedQuotesList.map((item, index) => (
              <section 
                key={index} 
                className='bg-slate-50/80 rounded-md p-6 flex flex-col shadow-sm'
              >
                <H3 element='p' className='text-lg italic'>
                  {item.quote}
                </H3>
                <div className='flex justify-between items-center mt-4'>
                  <span className='text-sm font-semibold text-slate-700'>
                    - {item.author}
                  </span>
                  <span className='bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full'>
                    ❤️ {item.likedQuotes}
                  </span>
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
    );
}