"use client";

import { createContext, useState } from "react";
import { quotes as initialQuotes } from "@/quotes";
import { getRandomNumber } from "@/utils/helper-functions";

export const QuotesContext = createContext({});

export function QuotesContextProvider({ children }) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quotes, setQuotes] = useState(initialQuotes);

  function handleClick() {
    console.log(handleClick);
    const nextIndex = getRandomNumber(0, quotes.length - 1);
    setQuoteIndex(nextIndex);
  }

  function handleLikeClick() {
    console.log(handleLikeClick);
    const likeClick = quotes.map((quote, id) => {
      if (id === quoteIndex) {
        const updatedLikeClick =
          typeof quote.likedQuotes === "number" ? quote.likedQuotes + 1 : 1;
        return { ...quote, likedQuotes: updatedLikeClick };
      }
      return quote;
    });
    setQuotes(likeClick);
  }
  return (<QuotesContext value={{quotes, quoteIndex, handleClick, handleLikeClick}}>{children}</QuotesContext>);
}
