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
    <Typography variant='h6' gutterBottom>
      Contact Info
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
  </>
)

export default ContactInfo
