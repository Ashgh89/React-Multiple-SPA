import { Fragment } from "react";
// useLocation -> give us access to a location object which has information about the currently loaded URL or page.
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  // URLSearchParams() -> This is not from React, this is a default JavaScript constructor class which we can use in the browser.
  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    // history.push("/quotes?sort=" + (isSortingAscending ? "desc" : "asc"));
    // You can do it with useRouteMatch or useLocation. I choose useLocation here.
    // history.push(
    //   `${location.pathname}?sort=${isSortingAscending ? "desc" : "asc"}`
    // );
    // The up code works great, but let's make it more readable and smaller
    // And it is better if you have more complex URLs you wanna navigate to.
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {
          /*props.quotes*/ sortedQuotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
            />
          ))
        }
      </ul>
    </Fragment>
  );
};

export default QuoteList;
