import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { axiosWithBaseURL } from '../../../utils/axios/axiosWithBaseUrl'
import { PageView } from '../../../utils/analytics'
import { MainContent } from '../styles/signUpOverlayStyles'
import { Container } from '../../style'
import Sidebar from './Sidebar'
import Tabs from './Tabs'
import Stepper from './Stepper'
import Buttons from './Buttons'
import ContactInfo from '../signUpComponents/ContactInfo'
import LocationInfo from '../signUpComponents/LocationInfo'
import ReviewInfo from '../signUpComponents/ReviewInfo'

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
      // const phoneno = /^\d{10}$/
      // if (!user.phone.match(phoneno)) {
      //   alert('Please enter a valid phone number')
      // } else if (!user.email.includes('@' && '.')) {
      //   alert('Please enter a valid email')
      // } else if (user.password !== passwordConfirm) {
      //   alert('Password does not match')
      // }
      setActiveStep(activeStep + 1)
    } else if (activeStep === 1) {
      // const zip = /^\d{5}$/
      // if (!user.zip.match(zip)) {
      //   alert('Please enter a valid zip code')
      // }
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

  const SignUpSchema = Yup.object().shape({
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
            address: '',
            city: '',
            zip: '',
            state: '',
          }}
          validationSchema={SignUpSchema}
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
