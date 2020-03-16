import React from 'react'
import { FormContainer } from '../styles/contactInfoStyles'
import FirstName from './ContactInputs/firstName'
import Email from './ContactInputs/emailInput'
import PasswordInput from './ContactInputs/passwordInput'
import LastName from './ContactInputs/lastName'
import Phone from './ContactInputs/phoneInput'
import ConfirmInput from './ContactInputs/ConfirmPW'

const ContactInfo = ({ values, handleChange, errors, touched }) => (
  <FormContainer>
    <FirstName
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <LastName
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <Email
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <Phone
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <PasswordInput
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <ConfirmInput
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
  </FormContainer>
)

export default ContactInfo
