import React from 'react'
import { useHistory } from 'react-router-dom'
import axiosWithAuth from '../../../utils/axios/axiosWithAuth'
import { Formik } from 'formik'
import { AppSchema } from '../../../utils/yupSchemas'
import {
  Page,
  MiddleSection,
  Label,
  Form,
  FormGroup,
  Input,
  CheckLabel,
  Checkbox,
  Submit,
  Error,
} from './ApplicationStyles'

const initialValues = {
  app_q1_a: {
    option_1: false,
    option_2: false,
    option_3: false,
    option_4: false, // checkboxes
  },
  app_q1_b: '', // optional referral name
  app_q2: {
    option_1: false,
    option_2: false,
    option_3: false,
    option_4: false,
    option_5: false, // checkboxes
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

const CheckboxOne = ({ values, setFieldValue, errors, touched }) => {
  return (
    <FormGroup>
      <Label>
        How did you hear about us? * (check all that apply)
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q1_a.option_1', !values.app_q1_a.option_1)
          }}
        >
          <Checkbox
            id='app_q1_a.option_1'
            name='app_q1_a.option_1'
            checked={values.app_q1_a.option_1}
          />
          Referral from a friend or family
        </CheckLabel>
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q1_a.option_2', !values.app_q1_a.option_2)
          }}
        >
          <Checkbox
            id='app_q1_a.option_2'
            name='app_q1_a.option_2'
            checked={values.app_q1_a.option_2}
          />
          Social Media platform
        </CheckLabel>
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q1_a.option_3', !values.app_q1_a.option_3)
          }}
        >
          <Checkbox
            id='app_q1_a.option_3'
            name='app_q1_a.option_3'
            checked={values.app_q1_a.option_3}
          />
          Radio Station
        </CheckLabel>
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q1_a.option_4', !values.app_q1_a.option_4)
          }}
          style={{ marginBottom: 35 }}
        >
          <Checkbox
            id='app_q1_a.option_4'
            name='app_q1_a.option_4'
            checked={values.app_q1_a.option_4}
          />
          Current Foster Together member
        </CheckLabel>
      </Label>
      {errors?.app_q1_a && touched?.app_q1_a && (
        <Error>{errors?.app_q1_a}</Error>
      )}
      <Label>
        Can you give us the name of the person or platform?
        <Input id='app_q1_b' name='app_q1_b' placeholder='Your answer here' />
      </Label>
    </FormGroup>
  )
}

const CheckboxTwo = ({ values, setFieldValue, errors, touched }) => {
  return (
    <FormGroup>
      <Label>
        How do you see yourself helping? (check all that apply): *
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q2.option_1', !values.app_q2.option_1)
          }}
        >
          <Checkbox
            id='app_q2.option_1'
            name='app_q2.option_1'
            checked={values.app_q2.option_1}
          />
          Babysitting for a foster family
        </CheckLabel>
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q2.option_2', !values.app_q2.option_2)
          }}
        >
          <Checkbox
            id='app_q2.option_2'
            name='app_q2.option_2'
            checked={values.app_q2.option_2}
          />
          Driving a child to activities and appointments
        </CheckLabel>
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q2.option_3', !values.app_q2.option_3)
          }}
        >
          <Checkbox
            id='app_q2.option_3'
            name='app_q2.option_3'
            checked={values.app_q2.option_3}
          />
          Dropping a meal off to a foster family
        </CheckLabel>
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q2.option_4', !values.app_q2.option_4)
          }}
        >
          <Checkbox
            id='app_q2.option_4'
            name='app_q2.option_4'
            checked={values.app_q2.option_4}
          />
          Donating new/gently used clothes, toys, supplies
        </CheckLabel>
        <CheckLabel
          onClick={() => {
            setFieldValue('app_q2.option_5', !values.app_q2.option_5)
          }}
        >
          <Checkbox
            id='app_q2.option_5'
            name='app_q2.option_5'
            checked={values.app_q2.option_5}
          />
          Delivering a package of clothes, toys, supplies
        </CheckLabel>
      </Label>
      {errors?.app_q2 && touched?.app_q2 && <Error>{errors?.app_q2}</Error>}
    </FormGroup>
  )
}

