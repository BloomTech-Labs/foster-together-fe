import React from 'react'
import { FormGroup, Input, Label, Error } from '../../styles/contactInfoStyles'

const CityInput = ({ handleChange, values, errors, touched }) => {
  return (
    <FormGroup width='79%'>
      <Input
        id='city'
        name='city'
        placeholder='City'
        onChange={handleChange}
        value={values.city}
        autoComplete='billing address-level2'
      />
      <Label htmlFor='city'>Which city do you live in?</Label>
      {errors.city && touched.city ? <Error>{errors.city}</Error> : null}
    </FormGroup>
  )
}

export default CityInput
