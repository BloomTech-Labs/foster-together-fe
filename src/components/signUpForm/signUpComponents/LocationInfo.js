import React from 'react'
import {
  FormContainer,
  FormGroup,
  Input,
  Label,
  Error,
  Select,
  Option,
} from '../styles/formStyles'
import { states } from './States'

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

const StateInput = ({ handleChange, values, errors, touched }) => {
  return (
    <FormGroup width='19%'>
      <Select
        id='state'
        name='state'
        value={values.state}
        onChange={handleChange}
      >
        <Option value='' disabled selected>
          State
        </Option>
        {states.map(state => (
          <Option key={state.value} value={state.value}>
            {state.label}
          </Option>
        ))}
      </Select>
      {errors.state && touched.state ? <Error>{errors.state}</Error> : null}
    </FormGroup>
  )
}

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

const LocationInfo = ({ values, handleChange, errors, touched }) => (
  <FormContainer>
    <AddressInput
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <CityInput
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <StateInput
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <ZipInput
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
  </FormContainer>
)

export default LocationInfo
