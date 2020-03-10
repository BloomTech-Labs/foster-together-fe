import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import LoginForm from './components/logInForm/LoginForm'
import SignUp from './components/signUpForm/SignUpOverlay/SignUpOverlay'
import AdminDash from './components/AdminDash/AdminDashboard'
import { Normalize } from 'styled-normalize'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { initGA, PageView } from './utils/analytics'
import FamilyProfile from './components/userDash/FamilyProfile'
import NeighborProfile from './components/userDash/NeighborProfile'
import { PrivateRoute } from './utils/customRoutes'
// temporary sign up confirmation, will be replaced with user dashboard
import ConfirmationPage from './components/signUpForm/ConfirmationPage/ConfirmationPage'

function App() {
  useEffect(() => {
    initGA('UA-159166357-1')
    PageView()
  }, [])
  return (
    <>
      <Normalize />
      <ThemeProvider theme={theme}>
        <Route path='/login' component={LoginForm} />
        <Route exact path='/signup' component={SignUp} />
        <PrivateRoute exact path='/dashboard' component={AdminDash} />
        <Route path='/confirmation' component={ConfirmationPage} />
        <PrivateRoute path='/neighbor/:id' component={NeighborProfile} />
        <PrivateRoute path='/family/:id' component={FamilyProfile} />
      </ThemeProvider>
    </>
  )
}

export default App
