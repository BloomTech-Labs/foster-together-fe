import React, { useState, useEffect } from 'react'
import {
  Page,
  MiddleSection,
  Label,
  FormGroup,
  Input,
  Option,
  Select,
  RadioOption,
  RadioHolder
} from './ApplicationStyles'
import { states } from '../signUpComponents/States'

const FirstName = () => {
  return (
    <FormGroup width='40%'>
      <Label htmlFor='first_name'>First Name</Label>
      <Input
        id='first_name'
        name='first_name'
        placeholder='First Name'
        autoComplete='fname'
      />
    </FormGroup>
  )
}

const LastName = () => {
  return (
    <FormGroup width='40%'>
      <Label htmlFor='last_name'>What's your last name?</Label>
      <Input
        id='last_name'
        name='last_name'
        placeholder='Last Name'
        autoComplete='lname'
      />
    </FormGroup>
  )
}

const Email = () => {
  return (
    <FormGroup width='85%'>
      <Label htmlFor='email'>Email</Label>
      <Input id='Email' name='email' placeholder='Email' autoComplete='email' />
    </FormGroup>
  )
}

const Phone = () => {
  return (
    <FormGroup width='45%'>
      <Label htmlFor='phone'>Phone*</Label>
      <Input
        id='phone'
        name='phone'
        placeholder='Phone Number'
        autoComplete='phone'
      />
    </FormGroup>
  )
}
const AddressInput = ({ handleChange, values, errors, touched }) => {
  return (
    <FormGroup width='85%'>
      <Label htmlFor='address'>Address</Label>
      <Input
        id='address'
        name='address'
        placeholder='Street Address'
        onChange={handleChange}
      />
    </FormGroup>
  )
}

const CityInput = ({ handleChange, values, errors, touched }) => {
  return (
    <FormGroup width='30%'>
      <Label htmlFor='city'>City*</Label>
      <Input
        id='city'
        name='city'
        placeholder='City'
        onChange={handleChange}
        autoComplete='billing address-level2'
      />
    </FormGroup>
  )
}

const StateInput = ({ handleChange, values, errors, touched }) => {
  return (
    <FormGroup width='18%'>
      <Label htmlFor='state'>State*</Label>
      <Select id='state' name='state' onChange={handleChange}>
        <Option value='' disabled selected>
          State
        </Option>
        {states.map(state => (
          <Option key={state.value} value={state.value}>
            {state.label}
          </Option>
        ))}
      </Select>
    </FormGroup>
  )
}

const ZipInput = ({ handleChange, values, errors, touched }) => {
  return (
    <FormGroup width='27%'>
      <Label htmlFor='zip'>Enter your 5-digit postal code</Label>
      <Input
        id='zip'
        name='zip'
        placeholder='Zip/Postal Code'
        onChange={handleChange}
      />
    </FormGroup>
  )
}

const RadioOne = () => {
  return (
    <FormGroup width='85%'>
      <Label>
        Because sexual abuse by a friend or relative is a high risk, Foster
        Together seeks to lead the way in deterring abusers. We teach families
        and volunteers the red flags and how to prevent & report sexual abuse.
        Are you willing to serve a family aware of these safeguards? *{' '}
      </Label>
      <div >
        <RadioHolder>
          <input type='radio' value='option1' />
          <RadioOption>
          Yes, I’m willing to adhere to and enforce sexual abuse prevention and
          foster home rules and guidelines.
          </RadioOption>
        </RadioHolder>
      </div>
      <div >
        <RadioHolder>
          <input type='radio' value='option2' />
          <RadioOption>
          No, I WILL NOT adhere to or enforce sexual abuse prevention and foster
          home rules and guidelines.
          </RadioOption>
        </RadioHolder>
      </div>
    </FormGroup>
  )
}

const RadioTwo = () => {
  return (
    <FormGroup width='85%'>
      <Label>
        Foster care is meant to be temporary. After their parents work to create
        a safe home, 60% of kids in Colorado foster care go home to mom or dad.
        It's important to give kids and families continuous support, including
        after the kids go home to their family of origin. Are you open to
        supporting a family whose children have been sent home post-foster care?{' '}
      </Label>
      <div >
        <RadioHolder>
          <input type='radio' value='option1' />
          <RadioOption>
          Yes, I'm open to supporting a family whose children have been sent
          home post-foster care
          </RadioOption>
        </RadioHolder>
      </div>
      <div >
        <RadioHolder>
          <input type='radio' value='option2' />
          <RadioOption>
          No, I'd prefer to just work with foster families.
          </RadioOption>
        </RadioHolder>
      </div>
      <div >
        <RadioHolder>
          <input type='radio' value='option3' />
          <RadioOption>
          Maybe, if I can get training on how to be most helpful to these
          families I’m open to supporting that family.
          </RadioOption>
        </RadioHolder>
      </div>
      <Label >Tell us about your experience with, or knowledge of, supporting kids and families of any kind. What gifts and qualities do you bring to this work?</Label>
      <Input
        id='experience'
        name='experience'
        placeholder='Answer Here'
      />
    </FormGroup>
  )
}

