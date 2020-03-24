import { axiosWithBaseURL } from '../../utils/axios/axiosWithBaseUrl'
import axiosWithAuth from '../../utils/axios/axiosWithAuth'
import { setAuthError, setUserType } from '../slices/authSlice'

export const login = values => async dispatch => {
  try {
    const { data } = await axiosWithBaseURL().post('/login', values)
    localStorage.setItem('token', data.token)
    localStorage.setItem('firstName', data.first_name)
    dispatch(setUserType(data.type))
  } catch (e) {
    localStorage.setItem('token', false)
    e.response
      ? dispatch(setAuthError(e.response.data))
      : dispatch(setAuthError(e))
  }
}

export const register = ({ first_name, email, password }) => async dispatch => {
  try {
    const { data } = await axiosWithBaseURL().post('/register', {
      first_name,
      email,
      password,
    })
    localStorage.setItem('token', data.token)
    localStorage.setItem('firstName', data.first_name)
  } catch (e) {
    localStorage.setItem('token', false)
    e.response
      ? dispatch(setAuthError(e.response.data))
      : dispatch(setAuthError(e))
  }
}

export const logout = () => async dispatch => {
  try {
    await axiosWithAuth().get('/logout')
    localStorage.setItem('token', false)
    localStorage.setItem('firstName', '')
    dispatch(setUserType(null))
  } catch (e) {
    localStorage.setItem('token', false)
    localStorage.setItem('firstName', '')
    e.response
      ? dispatch(setAuthError(e.response.data))
      : dispatch(setAuthError(e))
  }
}
