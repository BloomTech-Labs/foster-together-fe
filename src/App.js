import React from 'react'
import SignUp from './components/signUpForm/SignUpOverlay'
import { Route, Router } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'

const analytics = createBrowserHistory()
// google analytics page view tracking
analytics.listen(location => {
  ReactGA.set({ page: location.pathname }) // Update the user's current page
  ReactGA.pageview(location.pathname) // Record a pageview for the given page
})

function App() {
  return (
    <>
      <Router history={analytics}>
        <CssBaseline />
        <Route exact path='/signup' component={SignUp} />
      </Router>
    </>
  )
}

export default App
