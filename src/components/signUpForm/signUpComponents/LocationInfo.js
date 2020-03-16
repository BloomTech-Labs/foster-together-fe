import React from 'react'
import { FormContainer } from '../styles/contactInfoStyles'
import AddressInput from './LocationInputs/addressInput'
import StateInput from './LocationInputs/stateInput'
import ZipInput from './LocationInputs/zipInput'
import CityInput from './LocationInputs/cityInput'

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
