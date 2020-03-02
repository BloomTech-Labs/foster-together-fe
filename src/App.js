import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Login from './features/LogInForm/LoginForm'
import './App.css'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'
import Home from './features/Dashboard/Home'
import SignUp from './components/signUpForm/SignUpOverlay'
import AdminDash from './components/AdminDash/AdminDashboard'
import { Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'

function initializeAnalytics() {
  ReactGA.initialize('UA-159166357-1')
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
}

function onAuthRequired({ history }) {
  history.push('/login')
}
function App() {
  initializeAnalytics()
  return (
    <Security
      issuer='https://dev-529730.okta.com/oauth2/default'
      clientId='0oa2lku5jYtkeMkYg4x6'
      redirectUri={window.location.origin + '/implicit/callback'}
      onAuthRequired={onAuthRequired}
      pkce={true}
    >
      <div className='App'>
        <CssBaseline />
        <Route path='/' exact={true} component={Home} />
        <Route
          path='/login'
          render={() => <Login baseUrl='https://dev-529730.okta.com' />}
        />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/dash' component={AdminDash} />
        <Route path='/implicit/callback' component={ImplicitCallback} />
      </div>
    </Security>
  )
}

export default App
