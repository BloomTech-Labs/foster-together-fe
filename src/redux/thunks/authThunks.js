import { axiosWithBaseURL } from '../../utils/axios/axiosWithBaseUrl'
import axiosWithAuth from '../../utils/axios/axiosWithAuth'
import { setFirstName, setAuthError, setUserType } from '../slices/authSlice'
import { getFamilies } from './famThunks'
import { getNeighbors } from './neighThunks'

export const login = values => async dispatch => {
  try {
    const { data } = await axiosWithBaseURL().post('/login', values)
    localStorage.setItem('token', data.token)
    dispatch(setFirstName(data.first_name))
    dispatch(setUserType(data.user_type))
    if (data.user_type === 'admin')
      dispatch(getFamilies()) && dispatch(getNeighbors())
  } catch (e) {
    localStorage.setItem('token', false)
    dispatch(setAuthError(e.response.data))
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
    dispatch(setFirstName(data.first_name))
  } catch (e) {
    localStorage.setItem('token', false)
    dispatch(setAuthError(e.response.data))
  }
}

export const logout = () => async dispatch => {
  try {
    await axiosWithAuth().get('/logout')
    localStorage.setItem('token', false)
  } catch (e) {
    localStorage.setItem('token', false)
    dispatch(setAuthError(e.response.data))
  }
}
