import React from 'react'
import { Route } from 'react-router-dom'
import LoginForm from './components/login/LoginForm'

import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'
import SignUp from './components/signUpForm/SignUpOverlay'
import { CssBaseline } from '@material-ui/core'
import AdminDash from './components/AdminDash/AdminDashboard'

function onAuthRequired({ history }) {
  history.push('/login')
}
function App() {
  return (
    <>
      <CssBaseline />
      <Security
        issuer='https://dev-529730.okta.com/oauth2/default'
        clientId='0oa2lku5jYtkeMkYg4x6'
        redirectUri={window.location.origin + '/implicit/callback'}
        onAuthRequired={onAuthRequired}
        pkce={true}
      >
        <Route
          path='/login'
          render={() => <LoginForm baseUrl='https://dev-529730.okta.com' />}
        />
        <Route exact path='/signup' component={SignUp} />
        <SecureRoute exact path='/' component={AdminDash} />
        <Route path='/implicit/callback' component={ImplicitCallback} />
      </Security>
    </>
  )
}

export default App
