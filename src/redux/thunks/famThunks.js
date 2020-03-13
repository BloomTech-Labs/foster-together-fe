import {
  setFamiliesArray,
  setFamError,
  setSelectedFamily,
} from '../slices/famSlice'
import { axiosWithBaseURL } from '../../utils/axios/axiosWithBaseUrl'
import axiosWithAuth from '../../utils/axios/axiosWithAuth'

export const getFamilies = () => async dispatch => {
  try {
    const { data } = await axiosWithAuth().get('/families')
    dispatch(setFamiliesArray(data))
  } catch (e) {
    e.response
      ? dispatch(setFamError(e.response.data))
      : dispatch(setFamError(e))
  }
}

export const getFamilyById = id => async dispatch => {
  try {
    const { data } = await axiosWithAuth().get(`/families/${id}`)
    dispatch(setSelectedFamily(data))
  } catch (e) {
    e.response
      ? dispatch(setFamError(e.response.data))
      : dispatch(setFamError(e))
  }
}

export const postFamily = (values, push) => async dispatch => {
  try {
    await axiosWithBaseURL().post('/families', values)
    push('/confirmation')
  } catch (e) {
    e.response
      ? dispatch(setFamError(e.response.data))
      : dispatch(setFamError(e))
  }
}
