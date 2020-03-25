import React from 'react'
import { Formik } from 'formik'
import {
  Page,
  MiddleSection,
  Label,
  Form,
  FormGroup,
  Input,
  RadioOption,
  RadioHolder,
  CheckLabel,
  Checkbox,
} from './ApplicationStyles'

const CheckboxOne = ({ values, setFieldValue }) => {
  return (
    <FormGroup>
      <Label>
        How did you hear about us? * (check all that apply)
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q1_a.option_a', !values.app_q1_a.option_a)
          }}
        >
          <Checkbox
            id='app_q1_a.option_a'
            name='app_q1_a.option_a'
            checked={values.app_q1_a.option_a}
          />
          Referral from a friend or family
        </CheckLabel>
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q1_a.option_b', !values.app_q1_a.option_b)
          }}
        >
          <Checkbox
            id='app_q1_a.option_b'
            name='app_q1_a.option_b'
            checked={values.app_q1_a.option_b}
          />
          Social Media platform
        </CheckLabel>
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q1_a.option_c', !values.app_q1_a.option_c)
          }}
        >
          <Checkbox
            id='app_q1_a.option_c'
            name='app_q1_a.option_c'
            checked={values.app_q1_a.option_c}
          />
          Radio Station
        </CheckLabel>
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q1_a.option_d', !values.app_q1_a.option_d)
          }}
          style={{ marginBottom: 35 }}
        >
          <Checkbox
            id='app_q1_a.option_d'
            name='app_q1_a.option_d'
            checked={values.app_q1_a.option_d}
          />
          Current Foster Together member
        </CheckLabel>
      </Label>
      <Label>
        Can you give us the name of the person or platform?
        <Input id='app_q1_b' name='app_q1_b' placeholder='Your answer here' />
      </Label>
    </FormGroup>
  )
}

const CheckboxTwo = ({ values, setFieldValue }) => {
  return (
    <FormGroup>
      <Label>
        How do you see yourself helping? (check all that apply): *
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q2.option_a', !values.app_q2.option_a)
          }}
        >
          <Checkbox
            id='app_q2.option_a'
            name='app_q2.option_a'
            checked={values.app_q2.option_a}
          />
          Babysitting for a foster family
        </CheckLabel>
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q2.option_b', !values.app_q2.option_b)
          }}
        >
          <Checkbox
            id='app_q2.option_b'
            name='app_q2.option_b'
            checked={values.app_q2.option_b}
          />
          Driving a child to activities and appointments
        </CheckLabel>
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q2.option_c', !values.app_q2.option_c)
          }}
        >
          <Checkbox
            id='app_q2.option_c'
            name='app_q2.option_c'
            checked={values.app_q2.option_c}
          />
          Dropping a meal off to a foster family
        </CheckLabel>
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q2.option_d', !values.app_q2.option_d)
          }}
        >
          <Checkbox
            id='app_q2.option_d'
            name='app_q2.option_d'
            checked={values.app_q2.option_d}
          />
          Donating new/gently used clothes, toys, supplies
        </CheckLabel>
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q2.option_e', !values.app_q2.option_e)
          }}
        >
          <Checkbox
            id='app_q2.option_e'
            name='app_q2.option_e'
            checked={values.app_q2.option_e}
          />
          Delivering a package of clothes, toys, supplies
        </CheckLabel>
      </Label>
    </FormGroup>
  )
}

const RadioOne = ({ values, setFieldValue }) => {
  const handleClick = value => {
    setFieldValue('app_q3', value)
  }
  return (
    <FormGroup>
      <Label>
        Because sexual abuse by a friend or relative is a high risk, Foster
        Together seeks to lead the way in deterring abusers. We teach families
        and volunteers the red flags and how to prevent & report sexual abuse.
        Are you willing to serve a family aware of these safeguards? *
        <CheckLabel onClick={() => handleClick(true)}>
          <Checkbox radio checked={values.app_q3} />
          Yes, I’m willing to adhere to and enforce sexual abuse prevention and
          foster home rules and guidelines.
        </CheckLabel>
        <CheckLabel onClick={() => handleClick(false)}>
          <Checkbox radio checked={!values.app_q3} />
          No, I WILL NOT adhere to or enforce sexual abuse prevention and foster
          home rules and guidelines.
        </CheckLabel>
      </Label>
    </FormGroup>
  )
}

const RadioTwo = () => {
  return (
    <FormGroup>
      <Label>
        Foster care is meant to be temporary. After their parents work to create
        a safe home, 60% of kids in Colorado foster care go home to mom or dad.
        It's important to give kids and families continuous support, including
        after the kids go home to their family of origin. Are you open to
        supporting a family whose children have been sent home post-foster care?{' '}
      </Label>
      <div>
        <RadioHolder>
          <input type='radio' value='option1' />
          <RadioOption>
            Yes, I'm open to supporting a family whose children have been sent
            home post-foster care
          </RadioOption>
        </RadioHolder>
      </div>
      <div>
        <RadioHolder>
          <input type='radio' value='option2' />
          <RadioOption>
            No, I'd prefer to just work with foster families.
          </RadioOption>
        </RadioHolder>
      </div>
      <div>
        <RadioHolder>
          <input type='radio' value='option3' />
          <RadioOption>
            Maybe, if I can get training on how to be most helpful to these
            families I’m open to supporting that family.
          </RadioOption>
        </RadioHolder>
      </div>
      <Label>
        Tell us about your experience with, or knowledge of, supporting kids and
        families of any kind. What gifts and qualities do you bring to this
        work?
      </Label>
      <Input id='experience' name='experience' placeholder='Answer Here' />
    </FormGroup>
  )
}

const RadioThree = () => {
  return (
    <FormGroup>
      <Label>
        <RadioOption>
          Do you hold any certifications or licenses relevant to child care and
          safety that you feel could be of help to how you support as a Foster
          Neighbor? * (If so, please list them below separately)
        </RadioOption>
      </Label>
      <div>
        <RadioHolder>
          <input type='radio' value='option1' />
          <RadioOption>
            No, I DO NOT have certifications/liceses relevant to child care and
            safety that I believe would be helpful in supporting a family.
          </RadioOption>
        </RadioHolder>
      </div>
      <div>
        <RadioHolder>
          <Input type='radio' value='option2' />
          <RadioOption>
            Yes, I have certifications/liceses relevant to child care and safety
            that I believe would be helpful in supporting a family.
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

const initialValues = {
  app_q1_a: {
    option_a: false,
    option_b: false,
    option_c: false,
    option_d: false, // checkboxes
  },
  app_q1_b: '', // optional referral name
  app_q2: {
    option_a: false,
    option_b: false,
    option_c: false,
    option_d: false,
    option_e: false, // checkboxes
  },
  app_q3: false, // yes or no
  app_q4: 0, // 1-3, yes/no/maybe
  app_q5: '', // experience with kids
  app_q6_a: false, // yes or no
  app_q6_b: {
    answer_a: '',
    answer_b: '',
    answer_c: '', // list of certications/licenses
  },
}

export default function AppForm() {
  return (
    <Page>
      <MiddleSection>
        <Formik initialValues={initialValues}>
          {props => (
            <Form>
              <CheckboxOne {...props} />
              <CheckboxTwo {...props} />
              <RadioOne {...props} />
              <RadioTwo {...props} />
              <RadioThree {...props} />
            </Form>
          )}
        </Formik>
      </MiddleSection>
    </Page>
  )
}
