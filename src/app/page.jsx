"use client";

import { quotes as initialQuotes } from "@/contexts/quotes";
import { QuoteText } from "@/components/typography/QuoteText";
import { Subtitle } from "@/components/typography/Subtitle";
import { useState } from "react";
import { Button } from "@/components/Button";

export default function Home() {
  const [quotes, setQuotes] = useState([...initialQuotes]);
  const [index, setIndex] = useState(0);

  function handleClick() {
    console.log("Current index is", index);
    console.log("Incrementing index by 1");
    setIndex((prevIndex) => (prevIndex + 1)); 
  }

  return (
    <main className="flex flex-col items-center justify-center grow">
      <div className="text-center bg-zinc-200 p-10 rounded-md">
        <div className="pb-6">
          <QuoteText>{quotes[index].quote}</QuoteText>
          <Subtitle>{quotes[index].author}</Subtitle>
        </div>
        <Button title='Next Quote' onClick={handleClick} />
      </div>
    </main>
  );
}
