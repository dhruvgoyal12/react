import React from "react";
import { useHistory } from "react-router";
import QuoteForm from "./../components/quotes/QuoteForm";

export default function NewQuote() {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>;
}
