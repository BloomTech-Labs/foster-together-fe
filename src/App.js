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

import Training from './components/Training/Module3/TrainingOverlay'

import ModuleLetter from './components/Training/module-0/trainingLetter'
import StartTraining from './components/Training/module-1/moduleOneLetter'
import ModuleFive from './components/Training/module-5/moduleFive'
import ModuleOne from './components/Training/module-1/moduleOne'
import ModuleTwo from './components/Training/module-2'

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
        <PrivateRoute path='/:membertype/:id' component={Profile} />
        <Route path='/modulestart' component={StartTraining} />
        <Route path='/module0' component={ModuleLetter} />
        <Route path='/module1' component={ModuleOne} />
        <Route path='/module2' component={ModuleTwo} />
        <Route path='/moduleFive' component={ModuleFive} />
        <Route path='/modulestart' component={StartTraining} />
      </ThemeProvider>
    </>
  )
}

export default App
