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
  Container,
  Paper,
  Grid,
  Tabs,
  Tab,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import axios from 'axios'
import OktaAuth from '@okta/okta-auth-js'

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

  // const onSubmit = e => {
  //   e.preventDefault()
  //   axios.post('', values).then(response => {
  //     localStorage.setItem('token', response.data.token)
  //   })
  // }

  const useStyles = makeStyles(theme => ({
    submit: {
      margin: theme.spacing(1, 4),
    },
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      boxShadow:
        '0 4px 8px 0 rgba(180, 180, 180, 0.2), 0 6px 20px 0 rgba(180, 180, 180, 0.19)',
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
      },
    },
    container: {
      padding: 0,
      minHeight: '80vh',
    },
    sideBar: {
      background: '#F9F9F9',
      minHeight: '80vh',
      padding: theme.spacing(4, 3),
    },
    form: {
      padding: theme.spacing(4, 12),
    },
    stepper: {
      padding: theme.spacing(5, 2, 5, 2),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }))

  const classes = useStyles()

  return (
    <main className={classes.layout}>
      <CssBaseline />
      <Paper className={classes.paper} elevation={0}>
        <Grid
          container
          direction='row'
          alignItems='stretch'
          className={classes.container}
        >
          <Grid item direction='column' xs={3} className={classes.sideBar}>
            <img
              src='https://via.placeholder.com/200x85'
              alt='Foster Together logo'
            />
          </Grid>
          <Grid item direction='column' xs={9} className={classes.form}>
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
          </Grid>
        </Grid>
      </Paper>
    </main>
  )
}

export default LoginForm
