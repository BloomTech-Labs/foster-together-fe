import React from 'react'
import { FormContainer } from '../styles/contactInfoStyles'
import FirstInput from './ContactInputs/firstName'
import EmailInput from './ContactInputs/emailInput'
import PasswordInput from './ContactInputs/passwordInput'
import LastInput from './ContactInputs/lastName'
import PhoneInput from './ContactInputs/phoneInput'
import ConfirmInput from './ContactInputs/ConfirmPW'

const ContactInfo = ({ values, handleChange, errors, touched }) => (
  <FormContainer>
    <FirstInput
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <LastInput
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <EmailInput
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <PhoneInput
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
