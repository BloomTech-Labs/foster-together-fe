import React, { useEffect } from 'react'
import SignUp from './components/signUpForm/SignUpOverlay'
import AdminDash from './components/AdminDash/AdminDashboard'
import { Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { initGA, PageView } from './Analytics'

function App() {
  useEffect(() => {
    initGA('UA-159166357-1')
    PageView()
  }, [])
  return (
    <>
      <CssBaseline />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/dash' component={AdminDash} />
    </>
  )
}

export default App
