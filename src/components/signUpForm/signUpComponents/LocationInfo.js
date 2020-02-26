import React from 'react'
import { Typography, Grid, TextField, MenuItem } from '@material-ui/core'
import {States} from './States';

const LocationInfo = ({ user, changeHandler }) => (
  <>
    <Typography variant='h6' gutterBottom>
      Location Info
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
          select
          id='state'
          name='state'
          label='State/Province/Region'
          value={user.state}
          fullWidth
          onChange={changeHandler}>
        {States.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        </TextField>
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
    </Grid>
  </>
)

export default LocationInfo
