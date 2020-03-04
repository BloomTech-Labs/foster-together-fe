import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import Login from './components/logInForm/LoginForm'
import { Security, ImplicitCallback } from '@okta/okta-react'
import SignUp from './components/signUpForm/SignUpOverlay/SignUpOverlay'
import AdminDash from './components/AdminDash/AdminDashboard'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { initGA, PageView } from './Analytics'


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
        <Route
          path='/login'
          render={() => <Login baseUrl='https://dev-529730.okta.com' />}
        />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/dash' component={AdminDash} />
        <Route path='/implicit/callback' component={ImplicitCallback} />
      </ThemeProvider>
    </Security>

  )
}

export default App
