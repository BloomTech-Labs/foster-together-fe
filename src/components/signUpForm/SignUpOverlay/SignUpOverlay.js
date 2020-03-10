import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { axiosWithBaseURL } from '../../../utils/axios/axiosWithBaseUrl'
import { MainContent } from '../styles/signUpOverlayStyles'
import { Container } from '../../style'
import Sidebar from './Sidebar'
import Tabs from './Tabs'
import Stepper from './Stepper'
import Buttons from './Buttons'
import ContactInfo from '../signUpComponents/ContactInfo'
import LocationInfo from '../signUpComponents/LocationInfo'
import ReviewInfo from '../signUpComponents/ReviewInfo'
import { Event, PageView } from '../../../utils/analytics/index'

export default function SignUp() {
  const history = useHistory()
  const [activeStep, setActiveStep] = useState(0)
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [isNeighbor, setIsNeighbor] = useState(true)
  const steps = ['Contact Info', 'Location Info', 'Review']

  const changePasswordConfirm = e => {
    setPasswordConfirm(e.target.value)
  }

  const handleNext = user => {
    if (activeStep === 0) {
      setActiveStep(activeStep + 1)
    } else if (activeStep === 1) {
      setActiveStep(activeStep + 1)
    } else if (activeStep === 2) {
      if (isNeighbor) {
        axiosWithBaseURL()
          .post('/neighbors', user)
          .then(res => {
            console.log(res)
            history.push('/confirmation')
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        axiosWithBaseURL()
          .post('/families', user)
          .then(res => {
            console.log(res)
            history.push('/confirmation')
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  useEffect(() => {
    PageView()
  }, [])

  const ContactSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Invalid phone number')
      .required('Phone number is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  })

  const LocationSchema = Yup.object().shape({
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zip: Yup.string()
      .matches(/^\d{5}$/, 'Invalid ZIP')
      .required('ZIP is required'),
  })

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
                <ContactInfo
                  passwordConfirm={passwordConfirm}
                  changePasswordConfirm={changePasswordConfirm}
                  {...props}
                />
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
