import React from 'react'
import { FormGroup, Input, Label, Error } from '../../styles/contactInfoStyles'

const ConfirmInput = ({ errors, touched }) => {
  return (
    <FormGroup>
      <Input
        id='confirmPassword'
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password'
      />
      <Label htmlFor='confirmPassword'>
        Enter your login password again to make sure it matches the first one
      </Label>
      {errors?.confirmPassword && touched?.confirmPassword && (
        <Error>{errors?.confirmPassword}</Error>
      )}
    </FormGroup>
  )
}

export default ConfirmInput
