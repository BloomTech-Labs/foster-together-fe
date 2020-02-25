import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'


export default function SignUp(props) {
  const useStyles = makeStyles(theme => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(1),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }))
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const steps = ['Contact Info', 'Location Info', 'Review your Profile']

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    state: '',
    country: '',
  })

  function GetStepContent(step) {
    const changeHandler = e => {
      setUser({ ...user, [e.target.name]: e.target.value })
      console.log(user)
    }

    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <Typography variant='h6' gutterBottom>
              General Info
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='firstName'
                  name='firstName'
                  value={user.firstName}
                  label='First name'
                  fullWidth
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='lastName'
                  name='lastName'
                  label='Last name'
                  value={user.lastName}
                  fullWidth
                  autoComplete='lname'
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  required
                  id='phone'
                  name='phone'
                  label='Phone Number'
                  value={user.phone}
                  fullWidth
                  autoComplete='phone'
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  required
                  id='Email'
                  name='email'
                  label='Email'
                  value={user.email}
                  fullWidth
                  autoComplete='email'
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor='age-native-helper'>
                  Prefered Comunication
                </InputLabel>
                <Select
                  id='demo-simple-select'
                  label='Prefered Comunication'
                  placeholder='Prefered Comunication'
                  fullWidth
                >
                  <MenuItem value='Email'>Email</MenuItem>
                  <MenuItem value='Phone'>Phone Call</MenuItem>
                  <MenuItem value='Text'>Text</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </React.Fragment>
        )
      case 1:
        return (
          <React.Fragment>
            <Typography variant='h6' gutterBottom>
              General Info
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id='address'
                  name='address'
                  label='Address line 1'
                  onChange={changeHandler}
                  value={user.address}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='city'
                  name='city'
                  label='City'
                  onChange={changeHandler}
                  value={user.city}
                  fullWidth
                  autoComplete='billing address-level2'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='state'
                  name='state'
                  label='State/Province/Region'
                  value={user.state}
                  fullWidth
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  inputProps={{
                    maxLength: 5,
                  }}
                  id='zip'
                  name='zip'
                  label='Zip / Postal code'
                  onChange={changeHandler}
                  value={user.zip}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='country'
                  name='country'
                  onChange={changeHandler}
                  value={user.country}
                  label='Country'
                  fullWidth
                  autoComplete='billing country'
                />
              </Grid>
            </Grid>
          </React.Fragment>
        )
      case 2:
        return (
          <div>
            <h3>
              Name: {user.firstName} {user.lastName}{' '}
            </h3>
            <h3>Phone: {user.phone} </h3>
            <h3> Email: {user.email}</h3>
            <h3>Address: {user.address}</h3>
            <h3>City: {user.city}</h3>
            <h3>State: {user.state}</h3>
            <h3>Zip: {user.zip}</h3>
            <h3>Country: {user.country}</h3>
          </div>
        )
      case 3:
        return null
        console.log(user)
      default:
        throw new Error('Unknown step')
    }
  }

  const handleNext = () => {
    if (activeStep == 0) {
      const phoneno = /^\d{10}$/
      if (!user.phone.match(phoneno)) {
        alert('Please enter a valid phone number')
      } else {
        if (!user.email.includes('@' && '.')) {
          alert('please enter a valid email')
        } else {
          if (user.firstName && user.lastName && user.email && user.phone) {
            setActiveStep(activeStep + 1)
          } else alert('Missing a required field')
        }
      }
    }
    if (activeStep == 1) {
      const zip = /^\d{5}$/ 
      if (!user.zip.match(zip)) {
        alert('Please enter a valid zip code')
      } else {
        if (
          user.address &&
          user.state &&
          user.zip &&
          user.country &&
          user.city
        ) {
          setActiveStep(activeStep + 1)
        } else alert('Missing a required field')
      }
    }
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component='h1' variant='h4' align='center'>
            Sign Up
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
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
        </Paper>
      </main>
    </>
  )
}
