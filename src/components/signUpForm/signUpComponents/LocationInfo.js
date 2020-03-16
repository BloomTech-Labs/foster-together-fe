import React from 'react'
import { FormContainer } from '../styles/contactInfoStyles'
import AddressInput from './Inputs/addressInput'
import StateInput from './Inputs/stateInput'
import ZipInput from './Inputs/zipInput'
import CityInput from './Inputs/cityInput'

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
