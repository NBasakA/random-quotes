'use client';

import {QuoteText} from "@/components/typography/QuoteText";
import {Subtitle} from "@/components/typography/Subtitle";
import {Button} from "@/components/Button";
import {useContext} from "react";
import {QuotesContext} from "@/context/QuotesContext";
import {UserContext} from "@/context/UserContextProvider";



export default function LikedQuotes () {
    const {quotes, handleLike} = useContext(QuotesContext);
    const { user:{userId}, toggleLike} = useContext(UserContext);
    const likedQuotes = quotes.filter((quote) => quote.likedBy.includes(userId));

    console.log('liked quotes', likedQuotes);

    function handleLikeClick(quoteId) {
        toggleLike(quoteId);
        handleLike(quoteId, userId);
    }
    return (
        <main className='flex flex-col items-center justify-center grow p-10'>
            <h1>LikedQuotes</h1>
            <section className='flex flex-col items-center justify-center grow gap-4 my-10'>
                {likedQuotes.map((quote)=>(
                    <div className='text-center bg-zinc-800 p-10 rounded-md w-xl' key={quote.id}>
                        <div className='flex justify-end mb-6'>
                            <Button title='💔' onClick={()=> handleLikeClick(quote.id)}/>
                                </div>
                                <div className='pb-6'>
                                    <QuoteText className='text-zinc-100'>{quote.quote}</QuoteText>
                                    <Subtitle>{quote.author}</Subtitle>
                                </div>
                                </div>
                ))}
            </section>
        </main>
    );
}