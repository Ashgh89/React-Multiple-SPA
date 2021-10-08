import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "Ash",
//     text: "Learning React",
//   },
//   { id: "q2", author: "Lena", text: "Learning AI" },
// ];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  // Object Destructuring
  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!(/*quote*/ loadedQuote.text)) {
    return <p>No quote found!</p>;
  }

  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  // If for example host:3000/quotes/q3, No quote found

  return (
    <Fragment>
      <HighlightedQuote
        text={/*quote*/ loadedQuote.text}
        author={/*quote*/ loadedQuote.author}
      />
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
