import React from 'react'
import { FormGroup, Input, Label, Error } from '../../styles/contactInfoStyles'

const AddressInput = ({ handleChange, values, errors, touched }) => {
  return (
    <FormGroup>
      <Input
        id='address'
        name='address'
        placeholder='Street Address'
        onChange={handleChange}
        value={values.address}
      />
      <Label htmlFor='address'>Street name, and house/apt number</Label>
      {errors.address && touched.address ? (
        <Error>{errors.address}</Error>
      ) : null}
    </FormGroup>
  )
}

export default AddressInput
