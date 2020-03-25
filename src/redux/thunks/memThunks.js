import {
  setMembersArray,
  setMemError,
  setSelectedMember,
} from '../slices/memSlice'
import { axiosWithBaseURL } from '../../utils/axios/axiosWithBaseUrl'
import axiosWithAuth from '../../utils/axios/axiosWithAuth'
import axios from 'axios'

export const getMembers = () => async dispatch => {
  try {
    const { data } = await axiosWithAuth().get('/members')
    dispatch(setMembersArray(data))
  } catch (e) {
    e.response
      ? dispatch(setMemError(e.response.data))
      : dispatch(setMemError(e))
  }
}

export const getMemberById = id => async dispatch => {
  try {
    const { data } = await axiosWithAuth().get(`/members/${id}`)
    dispatch(setSelectedMember(data))
  } catch (e) {
    e.response
      ? dispatch(setMemError(e.response.data))
      : dispatch(setMemError(e))
  }
}

export const postMember = (type, values, push) => async dispatch => {
  const { data } = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${values.address}%20${values.city}%20${values.state}.json?country=US&access_token=pk.eyJ1IjoiYnNjaGF0emoiLCJhIjoiY2s3MHlnMGRiMDFndjNmbGN5NGN6aDllcSJ9.6U2mM86ENxVdKiXRRt6bYw`
  )
  const user = {
    ...values,
    longitude: data.features[0].geometry.coordinates[0],
    latitude: data.features[0].geometry.coordinates[1],
  }

  try {
    await axiosWithBaseURL().post(`/members/${type}`, user)
    localStorage.setItem('token', data.token)
    if (type === 'neighbors') {
      push('/application')
    } else push('/userProfile')
  } catch (e) {
    e.response
      ? dispatch(setMemError(e.response.data))
      : dispatch(setMemError(e))
  }
}
