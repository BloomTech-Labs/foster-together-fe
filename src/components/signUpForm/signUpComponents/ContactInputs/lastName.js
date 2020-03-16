import React from 'react'
import { FormGroup, Input, Label, Error } from '../../styles/contactInfoStyles'

const LastInput = ({ handleChange, errors, values, touched }) => {
  return (
    <FormGroup width='49%'>
      <Input
        id='last_name'
        name='last_name'
        placeholder='Last Name'
        value={values.last_name}
        autoComplete='lname'
        onChange={handleChange}
      />
      <Label htmlFor='last_name'>What's your last name?</Label>
      {errors?.last_name && touched?.last_name && (
        <Error>{errors?.last_name}</Error>
      )}
    </FormGroup>
  )
}

export default LastInput
