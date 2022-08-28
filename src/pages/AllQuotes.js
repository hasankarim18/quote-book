import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    { id: 'q1', author: "Hasan", text: 'Learning React is fun' },
    { id: 'q2', author: "Karim", text: 'Learning Node is fun' }
]

const AllQuotes = () => {
    return (
        <div>
            <h1>AllQuotes</h1>
            <div>
                <QuoteList quotes={DUMMY_QUOTES} />
            </div>
        </div>
    )
}

export default AllQuotes