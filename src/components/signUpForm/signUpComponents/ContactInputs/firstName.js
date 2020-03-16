import React from 'react'
import { FormGroup, Input, Label, Error } from '../../styles/contactInfoStyles'

const FirstInput = ({ handleChange, values, errors, touched }) => {
  return (
    <FormGroup width='49%'>
      <Input
        id='first_name'
        name='first_name'
        value={values.first_name}
        placeholder='First Name'
        onChange={handleChange}
        autoComplete='fname'
      />
      <Label htmlFor='first_name'>What's your first name?</Label>
      {errors?.first_name && touched?.first_name && (
        <Error>{errors?.first_name}</Error>
      )}
    </FormGroup>
  )
}

export default FirstInput
