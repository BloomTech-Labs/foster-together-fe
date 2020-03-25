import { axiosWithBaseURL } from '../../utils/axios/axiosWithBaseUrl'
import axiosWithAuth from '../../utils/axios/axiosWithAuth'
import { setAuthError, setUserType, setUserInfo } from '../slices/authSlice'

export const login = (values, push) => async dispatch => {
  try {
    const { data } = await axiosWithBaseURL().post('/login', values)
    localStorage.setItem('token', data.token)
    localStorage.setItem('firstName', data.user.first_name)
    dispatch(setUserType(data.user.type))
    dispatch(setUserInfo(data.user))
    if (data.user.type === 'admins') {
      push('/dashboard')
    } else if (data.user.type === 'families' || data.user.type === 'neighbors')
      push('/userProfile')
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
    localStorage.setItem('firstName', data.user.first_name)
    dispatch(setUserInfo(data.user.saved))
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
    dispatch(setUserInfo(null))
  } catch (e) {
    localStorage.setItem('token', false)
    localStorage.setItem('firstName', '')
    dispatch(setUserInfo(null))
    e.response
      ? dispatch(setAuthError(e.response.data))
      : dispatch(setAuthError(e))
  }
}
