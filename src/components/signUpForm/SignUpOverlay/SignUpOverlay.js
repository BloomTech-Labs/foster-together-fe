import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { PageView } from '../../../Analytics'
//styled components
import {
  Container,
  Sidebar,
  MainContent,
  Logo,
  SidebarTitle,
  Instructions,
  ListItem,
  BackArrow,
  TabContainer,
  Tab,
  Stepper,
  Step,
  StepLabel,
  StepTitle,
  StepConnector,
  BtnContainer,
  BackBtn,
  NextBtn,
} from '../styles/signUpOverlayStyles'
//images
import logo from '../../../images/logo.svg'
import backArrow from '../../../images/icons/back-arrow.svg'
// child components
import ContactInfo from '../signUpComponents/ContactInfo'
import LocationInfo from '../signUpComponents/LocationInfo'
import ReviewInfo from '../signUpComponents/ReviewInfo'

export default function SignUp(props) {
  const history = useHistory()
  const [activeStep, setActiveStep] = useState(0)
  const steps = ['Contact Info', 'Location Info', 'Review']

  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    state: '',
  })

  function GetStepContent(step) {
    const changeHandler = e => {
      setUser({ ...user, [e.target.name]: e.target.value })
      console.log(user)
    }

    switch (step) {
      case 0:
        return <ContactInfo user={user} changeHandler={changeHandler} />
      case 1:
        return <LocationInfo user={user} changeHandler={changeHandler} />
      case 2:
        return <ReviewInfo user={user} />
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
      } else {
        if (!user.email.includes('@' && '.')) {
          alert('Please enter a valid email')
        } else {
          if (user.firstName && user.lastName && user.email && user.phone) {
            setActiveStep(activeStep + 1)
          } else alert('Missing a required field')
        }
      }
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
      Axios.post(
        'https://foster-together-back.herokuapp.com/api/neighbors',
        user
      )
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
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
      <Sidebar>
        <div>
          <Logo>
            <img src={logo} alt='Foster Together logo' />
          </Logo>
          <SidebarTitle>Registering as a Foster Neighbor</SidebarTitle>
          <Instructions>
            <ListItem>Fill out the application below.</ListItem>
            <ListItem>
              We’ll email or call to confirm your spot, and set up your
              background check.
            </ListItem>
            <ListItem>Process your background check online ($20).</ListItem>
            <ListItem>
              We’ll send an outline of our agenda a few days before the
              training.
            </ListItem>
          </Instructions>
        </div>
        <BackArrow>
          <img src={backArrow} alt='Back arrow icon' />
        </BackArrow>
      </Sidebar>
      <MainContent>
        <TabContainer>
          <Tab onClick={() => history.push('/login')}>
            <span>Log In</span>
          </Tab>
          <Tab active>
            <span>Register</span>
          </Tab>
        </TabContainer>
        <Stepper>
          {steps.map((step, index) => {
            // returns true or false and determines the color of the step
            const active = activeStep >= index
            return (
              <Step>
                {index > 0 && <StepConnector active={active} />}
                <StepLabel active={active}>{index + 1}</StepLabel>
                <StepTitle active={active}>{step}</StepTitle>
              </Step>
            )
          })}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            props.history.push('/home')
          ) : (
            <>
              {GetStepContent(activeStep)}
              <BtnContainer>
                {activeStep !== 0 && (
                  <BackBtn onClick={handleBack}>Back</BackBtn>
                )}
                <NextBtn>
                  {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
                </NextBtn>
              </BtnContainer>
            </>
          )}
        </>
      </MainContent>
    </Container>
  )
}
