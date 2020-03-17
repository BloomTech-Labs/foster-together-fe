import React from 'react'
import { FormGroup, Input, Label, Error } from '../../styles/contactInfoStyles'

const PasswordInput = ({ errors, touched }) => {
  return (
    <FormGroup>
      <Input
        id='password'
        type='password'
        name='password'
        placeholder='Password'
        autoComplete='password'
      />
      <Label htmlFor='password'>Enter your login password</Label>
      {errors?.password && touched?.password && (
        <Error>{errors?.password}</Error>
      )}
    </FormGroup>
  )
}

export default PasswordInput
