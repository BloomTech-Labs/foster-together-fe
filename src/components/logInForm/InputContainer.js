import React from 'react'
import {
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
import { Event } from '../../utils/analytics/index'

const LoginInputs = ({ onSubmit, handleChange, values }) => {
  return (
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
          <Submit onClick={() => Event('Login', 'Tried to login', 'submit')}>
            Submit
          </Submit>
        </Btn>
      </BtnContainer>
    </InputContainer>
  )
}

export default LoginInputs
