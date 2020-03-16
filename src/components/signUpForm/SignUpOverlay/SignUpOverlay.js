import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { MainContent } from '../styles/signUpOverlayStyles'
import { Container } from '../../style'
import Sidebar from './Sidebar'
import Tabs from './Tabs'
import Stepper from './Stepper'
import Buttons from './Buttons'
import ContactInfo from '../signUpComponents/ContactInfo'
import LocationInfo from '../signUpComponents/LocationInfo'
import ReviewInfo from '../signUpComponents/ReviewInfo'
import { PageView } from '../../../utils/analytics/index'
import { useDispatch } from 'react-redux'
import { ContactSchema, LocationSchema } from '../../../utils/yupSchemas'
import { handleNext } from './handles'
import { user } from './initialValues'

export default function SignUp() {
  const { push } = useHistory()
  const dispatch = useDispatch()
  const [activeStep, setActiveStep] = useState(0)
  const [isNeighbor, setIsNeighbor] = useState(true)
  const steps = ['Contact Info', 'Location Info', 'Review']

  useEffect(() => {
    PageView()
  }, [])

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Tabs />
        <Stepper steps={steps} activeStep={activeStep} />
        <Formik
          initialValues={user}
          validationSchema={activeStep === 0 ? ContactSchema : LocationSchema}
          onSubmit={values =>
            handleNext(
              values,
              activeStep,
              setActiveStep,
              isNeighbor,
              dispatch,
              push
            )
          }
        >
          {props => (
            <Form>
              {activeStep === 0 ? (
                <ContactInfo {...props} />
              ) : activeStep === 1 ? (
                <LocationInfo {...props} />
              ) : (
                <ReviewInfo setIsNeighbor={setIsNeighbor} {...props} />
              )}
              <Buttons
                steps={steps}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            </Form>
          )}
        </Formik>
      </MainContent>
    </Container>
  )
}
