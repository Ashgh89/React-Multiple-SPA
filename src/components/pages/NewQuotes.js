import { useHistory } from "react-router";

import QuoteForm from "../quotes/QuoteForm";

const NewQuotes = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push("/quotes");
  };

  return /*<h1>New Quote Page</h1>*/ <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuotes;
