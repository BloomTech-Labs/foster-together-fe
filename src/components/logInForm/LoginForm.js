import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Paper,
  Grid,
  Tabs,
  Tab,
} from '@material-ui/core'
import OktaAuth from '@okta/okta-auth-js'
import useStyles from './styles/LoginSyles'
import {
  Container,
  Sidebar,
  Logo,
  SidebarTitle,
  ListItem,
  BackArrow,
} from '../signUpForm/styles/signUpOverlayStyles'
import logo from '../../images/logo.svg'
import arrowImg from '../../images/icons/back-arrow.svg'

const LoginForm = props => {
  const history = useHistory()
  const [values, setValues] = React.useState({
    sessionToken: null,
    email: '',
    password: '',
  })
  const [value, setValue] = useState(0)

  const oktaAuth = OktaAuth({
    url: `https://dev-529730.okta.com/oauth2/default`,
  })

  const handleSubmit = e => {
    e.preventDefault()
    oktaAuth
      .signIn({
        email: values.email,
        password: values.password,
      })
      .then(res =>
        setValues({
          sessionToken: res.sessionToken,
        })
      )
  }
  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleToggle = (e, newValue) => {
    setValue(newValue)
  }

  const classes = useStyles()

  return (
    <Container>
      <Sidebar>
        <div>
          <Logo>
            <img src={logo} alt='Foster Together logo' />
          </Logo>
          <SidebarTitle>
            Children need families <h3> And families need support</h3>
          </SidebarTitle>
        </div>
        <BackArrow>
          <img src={arrowImg} />
        </BackArrow>
      </Sidebar>
      <Tabs
        value={value}
        onChange={handleToggle}
        indicatorColor='primary'
        textColor='primary'
        centered
      >
        <Tab label='Log In' />
        <Tab label='Register' onClick={() => history.push('/signup')} />
      </Tabs>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          variant='filled'
          margin='normal'
          required
          fullWidth
          id='email'
          placeholder='Email'
          name='email'
          autoComplete='email'
          value={values.email}
          onChange={handleChange}
          autoFocus
        />
        <TextField
          variant='filled'
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          value={values.password}
          onChange={handleChange}
          autoComplete='current-password'
        />
        <FormControlLabel
          control={<Checkbox value='remember' color='primary' />}
          label='Keep Me Signed In'
          className={classes.submit}
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classes.submit}
        >
          Sign In
        </Button>
      </form>
    </Container>
  )
}

export default LoginForm
