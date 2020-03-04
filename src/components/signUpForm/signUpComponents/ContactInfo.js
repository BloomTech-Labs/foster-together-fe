import React from 'react'
import {
  FormContainer,
  FormGroup,
  Input,
  Label,
} from '../styles/contactInfoStyles'

const ContactInfo = ({ user, changeHandler }) => (
  <>
    <FormContainer>
      <FormGroup width='49%'>
        <Input
          id='firstName'
          name='firstName'
          value={user.firstName}
          placeholder='First Name'
          onChange={changeHandler}
          autoComplete='fname'
        />
        <Label htmlFor='firstName'>What's your first name?</Label>
      </FormGroup>
      <FormGroup width='49%'>
        <Input
          id='lastName'
          name='lastName'
          placeholder='Last Name'
          value={user.lastName}
          autoComplete='lname'
          onChange={changeHandler}
        />
        <Label htmlFor='lastName'>What's your last name?</Label>
      </FormGroup>
      <FormGroup width='59%'>
        <Input
          id='Email'
          name='email'
          placeholder='Email'
          value={user.email}
          autoComplete='email'
          onChange={changeHandler}
        />
        <Label htmlFor='email'>Enter your email here</Label>
      </FormGroup>
      <FormGroup width='39%'>
        <Input
          id='phone'
          name='phone'
          placeholder='Phone Number'
          value={user.phone}
          autoComplete='phone'
          onChange={changeHandler}
        />
        <Label htmlFor='phone'>Your 10-digit phone number</Label>
      </FormGroup>
      <FormGroup>
        <Input
          id='password'
          type='password'
          name='password'
          placeholder='Password'
          value={user.password}
          autoComplete='password'
          onChange={changeHandler}
        />
        <Label htmlFor='password'>Enter your login password</Label>
      </FormGroup>
      <FormGroup>
        <Input
          id='confirmPassword'
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={user.password}
          autoComplete='password'
          onChange={changeHandler}
        />
        <Label htmlFor='password'>
          Enter your login password again to make sure it matches the first one
        </Label>
      </FormGroup>
    </FormContainer>
  </>
)

export default ContactInfo
