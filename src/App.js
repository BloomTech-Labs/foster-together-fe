import React from 'react'
import SignUp from './components/signUpForm/SignUpOverlay'
import AdminDash from './components/AdminDash/AdminDashboard'
import { Route, Router } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'

const trackingId = 'UA-159166357-1'
ReactGA.initialize(trackingId, {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 123,
    siteSpeedSampleRate: 100,
  },
})
const analytics = createBrowserHistory()
// google analytics page view tracking
analytics.listen(location => {
  ReactGA.set({ page: location.pathname }) // Update the user's current page
  ReactGA.pageview(location.pathname) // Record a pageview for the given page
  ReactGA.event({
    category: 'User',
    action: 'Sent message',
  })
})

function App() {
  return (
    <>
      <Router history={analytics}>
        <CssBaseline />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/dash' component={AdminDash} />

        <CssBaseline />
      </Router>
    </>
  )
}

export default App
