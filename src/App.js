import React from 'react'
import SignUp from './features/signUpForm/SignUpOverlay'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Route exact path='/signup' component={SignUp} />
    </>
  )
}

export default App
