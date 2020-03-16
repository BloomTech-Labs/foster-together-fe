import React from 'react'
import {
  FormGroup,
  Select,
  Option,
  Error,
} from '../../styles/contactInfoStyles'
import { States } from '../States'

const StateInput = ({ handleChange, values, errors, touched }) => {
  return (
    <FormGroup width='19%'>
      <Select
        id='state'
        name='state'
        value={values.state}
        onChange={handleChange}
      >
        <Option value='' disabled selected>
          State
        </Option>
        {States.map(state => (
          <Option key={state.value} value={state.value}>
            {state.label}
          </Option>
        ))}
      </Select>
      {errors.state && touched.state ? <Error>{errors.state}</Error> : null}
    </FormGroup>
  )
}

export default StateInput
