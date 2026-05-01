"use client";

import { createContext, useState , useMemo} from "react";
import { quotes as initialQuotes } from "@/quotes";
import { getRandomNumber } from "@/utils/helper-functions";

export const QuotesContext = createContext(null);

export function QuotesContextProvider({ children }) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quotes, setQuotes] = useState(initialQuotes);

function handleClick() {
  const nextIndex = getRandomNumber(0, quotes.length - 1);
  setQuoteIndex(nextIndex);
}

function handleLikeClick() {
  setQuotes((prevQuotes) =>
    prevQuotes.map((quote, index) => {
      if (index === quoteIndex) {
        return {
          ...quote,
          likedQuotes: (quote.likedQuotes ?? 0) + 1,
        };
      }
      return quote;
    })
  );
}

// I searched and found 'useMemo'. Is is the right way to do or is there any better way?
const likedQuotesList = useMemo(() => {
  return quotes.filter((quote) => quote.likedQuotes > 0);
}, [quotes]);


function handleUnlikeClick(quoteToUnlike) {
  setQuotes((prevQuotes) =>
    prevQuotes.map((quote) => {
      if (quote.quote === quoteToUnlike.quote && quote.author === quoteToUnlike.author) {
        return {
          ...quote,
          likedQuotes: Math.max(0, (quote.likedQuotes ?? 0) - 1),
        };
      }
      return quote;
    })
  );
}

const value = {
  quotes,
  quoteIndex,
  handleClick,
  handleLikeClick,
  handleUnlikeClick,
likedQuotesList
};

return (
  <QuotesContext.Provider value={value}>
    {children}
  </QuotesContext.Provider>
);
  }