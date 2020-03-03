import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import LoginComponents from './components/logInForm/LoginComponents'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'
import Home from './features/Dashboard/Home'
import SignUp from './components/signUpForm/SignUpOverlay'
import AdminDash from './components/AdminDash/AdminDashboard'
import { CssBaseline } from '@material-ui/core'
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { initGA, PageView } from './Analytics'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#517E92',
    },
    secondary: {
      main: '#FF8D86',
    },
  },
})

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
  useEffect(() => {
    initGA('UA-159166357-1')
    PageView()
  }, [])
  return (
    <Security
      issuer='https://dev-529730.okta.com/oauth2/default'
      clientId='0oa2lku5jYtkeMkYg4x6'
      redirectUri={window.location.origin + '/implicit/callback'}
      onAuthRequired={onAuthRequired}
      pkce={true}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Route path='/' exact={true} component={Home} />
        <Route
          path='/login'
          render={() => (
            <LoginComponents baseUrl='https://dev-529730.okta.com' />
          )}
        />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/dash' component={AdminDash} />
        <Route path='/implicit/callback' component={ImplicitCallback} />
      </ThemeProvider>
    </Security>
  )
}

export default App
