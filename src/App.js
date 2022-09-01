import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
import AllQuotes from './pages/AllQuotes'
import NewQuote from './pages/NewQuote'
import QuoteDetail from './pages/QuoteDetail'
import Layout from './components/layout/Layout'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <Layout>
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
        <Route path="/new-quote">
          <NewQuote />
        </Route>

        <Route path="*" >
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App