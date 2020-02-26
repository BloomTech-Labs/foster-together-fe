import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Login from './features/LogInForm/LoginForm'
import './App.css'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'
import Home from './features/Dashboard/Home'

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
        <Route path='/' exact={true} component={Home} />
        <Route
          path='/login'
          render={() => <Login baseUrl='https://dev-529730.okta.com' />}
        />
        <Route path='/implicit/callback' component={ImplicitCallback} />
      </div>
    </Security>
  )
}

export default App
