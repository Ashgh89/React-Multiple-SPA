import { useEffect } from "react";
import { useHistory } from "react-router";

import QuoteForm from "../quotes/QuoteForm";
import useHttp from "../../hooks/use-http";
import { addQuote } from "../../lib/api";

const NewQuotes = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    // console.log(quoteData);
    sendRequest(quoteData);

    // history.push("/quotes");
  };

  return (
    /*<h1>New Quote Page</h1>*/ <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={addQuoteHandler}
    />
  );
};

export default NewQuotes;
