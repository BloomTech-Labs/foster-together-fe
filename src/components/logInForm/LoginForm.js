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
import LoginInputs from './InputContainer'

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
        <LoginInputs
          onSubmit={onSubmit}
          handleChange={handleChange}
          values={values}
        />
      </ContentBox>
    </Container>
  )
}

export default LoginForm
