import React from 'react'
import { FormGroup, Input, Label, Error } from '../../styles/contactInfoStyles'

const PasswordInput = ({ handleChange, values, errors, touched }) => {
  return (
    <FormGroup>
      <Input
        id='password'
        type='password'
        name='password'
        placeholder='Password'
        value={values.password}
        autoComplete='password'
        onChange={handleChange}
      />
      <Label htmlFor='password'>Enter your login password</Label>
      {errors?.password && touched?.password && (
        <Error>{errors?.password}</Error>
      )}
    </FormGroup>
  )
}

export default PasswordInput
