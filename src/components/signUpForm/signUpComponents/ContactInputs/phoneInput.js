import React from 'react'
import { FormGroup, Input, Label, Error } from '../../styles/contactInfoStyles'

const Phone = ({ handleChange, touched, values, errors }) => {
  return (
    <FormGroup width='39%'>
      <Input
        id='phone'
        name='phone'
        placeholder='Phone Number'
        value={values.phone}
        autoComplete='phone'
        onChange={handleChange}
      />
      <Label htmlFor='phone'>Your 10-digit phone number</Label>
      {errors?.phone && touched?.phone && <Error>{errors?.phone}</Error>}
    </FormGroup>
  )
}

export default Phone
