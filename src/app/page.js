"use client";

import { quotes as initialQuotes, quotes } from "@/quotes";
import { Button } from "@/components/Button";
import { useState } from "react";
import { H3 } from "@/components/typography/H3";
import { getRandomNumber } from "@/utils/helper-functions";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const { quote, author } = initialQuotes[quoteIndex];

  // updated the handleClick function for to get random results.
  function handleClick() {
    const nextIndex = getRandomNumber(0, quotes.length - 1);
    setQuoteIndex(nextIndex);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-200">
      <section className="bg-slate-50/50 rounded-md p-10 flex flex-col">
        <H3 element="p">{quote}</H3>
        <span className="text-md font-semibold text-slate-900 self-end ">
          - {author}
        </span>
        <div className="relative flex items-center justify-center mt-6 ">
          <div>
            <Button variant={"primary"} onClick={handleClick}>
              Next Quote
            </Button>
          </div>
          <div className="absolute right-0">
            <Button variant={"icon"}>❤️</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
