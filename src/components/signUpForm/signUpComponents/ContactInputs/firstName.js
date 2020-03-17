import React from 'react'
import { FormGroup, Input, Label, Error } from '../../styles/contactInfoStyles'

const FirstName = ({ errors, touched }) => {
  return (
    <FormGroup width='49%'>
      <Input
        id='first_name'
        name='first_name'
        placeholder='First Name'
        autoComplete='fname'
      />
      <Label htmlFor='first_name'>What's your first name?</Label>
      {errors?.first_name && touched?.first_name && (
        <Error>{errors?.first_name}</Error>
      )}
    </FormGroup>
  )
}

export default FirstName
