import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import Login from './components/logInForm/LoginForm'
import { Security, ImplicitCallback } from '@okta/okta-react'
import SignUp from './components/signUpForm/SignUpOverlay'
import AdminDash from './components/AdminDash/AdminDashboard'
import { CssBaseline } from '@material-ui/core'
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'
import UserProfile from './components/AdminDash/UsersProfile'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { initGA, PageView } from './Analytics'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#517E92',
      light: '#91BCCF',
    },
    secondary: {
      main: '#FF8D86',
      light: '#F0B6A7',
    },
  },
  overrides: {
    MuiStepIcon: {
      root: {
        color: '#A1A1A1',
        '&$active': {
          color: '#FF8D86',
        },
        '&$completed': {
          color: '#FF8D86',
        },
      },
    },
  },
})

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
        <Route path='/' exact={true} component={AdminDash} />
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
