import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/api'


const NewQuote = () => {
    const history = useHistory()

    const { sendRequest, status } = useHttp(addQuote)

    const addQuoteHandler = (quoteData) => {
        //  const quoteData = { author: author, text: text }
        //  console.log(quoteData)
        sendRequest(quoteData)



    }

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes')
        }
    }, [status, history])

    return (
        <div>
            <h1>NewQuote</h1>
            <div>
                <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
            </div>
        </div>
    )
}

export default NewQuote