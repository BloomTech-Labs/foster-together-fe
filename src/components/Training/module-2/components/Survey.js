import React from 'react'
import { Label, Input, Submit, Form } from '../../TrainStyles'
import { FormGroup, CheckLabel, Checkbox } from '../styles'

const questionOneData = [
  '2 hours a month (minimum for monthly meal drop-off)',
  '5 hours a month',
  '2 hours a week',
  '5 hours a week',
  'One weekend every two months',
  'One weekend a month',
]

const QuestionOne = ({ setFieldValue, values }) => {
  return (
    <FormGroup>
      <Label>
        How much time do you want to spend helping a foster family? *
        {questionOneData.map((answer, index) => (
          <CheckLabel
            key={index}
            onClick={() => {
              setFieldValue('m2_q3', index + 1)
            }}
          >
            {answer}
            <Checkbox radio checked={values.m2_q3 === index + 1} />
          </CheckLabel>
        ))}
      </Label>
    </FormGroup>
  )
}

const QuestionTwo = ({ setFieldValue, values }) => {
  const handleClick = value => {
    setFieldValue('m2_q4', value)
  }

  return (
    <FormGroup>
      <Label>
        Do you understand that the decision to add additional meals or helping
        tasks is at the discretion of you and the foster family? *
        <CheckLabel onClick={() => handleClick(true)}>
          Yes, I understand that adding additional meal and helping tasks would
          be at the discretion of me and the foster family.
          <Checkbox radio checked={values.m2_q4} />
        </CheckLabel>
        <CheckLabel onClick={() => handleClick(false)}>
          No.
          <Checkbox radio checked={!values.m2_q4} />
        </CheckLabel>
      </Label>
    </FormGroup>
  )
}

const QuestionThree = ({ setFieldValue, values }) => {
  const questionThreeData = [
    {
      text:
        'Additional meal drop-offs monthly (option to have foster parent provide a gift card for groceries)',
      value: values.answer_a1,
    },
    {
      text: 'Help around the house: Cleaning the kitchen',
      value: values.answer_a2,
    },
    { text: 'Help around the house: Laundry', value: values.answer_a3 },
    { text: 'Help around the house: Yardwork', value: values.answer_a4 },
    {
      text: 'Help around the house: Sweeping/cleaning floors',
      value: values.answer_a5,
    },
    {
      text:
        'Driving kids to visits with parents, therapy, or school activity (Requires foster agency/county approval. Contact Hope for help with approval.)',
      value: values.answer_a6,
    },
    {
      text:
        'Babysitting under six hours (May require foster agency/county approval. Contact Hope for help with approval.)',
      value: values.answer_a7,
    },
    {
      text:
        'Respite for more than six hours or overnight (Requires CPA/county approval. Contact Hope for help with approval.)',
      value: values.answer_a8,
    },
    { text: 'Other (please specify below)', value: values.answer_a9 },
  ]
  return (
    <>
      <FormGroup>
        <Label>
          As you get to know them, are you open to providing practical support
          to the foster family, beyond meals?
          {questionThreeData.map((question, index) => (
            <CheckLabel
              key={index}
              onClick={() =>
                setFieldValue(`answer_a${index + 1}`, !question.value)
              }
            >
              {question.text}
              <Checkbox checked={question.value} />
            </CheckLabel>
          ))}
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>
          Other ways I'd like to help (if any)
          <Input
            component='textarea'
            id='answer_b'
            name='answer_b'
            placeholder='Your answer here'
          />
        </Label>
      </FormGroup>
    </>
  )
}

const QuestionFour = ({ setFieldValue, values }) => {
  const handleClick = value => {
    setFieldValue('m2_q6', value)
  }

  return (
    <FormGroup>
      <Label>
        Do you understand that you may need a background check in order to
        provide assistance beyond meal drop-off? *
        <CheckLabel onClick={() => handleClick(true)}>
          Yes, I understand that may need a background check in order to provide
          assistance beyond meal meal drop-off.
          <Checkbox radio checked={values.m2_q6} />
        </CheckLabel>
        <CheckLabel onClick={() => handleClick(false)}>
          No.
          <Checkbox radio checked={!values.m2_q6} />
        </CheckLabel>
      </Label>
    </FormGroup>
  )
}

const QuestionFive = ({ setFieldValue, values }) => {
  const handleClick = value => {
    setFieldValue('m2_q7', value)
  }

  return (
    <FormGroup>
      <Label>
        Do you understand that Foster Together and the foster parents are here
        to help facilitate any needed background checks with the family's foster
        care agency or county, and that this process can take one to four weeks,
        depending on the requirements of the specific county or agency? *
        <CheckLabel onClick={() => handleClick(true)}>
          Yes
          <Checkbox radio checked={values.m2_q7} />
        </CheckLabel>
        <CheckLabel onClick={() => handleClick(false)}>
          No
          <Checkbox radio checked={!values.m2_q7} />
        </CheckLabel>
      </Label>
    </FormGroup>
  )
}

const Survey = props => {
  return (
    <Form>
      <QuestionOne {...props} />
      <QuestionTwo {...props} />
      <QuestionThree {...props} />
      <QuestionFour {...props} />
      <QuestionFive {...props} />
      <FormGroup>
        <Label>
          From what you’ve learned so far how can we improve the modules you’ve
          completed? What would you add, shorten, or eliminate? This program is
          always looking for ways to be better, so your feedback is definitely
          helpful!
          <Input
            component='textarea'
            id='m2_q8'
            name='m2_q8'
            placeholder='Your answer here'
          />
        </Label>
      </FormGroup>
      <Submit type='submit'>Complete Module 2</Submit>
      {props.errors.m2_q3 && props.touched.m2_q3 && (
        <p style={{ color: 'red' }}>Please answer all required questions</p>
      )}
    </Form>
  )
}

export default Survey