const RadioOne = ({ values, setFieldValue, errors, touched }) => {
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
      {errors?.app_q3 && touched?.app_q3 && <Error>{errors?.app_q3}</Error>}
    </FormGroup>
  )
}

const RadioTwo = ({ values, setFieldValue, errors, touched }) => {
  const handleClick = value => {
    setFieldValue('app_q4', value)
  }
  return (
    <>
      <FormGroup>
        <Label>
          Foster care is meant to be temporary. After their parents work to
          create a safe home, 60% of kids in Colorado foster care go home to mom
          or dad. It's important to give kids and families continuous support,
          including after the kids go home to their family of origin. Are you
          open to supporting a family whose children have been sent home
          post-foster care?
          <CheckLabel onClick={() => handleClick(1)}>
            <Checkbox radio checked={values.app_q4 === 1} />
            Yes, I'm open to supporting a family whose children have been sent
            home post-foster care
          </CheckLabel>
          <CheckLabel onClick={() => handleClick(2)}>
            <Checkbox radio checked={values.app_q4 === 2} />
            No, I'd prefer to just work with foster families.
          </CheckLabel>
          <CheckLabel
            onClick={() => handleClick(3)}
            style={{ marginBottom: 35 }}
          >
            <Checkbox radio checked={values.app_q4 === 3} />
            Maybe, if I can get training on how to be most helpful to these
            families I’m open to supporting that family.
          </CheckLabel>
        </Label>
        {errors?.app_q4 && touched?.app_q4 && <Error>{errors?.app_q4}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>
          Tell us about your experience with, or knowledge of, supporting kids
          and families of any kind. What gifts and qualities do you bring to
          this work?
          <Input
            component='textarea'
            id='app_q5'
            name='app_q5'
            placeholder='Your answer here'
            height='10rem'
          />
        </Label>
        {errors?.app_q5 && touched?.app_q5 && <Error>{errors?.app_q5}</Error>}
      </FormGroup>
    </>
  )
}

const RadioThree = ({ values, setFieldValue, errors, touched }) => {
  const handleClick = value => {
    setFieldValue('app_q6_a', value)
  }
  return (
    <FormGroup>
      <Label>
        Do you hold any certifications or licenses relevant to child care and
        safety that you feel could be of help to how you support as a Foster
        Neighbor? * (If so, please list them below separately)
        <CheckLabel onClick={() => handleClick(false)}>
          <Checkbox radio checked={!values.app_q6_a} />
          No, I DO NOT have certifications/licenses relevant to child care and
          safety that I believe would be helpful in supporting a family.
        </CheckLabel>
        <CheckLabel onClick={() => handleClick(true)}>
          <Checkbox radio checked={values.app_q6_a} />
          Yes, I have certifications/licenses relevant to child care and safety
          that I believe would be helpful in supporting a family.
        </CheckLabel>
        <Input
          id='app_q6_b.answer_a'
          name='app_q6_b.answer_a'
          placeholder='Certification/License 1'
        />
        <Input
          id='app_q6_b.answer_b'
          name='app_q6_b.answer_b'
          placeholder='Certification/License 2'
        />
        <Input
          id='app_q6_b.answer_c'
          name='app_q6_b.answer_c'
          placeholder='Certification/License 3'
        />
      </Label>
    </FormGroup>
  )
}

export default function AppForm() {
  const { push } = useHistory()
  const handleSubmit = values => {
    // axiosWithAuth()
    //   .post('/application', values)
    //   .then(() => {
    //     push('/userProfile')
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    console.log(values)
  }
  return (
    <Page>
      <MiddleSection>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={AppSchema}
        >
          {props => (
            <Form>
              <CheckboxOne {...props} />
              <CheckboxTwo {...props} />
              <RadioOne {...props} />
              <RadioTwo {...props} />
              <RadioThree {...props} />
              <Submit type='submit'>Submit</Submit>
            </Form>
          )}
        </Formik>
      </MiddleSection>
    </Page>
  )
}
