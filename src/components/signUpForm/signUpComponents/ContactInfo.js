import React from 'react'
import {
  Typography,
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'

const ContactInfo = ({ user, changeHandler }) => (
  <>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <InputLabel htmlFor='firstName'>First Name</InputLabel>
        <TextField
          required
          id='firstName'
          name='firstName'
          value={user.firstName}
          placeholder='Type first name here'
          variant='filled'
          fullWidth
          onChange={changeHandler}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputLabel htmlFor='lastName'>Last Name</InputLabel>
        <TextField
          required
          id='lastName'
          name='lastName'
          placeholder='Type last name here'
          variant='filled'
          value={user.lastName}
          fullWidth
          autoComplete='lname'
          onChange={changeHandler}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <TextField
          required
          id='Email'
          name='email'
          placeholder='Email'
          variant='filled'
          value={user.email}
          fullWidth
          autoComplete='email'
          onChange={changeHandler}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <InputLabel htmlFor='phone'>Phone</InputLabel>
        <TextField
          required
          id='phone'
          name='phone'
          placeholder='Phone Number'
          variant='filled'
          value={user.phone}
          fullWidth
          autoComplete='phone'
          onChange={changeHandler}
        />
      </Grid>
      <Grid item xs={12}>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <TextField
          required
          id='password'
          name='password'
          placeholder='Password'
          variant='filled'
          value={user.phone}
          fullWidth
          autoComplete='phone'
          onChange={changeHandler}
        />
      </Grid>
      <Grid item xs={12}>
        <InputLabel htmlFor='password'>Confirm Password</InputLabel>
        <TextField
          required
          id='confirmPassword'
          name='confirmPassword'
          placeholder='Confirm Password'
          variant='filled'
          value={user.phone}
          fullWidth
          autoComplete='phone'
          onChange={changeHandler}
        />
      </Grid>
    </Grid>
  </>
)

export default ContactInfo
