import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Container,
  Sidebar,
  Logo,
  SidebarTitle,
  BackArrow,
  TabContainer,
  Tab,
} from '../style'
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
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/thunks/authThunks'
import { Event } from '../../utils/analytics/index'

const LoginForm = () => {
  const { push } = useHistory()
  const { userType } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    userType === 'admin' && push('/dashboard')
  }, [userType, push])

  const [values, setValues] = useState({ email: '', password: '' })

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    dispatch(login(values))
  }

  useEffect(() => {}, [])

  return (
    <Container>
      <Sidebar>
        <div>
          <Logo>
            <img src={logo} alt='Foster Together logo' />
          </Logo>
          <SidebarTitle>
            Children need families{' '}
            <p fontWeight='none'> And families need support</p>
          </SidebarTitle>
        </div>
        <BackArrow>
          <img src={arrowImg} alt='back arrow' />
        </BackArrow>
      </Sidebar>
      <ContentBox>
        <TabContainer>
          <Tab active>
            <span>Log In</span>
          </Tab>
          <Tab onClick={() => push('/signup')}>
            <span>Register</span>
          </Tab>
        </TabContainer>
        <InputContainer onSubmit={onSubmit}>
          <InputBox>
            <Input
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
              <Submit
                onClick={() => Event('Login', 'Tried to login', 'submit')}
              >
                Submit
              </Submit>
            </Btn>
          </BtnContainer>
        </InputContainer>
      </ContentBox>
    </Container>
  )
}

export default LoginForm
