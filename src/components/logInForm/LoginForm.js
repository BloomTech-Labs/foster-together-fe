import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import OktaAuth from '@okta/okta-auth-js'
import {
  Container,
  Sidebar,
  Logo,
  SidebarTitle,
  ListItem,
  BackArrow,
  TabContainer,
  Tab,
} from '../signUpForm/styles/signUpOverlayStyles'
import logo from '../../images/logo.svg'
import arrowImg from '../../images/icons/back-arrow.svg'
import {
  ContentBox,
  Input,
  InputBox,
  InputContainer,
  InputLabel,
  Submit,
  BtnContainer,
  Btn,
  Forgot,
  ForContainer,
} from './styles/LoginPage'
import { axiosWithBaseURL } from '../../../Auth/axiosWithBaseUrl'
import axios from 'axios'

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
  const onSubmit = e => {
    e.preventDefault()
    axios.post(axiosWithBaseURL('./admins/login'), values).then(response => {
      localStorage.setItem('token', response.data.token)
    })
  }

  return (
    <Container>
      <Sidebar>
        <div>
          <Logo>
            <img src={logo} alt='Foster Together logo' />
          </Logo>
          <SidebarTitle>
            Children need families{' '}
            <p font-weight='none'> And families need support</p>
          </SidebarTitle>
        </div>
        <BackArrow>
          <img src={arrowImg} />
        </BackArrow>
      </Sidebar>
      <ContentBox>
        <TabContainer>
          <Tab active>
            <span>Log In</span>
          </Tab>
          <Tab onClick={() => history.push('/signup')}>
            <span>Register</span>
          </Tab>
        </TabContainer>
        <InputContainer onSubmit={onSubmit}>
          <InputBox>
            <Input
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
            <InputLabel>Enter your email here</InputLabel>
          </InputBox>
          <InputBox>
            <Input
              variant='filled'
              margin='normal'
              required
              fullWidth
              placeholder='Password'
              name='password'
              label='Password'
              type='password'
              id='password'
              value={values.password}
              onChange={handleChange}
              autoComplete='current-password'
            />
            <InputLabel>Enter your password here</InputLabel>
          </InputBox>
          <BtnContainer>
            <ForContainer>
              <Forgot>I forgot my password</Forgot>
            </ForContainer>
            <Btn>
              <Submit>Submit</Submit>
            </Btn>
          </BtnContainer>
        </InputContainer>
      </ContentBox>
    </Container>
  )
}

export default LoginForm
