import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import LoginForm from './features/LogInForm/LoginForm'
import './App.css'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'

function onAuthRequired({ history }) {
  history.push('/login')
}
function App() {
  return (
    <Security
      issuer='https://dev-529730.okta.com/oauth2/default'
      clientId='0oa2lku5jYtkeMkYg4x6'
      redirectUri={window.location.origin + '/implicit/callback'}
      onAuthRequired={onAuthRequired}
      pkce={true}
    >
      <div className='App'>
        <Route
          path='/login'
          render={() => <LoginForm baseUrl='https://dev-529730.okta.com' />}
        />
        <Route path='/implicit/callback' component={ImplicitCallback} />
      </div>
    </Security>
  )
}

export default App
