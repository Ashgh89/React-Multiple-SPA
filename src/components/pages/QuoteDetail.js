import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

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
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  // If for example host:3000/quotes/q3, No quote found
  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* <Route path={`/quotes/${params.quoteId}`} exact> */}
      <Route path={match.path} exact>
        <div className="centered">
          {/* <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}> */}
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;

// NOTICE Alternative -><Route path={"/quotes/:quoteId/comments"}>
