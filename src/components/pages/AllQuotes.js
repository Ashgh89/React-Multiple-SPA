import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Ash",
    text: "Learning React",
  },
  { id: "q2", author: "Lena", text: "Learning AI" },
];

const AllQuotes = () => {
  return </*<h1>All Quotes Page</h1>*/ QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
