import React from 'react'
import { FormGroup, Input, Label, Error } from '../../styles/contactInfoStyles'

const ZipInput = ({ handleChange, values, errors, touched }) => {
  return (
    <FormGroup width='79%'>
      <Input
        id='zip'
        name='zip'
        placeholder='Zip/Postal Code'
        onChange={handleChange}
        value={values.zip}
      />
      <Label htmlFor='zip'>Enter your 5-digit postal code</Label>
      {errors.zip && touched.zip ? <Error>{errors.zip}</Error> : null}
    </FormGroup>
  )
}

export default ZipInput
