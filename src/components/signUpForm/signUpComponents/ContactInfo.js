import React from 'react'
import {
  FormContainer,
  FormGroup,
  Input,
  Label,
  Error,
} from '../styles/contactInfoStyles'

const ContactInfo = ({ values, handleChange, errors, touched }) => (
  <FormContainer>
    <FormGroup width='49%'>
      <Input
        id='first_name'
        name='first_name'
        value={values.first_name}
        placeholder='First Name'
        onChange={handleChange}
        autoComplete='fname'
      />
      <Label htmlFor='first_name'>What's your first name?</Label>
      {errors?.first_name && touched?.first_name && (
        <Error>{errors?.first_name}</Error>
      )}
    </FormGroup>
    <FormGroup width='49%'>
      <Input
        id='last_name'
        name='last_name'
        placeholder='Last Name'
        value={values.last_name}
        autoComplete='lname'
        onChange={handleChange}
      />
      <Label htmlFor='last_name'>What's your last name?</Label>
      {errors?.last_name && touched?.last_name && (
        <Error>{errors?.last_name}</Error>
      )}
    </FormGroup>
    <FormGroup width='59%'>
      <Input
        id='Email'
        name='email'
        placeholder='Email'
        value={values.email}
        autoComplete='email'
        onChange={handleChange}
      />
      <Label htmlFor='email'>Enter your email here</Label>
      {errors?.email && touched?.email && <Error>{errors?.email}</Error>}
    </FormGroup>
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
    <FormGroup>
      <Input
        id='password'
        type='password'
        name='password'
        placeholder='Password'
        value={values.password}
        autoComplete='password'
        onChange={handleChange}
      />
      <Label htmlFor='password'>Enter your login password</Label>
      {errors?.password && touched?.password && (
        <Error>{errors?.password}</Error>
      )}
    </FormGroup>
    <FormGroup>
      <Input
        id='confirmPassword'
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password'
        value={values.confirmPassword}
        onChange={handleChange}
      />
      <Label htmlFor='confirmPassword'>
        Enter your login password again to make sure it matches the first one
      </Label>
      {errors?.confirmPassword && touched?.confirmPassword && (
        <Error>{errors?.confirmPassword}</Error>
      )}
    </FormGroup>
  </FormContainer>
)

export default ContactInfo
