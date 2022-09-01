import React, { useEffect } from 'react'
import { Link, useParams, useHistory, useRouteMatch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'

const DUMMY_QUOTES = [
    { id: 'q1', author: "Hasan", text: 'Learning React is fun' },
    { id: 'q2', author: "Karim", text: 'Learning Node is fun' }
]



const QuoteDetail = () => {
    const history = useHistory()
    const match = useRouteMatch()

    const { quoteId } = useParams()
    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getSingleQuote, true)
    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])

    if (status === 'pending') {
        <div className="centered">
            <LoadingSpinner />
        </div>
    }

    if (error) {
        return <div> No quote found</div>
    }

    if (!loadedQuotes) {
        return <p>No quote found</p>
    }

    return (
        <div>
            <h1>QuoteDetail</h1>

            <div>
                <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
            </div>
            <Route exact path={match.path}>
                <div className="centered"> <Link to={`${match.url}/comments`}> Add Comment</Link>
                </div>
            </Route>



            <Route path={`/quotes/${quoteId}/comments`}>
                <div className="centered">
                    <span style={{ cursor: "pointer", textDecoration: "underline" }} onClick={() => history.push(match.url)} >Hide add comment</span>
                </div>

                <Comments />
            </Route>
        </div>
    )
}

export default QuoteDetail