import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Ash",
    text: "Learning React",
  },
  { id: "q2", author: "Lena", text: "Learning AI" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  // If for example host:3000/quotes/q3, No quote found
  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      {
        /* <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p> */ <HighlightedQuote
          text={quote.text}
          author={quote.author}
        />
      }
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;

// NOTICE Alternative -><Route path={"/quotes/:quoteId/comments"}>
