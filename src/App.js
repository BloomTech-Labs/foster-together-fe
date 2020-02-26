import React from 'react'
import { Route } from 'react-router-dom'
import Login from './components/login/LoginForm'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'
import Home from './components/dashboard/Home'
import SignUp from './components/signUpForm/SignUpOverlay'
import { CssBaseline } from '@material-ui/core'

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
        <Route path='/' exact={true} component={Home} />
        <Route
          path='/login'
          render={() => <Login baseUrl='https://dev-529730.okta.com' />}
        />
        <Route exact path='/signup' component={SignUp} />
        <Route path='/implicit/callback' component={ImplicitCallback} />
      </Security>
    </>
  )
}

export default App
