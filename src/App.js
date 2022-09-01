import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// import AllQuotes from './pages/AllQuotes'
// import NewQuote from './pages/NewQuote'
// import QuoteDetail from './pages/QuoteDetail'
import Layout from './components/layout/Layout'
// import NotFound from './pages/NotFound'
import LoadingSpinner from './components/UI/LoadingSpinner'

const NewQuote = React.lazy(() => import('./pages/NewQuote'))
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'))


const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div className="centered"><LoadingSpinner /></div>}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/quotes" />
          </Route>
          <Route exact path="/quotes">
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          {/**lazy load */}
          <Route path="/new-quote">
            <NewQuote />
          </Route>

          <Route path="*" >
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  )
}

export default App