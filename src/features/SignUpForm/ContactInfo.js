import React, { useEffect } from 'react'
import {
  Grid,
  Typography,
  TextField,
  FormConrollable,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core'
import { sizing } from '@material-ui/system'
import { setUserFirstName, setUserLastName } from './SignUpSlice'

export default function AddressForm(props) {
    console.log(props)
    useEffect(() => {
        console.log('hi')
    }, [props.step])
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
            label='First name'
            fullWidth
            autoComplete='fname'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='lastName'
            name='lastName'
            label='Last name'
            fullWidth
            autoComplete='lname'
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            required
            id='phone'
            name='phone'
            label='Phone Number'
            fullWidth
            autoComplete='phone'
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            required
            id='Email'
            name='Email'
            label='Email'
            fullWidth
            autoComplete='email'
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
}
