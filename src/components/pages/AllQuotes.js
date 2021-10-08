import { useEffect } from "react";

import QuoteList from "../quotes/QuoteList";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";

// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "Ash",
//     text: "Learning React",
//   },
//   { id: "q2", author: "Lena", text: "Learning AI" },
// ];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return (
    // </*<h1>All Quotes Page</h1>*/ QuoteList
    //   quotes={DUMMY_QUOTES}
    // />
    <QuoteList quotes={loadedQuotes} />
  );
};

export default AllQuotes;
