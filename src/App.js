import React from 'react'
import SignUp from './components/signUpForm/SignUpOverlay'
import { Route, Router } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'

function initializeReactGA() {
  ReactGA.initialize('UA-123791717-1')
  ReactGA.pageview('/homepage')
}

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Route exact path='/signup' component={SignUp} />
      </Router>
    </>
  )
}

export default App
