import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
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
  const [passwordConfirm, setPasswordConfirm] = useState('password')
  const [isNeighbor, setIsNeighbor] = useState(true)
  const steps = ['Contact Info', 'Location Info', 'Review']
  console.log(isNeighbor)

  const [user, setUser] = useState({
    first_name: 'test',
    last_name: 'test',
    phone: '5555555555',
    email: 'test@test.com',
    password: 'password',
    address: 'test',
    city: 'West Haven',
    zip: '06516',
    state: 'Connecticut',
  })

  function GetStepContent(step) {
    const changeHandler = e => {
      setUser({ ...user, [e.target.name]: e.target.value })
    }

    const changePasswordConfirm = e => {
      setPasswordConfirm(e.target.value)
    }

    switch (step) {
      case 0:
        return (
          <ContactInfo
            user={user}
            changeHandler={changeHandler}
            passwordConfirm={passwordConfirm}
            changePasswordConfirm={changePasswordConfirm}
          />
        )
      case 1:
        return <LocationInfo user={user} changeHandler={changeHandler} />
      case 2:
        return <ReviewInfo user={user} setIsNeighbor={setIsNeighbor} />
      case 3:
        console.log(user)
        return null
      default:
        throw new Error('Unknown step')
    }
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
        {GetStepContent(activeStep)}
        <Buttons
          steps={steps}
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      </MainContent>
    </Container>
  )
}
