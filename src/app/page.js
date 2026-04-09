"use client";

import { Button } from "@/components/Button";
import { useContext } from "react";
import { H3 } from "@/components/typography/H3";
import { QuotesContext } from "./QuotesContext";

export default function Home() {
  const {quotes,quoteIndex,handleClick,handleLikeClick} = useContext(QuotesContext);
  const { quote, author ,likedQuotes} = quotes[quoteIndex];

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
            <Button variant={"icon"} onClick={handleLikeClick}>❤️ {likedQuotes ?? 0}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
