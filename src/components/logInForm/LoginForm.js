import React, { useState } from 'react'
import useStyles from './styling/LoginStyling'
import OktaAuth from '@okta/okta-auth-js'
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'

const LoginForm = props => {
  const [values, setValues] = useState({
    sessionToken: null,
    email: '',
    password: '',
  })

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

  const classes = useStyles()
  return (
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
  )
}

export default LoginForm
