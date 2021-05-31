import React, { Fragment } from "react";
import { Route, useParams } from "react-router";
import Comments from "../components/comments/Comments";

export default function QuoteDetail() {
  const params = useParams();
  return (
    <Fragment>
      {params.quoteId}

      <Route path={`/quotes/:quoteId/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
}
