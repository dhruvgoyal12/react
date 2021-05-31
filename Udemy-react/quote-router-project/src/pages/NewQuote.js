import React from "react";
import QuoteForm from "./../components/quotes/QuoteForm";

const addQuoteHandler = (quoteData) => {};

export default function NewQuote() {
  return <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>;
}
