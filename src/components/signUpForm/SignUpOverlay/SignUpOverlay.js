import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { PageView } from '../../../utils/analytics/index'
import { useDispatch } from 'react-redux'
import { postMember } from '../../../redux/thunks/memThunks'
import { ContactSchema, LocationSchema } from '../../../utils/yupSchemas'
import { FlexCenter } from '../../../GlobalStyles'
import {
  Container,
  Sidebar,
  Logo,
  SidebarTitle,
  TabContainer,
  Tab,
} from '../../style'
import {
  MainContent,
  Instructions,
  ListItem,
  Stepper,
  StepLabel,
  StepTitle,
  StepConnector,
  BtnContainer,
  BackBtn,
  NextBtn,
} from './signUpOverlayStyles'
import logo from '../../../images/logo.png'
import backArrow from '../../../images/icons/back-arrow.svg'

// pages
import ContactInfo from '../signUpComponents/ContactInfo'
import LocationInfo from '../signUpComponents/LocationInfo'
import ReviewInfo from '../signUpComponents/ReviewInfo'
import axios from 'axios'

const user = {
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
  latitude: '',
  longitude: '',
}

const handleNext = (
  user,
  activeStep,
  setActiveStep,
  isNeighbor,
  dispatch,
  push
) => {
  if (activeStep === 0) {
    setActiveStep(activeStep + 1)
  } else if (activeStep === 1) {
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${user.address}%20${user.city}%20${user.state}.json?country=US&access_token=pk.eyJ1IjoiYnNjaGF0emoiLCJhIjoiY2s3MHlnMGRiMDFndjNmbGN5NGN6aDllcSJ9.6U2mM86ENxVdKiXRRt6bYw`)
    .then(res => {
      //longitude
      console.log(res.data.features[0].geometry.coordinates[0])
      user = ({...user, longitude: res.data.features[0].geometry.coordinates[0]})
      //latitude
      console.log(res.data.features[0].geometry.coordinates[1])
      user = ({...user, latitude: res.data.features[0].geometry.coordinates[1]})
      console.log(user)
  })
    setActiveStep(activeStep + 1)
  } else if (activeStep === 2) {
    if (isNeighbor) dispatch(postMember('neighbors', user, push))
    else dispatch(postMember('families', user, push))
  }
}

const SidebarWrapper = () => {
  return (
    <Sidebar>
      <div>
        <Logo>
          <img src={logo} alt='Foster Together logo' />
        </Logo>
        <SidebarTitle>Registering as a Foster Neighbor</SidebarTitle>
        <Instructions>
          <ListItem>Fill out the application below.</ListItem>
          <ListItem>
            We’ll email or call to confirm your spot, and set up your background
            check.
          </ListItem>
          <ListItem>Process your background check online ($20).</ListItem>
          <ListItem>
            We’ll send an outline of our agenda a few days before the training.
          </ListItem>
        </Instructions>
      </div>
      <div>
        <img src={backArrow} alt='Back arrow icon' />
      </div>
    </Sidebar>
  )
}

const Tabs = () => {
  const history = useHistory()
  return (
    <TabContainer>
      <Tab onClick={() => history.push('/login')}>
        <span>Log In</span>
      </Tab>
      <Tab active>
        <span>Register</span>
      </Tab>
    </TabContainer>
  )
}

const StepperWrapper = ({ steps, activeStep }) => {
  return (
    <Stepper>
      {steps.map((step, index) => {
        // returns true or false and determines the color of the step
        const active = activeStep >= index
        return (
          <FlexCenter key={step}>
            {index > 0 && <StepConnector active={active} />}
            <StepLabel active={active}>{index + 1}</StepLabel>
            <StepTitle active={active}>{step}</StepTitle>
          </FlexCenter>
        )
      })}
    </Stepper>
  )
}

const Buttons = ({ steps, activeStep, setActiveStep }) => {
  return (
    <BtnContainer>
      {activeStep !== 0 && (
        <BackBtn type='button' onClick={() => setActiveStep(activeStep - 1)}>
          Back
        </BackBtn>
      )}
      <NextBtn type='submit'>
        {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
      </NextBtn>
    </BtnContainer>
  )
}

const FormWrapper = ({ steps, activeStep, setActiveStep }) => {
  const { push } = useHistory()
  const dispatch = useDispatch()
  const [isNeighbor, setIsNeighbor] = useState(true)

  return (
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
  )
}

export default function SignUp() {
  const [activeStep, setActiveStep] = useState(0)
  const steps = ['Contact Info', 'Location Info', 'Review']

  useEffect(() => {
    PageView()
  }, [])

  return (
    <Container>
      <SidebarWrapper />
      <MainContent>
        <Tabs />
        <StepperWrapper steps={steps} activeStep={activeStep} />
        <FormWrapper
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </MainContent>
    </Container>
  )
}
