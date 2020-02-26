import React from 'react'
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
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import OktaAuth from '@okta/okta-auth-js'
import { withAuth } from '@okta/okta-react'
import { withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 4),
  },
}))

export default withAuth(
  class LoginForm extends React.Component {
    constructor(props) {
      const classes = useStyles()
      super(props)
      this.state = {
        sessionToken: null,
        username: '',
        password: '',
      }

      this.oktaAuth = new OktaAuth({ url: props.baseUrl })

      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleUsernameChange = this.handleUsernameChange.bind(this)
      this.handlePasswordChange = this.handlePasswordChange.bind(this)
      this.useStyles = this.useStyles.bind(this)
    }

    handleSubmit(e) {
      e.preventDefault()
      this.oktaAuth
        .signIn({
          username: this.state.username,
          password: this.state.password,
        })
        .then(res =>
          this.setState({
            sessionToken: res.sessionToken,
          })
        )
        .catch(err => console.log('Found an error', err))
    }

    handleUsernameChange(e) {
      this.setState({ username: e.target.value })
    }

    handlePasswordChange(e) {
      this.setState({ password: e.target.value })
    }

    render() {
      if (this.state.sessionToken) {
        this.props.auth.redirect({ sessionToken: this.state.sessionToken })
        return null
      }
      const { classes } = this.props

      return (
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={this.classes.paper}>
            <Avatar className={this.classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <form
              onSubmit={this.handleSubmit}
              className={this.classes.form}
              noValidate
            >
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='username'
                label='Username'
                name='username'
                autoComplete='username'
                value={this.state.username}
                onChange={this.handleUsernameChange}
                autoFocus
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                value={this.state.password}
                onChange={this.handlePasswordChange}
                autoComplete='current-password'
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Keep Me Signed In'
                className={this.classes.submit}
              />
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={this.classes.submit}
              >
                Sign In
              </Button>
            </form>
          </div>
        </Container>
      )
    }
  }
)
