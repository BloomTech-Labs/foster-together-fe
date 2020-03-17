import React from 'react'
import {
  FormContainer,
  FormGroup,
  Input,
  Label,
  Error,
} from '../styles/formStyles'

const FirstName = ({ errors, touched }) => {
  return (
    <FormGroup width='49%'>
      <Input
        id='first_name'
        name='first_name'
        placeholder='First Name'
        autoComplete='fname'
      />
      <Label htmlFor='first_name'>What's your first name?</Label>
      {errors?.first_name && touched?.first_name && (
        <Error>{errors?.first_name}</Error>
      )}
    </FormGroup>
  )
}

const LastName = ({ errors, touched }) => {
  return (
    <FormGroup width='49%'>
      <Input
        id='last_name'
        name='last_name'
        placeholder='Last Name'
        autoComplete='lname'
      />
      <Label htmlFor='last_name'>What's your last name?</Label>
      {errors?.last_name && touched?.last_name && (
        <Error>{errors?.last_name}</Error>
      )}
    </FormGroup>
  )
}

const Email = ({ errors, touched }) => {
  return (
    <FormGroup width='59%'>
      <Input id='Email' name='email' placeholder='Email' autoComplete='email' />
      <Label htmlFor='email'>Enter your email here</Label>
      {errors?.email && touched?.email && <Error>{errors?.email}</Error>}
    </FormGroup>
  )
}

const Phone = ({ errors, touched }) => {
  return (
    <FormGroup width='39%'>
      <Input
        id='phone'
        name='phone'
        placeholder='Phone Number'
        autoComplete='phone'
      />
      <Label htmlFor='phone'>Your 10-digit phone number</Label>
      {errors?.phone && touched?.phone && <Error>{errors?.phone}</Error>}
    </FormGroup>
  )
}

const PasswordInput = ({ errors, touched }) => {
  return (
    <FormGroup>
      <Input
        id='password'
        type='password'
        name='password'
        placeholder='Password'
        autoComplete='password'
      />
      <Label htmlFor='password'>Enter your login password</Label>
      {errors?.password && touched?.password && (
        <Error>{errors?.password}</Error>
      )}
    </FormGroup>
  )
}

const ConfirmInput = ({ errors, touched }) => {
  return (
    <FormGroup>
      <Input
        id='confirmPassword'
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password'
      />
      <Label htmlFor='confirmPassword'>
        Enter your login password again to make sure it matches the first one
      </Label>
      {errors?.confirmPassword && touched?.confirmPassword && (
        <Error>{errors?.confirmPassword}</Error>
      )}
    </FormGroup>
  )
}

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
