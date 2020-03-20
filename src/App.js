import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { initGA, PageView } from './utils/analytics'
import { PrivateRoute } from './utils/customRoutes'
import LoginForm from './components/logInForm/LoginForm'
import SignUp from './components/signUpForm/SignUpOverlay/SignUpOverlay'
import AdminDash from './components/AdminDash/AdminDashboard'
import Profile from './components/AdminDash/Profile/Profile'
// temporary sign up confirmation, will be replaced with user dashboard
import ConfirmationPage from './components/signUpForm/ConfirmationPage/ConfirmationPage'
import Train31 from './components/Training/Module3/Training3.1'
import Train32 from './components/Training/Module3/Train3.2'
import Train33 from './components/Training/Module3/Train3.3'
import Train34 from './components/Training/Module3/Train3.4'
import Training from './components/Training/Module3/TrainingOverlay'
function App() {
  useEffect(() => {
    initGA('UA-159166357-1')
    PageView()
  }, [])
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Route path ='/training' component={Training} />
        <Route path='/login' component={LoginForm} />
        <Route exact path='/signup' component={SignUp} />
        <PrivateRoute exact path='/dashboard' component={AdminDash} />
        <Route path='/confirmation' component={ConfirmationPage} />
        {/* <PrivateRoute path='/:membertype/:id' component={Profile} /> */}
      </ThemeProvider>
    </>
  )
}

export default App
