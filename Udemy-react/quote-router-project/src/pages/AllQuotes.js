import React from "react";
import QuoteList from "./../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning react is fun" },
  { id: "q2", author: "Maxi", text: "Imaginations" },
];

export default function AllQuotes() {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
    </div>
  );
}
