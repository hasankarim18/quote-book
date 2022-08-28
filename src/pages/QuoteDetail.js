import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
    { id: 'q1', author: "Hasan", text: 'Learning React is fun' },
    { id: 'q2', author: "Karim", text: 'Learning Node is fun' }
]


const QuoteDetail = () => {

    const { quoteId } = useParams()

    const quote = DUMMY_QUOTES.find(item => item.id === quoteId)

    return (
        <div>
            <h1>QuoteDetail</h1>
            <div>
                <HighlightedQuote text={quote.text} athor={quote.author} />
            </div>


            <Link to={`/quotes/${quoteId}/comments`}> Add Comment</Link>

            <Route path={`/quotes/${quoteId}/comments`}>
                {quoteId}
                <Comments />
            </Route>
        </div>
    )
}

export default QuoteDetail