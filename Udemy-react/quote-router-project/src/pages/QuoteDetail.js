import React, { Fragment } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote.js";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning react is fun" },
  { id: "q2", author: "Maxi", text: "Imaginations" },
];

export default function QuoteDetail() {
  const params = useParams();
  const match = useRouteMatch();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p> No quote found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`} exact>
        <Comments />
      </Route>
    </Fragment>
  );
}
