import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik } from 'formik'
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
import { postNeighbor } from '../../../redux/thunks/neighThunks'
import { postFamily } from '../../../redux/thunks/famThunks'
import { ContactSchema, LocationSchema } from '../../../utils/yupSchemas'

export default function SignUp() {
  const { push } = useHistory()
  const dispatch = useDispatch()
  const [activeStep, setActiveStep] = useState(0)
  const [isNeighbor, setIsNeighbor] = useState(true)
  const steps = ['Contact Info', 'Location Info', 'Review']

  const handleNext = user => {
    if (activeStep === 0) {
      setActiveStep(activeStep + 1)
    } else if (activeStep === 1) {
      setActiveStep(activeStep + 1)
    } else if (activeStep === 2) {
      if (isNeighbor) dispatch(postNeighbor(user, push))
      else dispatch(postFamily(user, push))
    }
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

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
          initialValues={{
            first_name: '',
            last_name: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
            address: '',
            city: '',
            zip: '',
            state: '',
          }}
          validationSchema={activeStep === 0 ? ContactSchema : LocationSchema}
          onSubmit={values => handleNext(values)}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
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
                handleNext={handleNext}
                handleBack={handleBack}
              />
            </form>
          )}
        </Formik>
      </MainContent>
    </Container>
  )
}
