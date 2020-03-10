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

  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: '',
    address: '',
    city: '',
    zip: '',
    state: '',
  })

  const changeHandler = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const changePasswordConfirm = e => {
    setPasswordConfirm(e.target.value)
  }

  const handleNext = () => {
    if (activeStep === 0) {
      const phoneno = /^\d{10}$/
      if (!user.phone.match(phoneno)) {
        alert('Please enter a valid phone number')
      } else if (!user.email.includes('@' && '.')) {
        alert('Please enter a valid email')
      } else if (user.password !== passwordConfirm) {
        alert('Password does not match')
      } else if (
        user.first_name &&
        user.last_name &&
        user.email &&
        user.phone &&
        user.password
      ) {
        setActiveStep(activeStep + 1)
      } else alert('Missing a required field')
    }
    if (activeStep === 1) {
      const zip = /^\d{5}$/
      if (!user.zip.match(zip)) {
        alert('Please enter a valid zip code')
      } else {
        if (user.address && user.state && user.zip && user.city) {
          setActiveStep(activeStep + 1)
        } else alert('Missing a required field')
      }
    }
    if (activeStep === 2) {
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
          onSubmit={values => handleNext(values)}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
              {activeStep === 0 ? (
                <ContactInfo
                  user={user}
                  changeHandler={changeHandler}
                  passwordConfirm={passwordConfirm}
                  changePasswordConfirm={changePasswordConfirm}
                  {...props}
                />
              ) : activeStep === 1 ? (
                <LocationInfo
                  user={user}
                  changeHandler={changeHandler}
                  {...props}
                />
              ) : (
                <ReviewInfo
                  user={user}
                  setIsNeighbor={setIsNeighbor}
                  {...props}
                />
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
