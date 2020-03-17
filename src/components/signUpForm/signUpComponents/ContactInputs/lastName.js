import React from 'react'
import { FormGroup, Input, Label, Error } from '../../styles/contactInfoStyles'

const LastName = ({ errors, touched }) => {
  return (
    <FormGroup width='49%'>
      <Input
        id='last_name'
        name='last_name'
        placeholder='Last Name'
        autoComplete='lname'
      />
      <Label htmlFor='last_name'>What's your last name?</Label>
      {errors?.last_name && touched?.last_name && (
        <Error>{errors?.last_name}</Error>
      )}
    </FormGroup>
  )
}

export default LastName
