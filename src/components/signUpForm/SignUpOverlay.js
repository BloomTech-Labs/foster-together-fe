import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ContactInfo from './signUpComponents/ContactInfo'
import LocationInfo from './signUpComponents/LocationInfo'
import ReviewInfo from './signUpComponents/ReviewInfo'
import { useSignUpStyles } from './signUpOverlayStyles'
import {
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Tabs,
  Tab,
  Grid,
} from '@material-ui/core'
import Axios from 'axios'
import { PageView } from '../../Analytics'

export default function SignUp(props) {
  const history = useHistory()
  const classes = useSignUpStyles()
  const [activeStep, setActiveStep] = useState(0)
  const [value, setValue] = useState(1)
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
        'https://foster-together-back.herokuapp.com/api/neighbors', user
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

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    PageView()
  })

  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper} elevation={0}>
          <Grid
            container
            direction='row'
            alignItems='stretch'
            className={classes.container}
          >
            <Grid item direction='column' xs={3} className={classes.sideBar}>
              <img
                src='https://via.placeholder.com/200x85'
                alt='Foster Together logo'
              />
              <Typography variant='h6' color='primary'>
                Registering as a Foster Neighbor
              </Typography>
              <ol className={classes.list}>
                <li>Fill out the application below.</li>
                <li>
                  We’ll email or call to confirm your spot, and set up your
                  background check.
                </li>
                <li>Process your background check online ($20).</li>
                <li>
                  We’ll send an outline of our agenda a few days before the
                  training.
                </li>
              </ol>
            </Grid>
            <Grid item direction='column' xs={9} className={classes.form}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor='primary'
                textColor='primary'
                centered
                classes={{
                  indicator: classes.tabIndicator,
                }}
              >
                <Tab
                  label={<span className={classes.tabLabel}>Log In</span>}
                  onClick={() => history.push('/login')}
                />
                <Tab
                  className={classes.tab}
                  label={
                    <span
                      className={`${classes.tabLabel} ${classes.tabLabelActive}`}
                    >
                      Register
                    </span>
                  }
                />
              </Tabs>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel
                      StepIconProps={{
                        classes: { root: classes.icon },
                      }}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              <>
                {activeStep === steps.length ? (
                  props.history.push('/home')
                ) : (
                  <>
                    {GetStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1
                          ? 'Confirm Information'
                          : 'Next'}
                      </Button>
                    </div>
                  </>
                )}
              </>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </>
  )
}
