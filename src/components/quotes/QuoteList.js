import { Fragment } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';


import QuoteItem from './QuoteItem';
import classNamees from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {

  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1
    } else {
      return quoteA.id < quoteB.id ? 1 : -1
    }
  })
}


const QuoteList = (props) => {
  const match = useRouteMatch()
  const history = useHistory()
  const location = useLocation()


  const queryParams = new URLSearchParams(location.search);

  const isSorgintAscending = queryParams.get('sort') === 'asc'

  const sortedQuotes = sortQuotes(props.quotes, isSorgintAscending)

  const changeSortingHandler = () => {
    //programatic navigation
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSorgintAscending ? 'desc' : 'asc'}`
    })
    //   history.push(`${location.pathname}?sort=${isSorgintAscending ? 'desc' : 'asc'}`)
  }

  return (
    <Fragment>
      <div className={classNamees.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSorgintAscending ? 'Decending' : 'Ascending'} </button>
      </div>
      <ul className={classNamees.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
