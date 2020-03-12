import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, TabContainer, Tab } from '../style'
import { ContentBox } from './styles/LoginPage'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/thunks/authThunks'
import LoginInputs from './InputContainer'
import LoginSideBar from './LoginSideBar'

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
      <LoginSideBar />
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
