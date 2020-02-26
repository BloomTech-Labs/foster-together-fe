import React from 'react'
import SignUp from './components/signUpForm/SignUpOverlay'
import { Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/signup' component={SignUp} />
    </>
  )
}

export default App