const RadioThree = () => {
    return (
      <FormGroup width='85%'>
        <Label>
            <RadioOption>
        Do you hold any certifications or licenses relevant to child care and safety that you feel could be of help to how you support as a Foster Neighbor? * (If so, please list them below separately)
        </RadioOption>
        </Label>
        <div >
          <RadioHolder>
            <input type='radio' value='option1' />
            <RadioOption>
            No, I DO NOT have certifications/liceses relevant to child care and safety that I believe would be helpful in supporting a family.
            </RadioOption>
          </RadioHolder>
        </div>
        <div >
          <RadioHolder>
            <Input type='radio' value='option2' />
            <RadioOption>
            Yes, I have certifications/liceses relevant to child care and safety that I believe would be helpful in supporting a family.
            </RadioOption>
          </RadioHolder>
        </div>
        <Label>Certification One</Label>
    <Input
        id='certification1'
        name='certification1'
        placeholder='Answer Here'
      />
      <Label>Certification Two</Label>
    <Input
        id='certification2'
        name='certification2'
        placeholder='Answer Here'
      />
      <Label>Certification Three</Label>
    <Input
        id='certification3'
        name='certification3'
        placeholder='Answer Here'
      />
      </FormGroup>
    )
  }

  const CheckboxOne = () => {
      return(
        <FormGroup width='85%'>
        <Label>
            How did you hear about us? * (check all that apply)
        </Label>
        <div>
          <RadioHolder>
            <input type='checkbox' value='option1' />
            <RadioOption>
            Referral from a friend or family
            </RadioOption>
          </RadioHolder>
        </div>
        <div >
        <RadioHolder>
            <input type='checkbox' value='option1' />
            <RadioOption>
            Social Media platform
            </RadioOption>
          </RadioHolder>
        </div>
        <div >
        <RadioHolder>
            <input type='checkbox' value='option1' />
            <RadioOption>
            Radio Station
            </RadioOption>
          </RadioHolder>
        </div>
        <div >
        <RadioHolder>
            <input type='checkbox' value='option1' />
            <RadioOption>
            Current Foster Together member
            </RadioOption>
          </RadioHolder>
        </div>
        <div >
        <RadioHolder>
            <input type='checkbox' value='option1' />
            <RadioOption>
            Help around the house: Sweeping/cleaning floors
            </RadioOption>
          </RadioHolder>
        </div>
      <Label htmlFor=''>Can you give us the name of the person or platform?</Label>
      <Input
        name='heardFrom'
        placeholder='Your answer here'
      />
      </FormGroup>
      )
  }
  const CheckboxTwo = () => {
    return(
      <FormGroup width='85%'>
      <Label>
      How do you see yourself helping? (check all that apply): *
      </Label>
      <div>
        <RadioHolder>
          <input type='checkbox' value='option1' />
          <RadioOption>
          Babysitting for a foster family          </RadioOption>
        </RadioHolder>
      </div>
      <div >
      <RadioHolder>
          <input type='checkbox' value='option1' />
          <RadioOption>
          Driving a child to activities and appointments          </RadioOption>
        </RadioHolder>
      </div>
      <div >
      <RadioHolder>
          <input type='checkbox' value='option1' />
          <RadioOption>
          Dropping a meal off to a foster family          </RadioOption>
        </RadioHolder>
      </div>
      <div >
      <RadioHolder>
          <input type='checkbox' value='option1' />
          <RadioOption>
          Donating new/gently used clothes, toys, supplies          </RadioOption>
        </RadioHolder>
      </div>
      <div >
      <RadioHolder>
          <input type='checkbox' value='option1' />
          <RadioOption>
          Delivering a package of clothes, toys, supplies          </RadioOption>
        </RadioHolder>
      </div>
    </FormGroup>
    )
}

export default function AppForm() {
  return (
    <Page>
      <MiddleSection>
        <FirstName />
        <LastName />
        <Email />
        <AddressInput />
        <CityInput />
        <StateInput />
        <ZipInput />
        <Phone />
        <CheckboxOne />
        <CheckboxTwo />
        <RadioOne />
        <RadioTwo />
        <RadioThree />
      </MiddleSection>
    </Page>
  )
}
