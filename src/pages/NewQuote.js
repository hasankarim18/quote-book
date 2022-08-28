import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
    const addQuoteHandler = (author, text) => {
        console.log(author, text)
    }
    return (
        <div>
            <h1>NewQuote</h1>
            <div>
                <QuoteForm onAddQuote={addQuoteHandler} />
            </div>
        </div>
    )
}

export default NewQuote