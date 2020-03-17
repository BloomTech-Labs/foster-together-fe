import {
  setMembersArray,
  setMemError,
  setSelectedMember,
} from '../slices/memSlice'
import { axiosWithBaseURL } from '../../utils/axios/axiosWithBaseUrl'
import axiosWithAuth from '../../utils/axios/axiosWithAuth'

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

export const getMemberById = (type, id) => async dispatch => {
  try {
    const { data } = await axiosWithAuth().get(`/members/${type}/${id}`)
    dispatch(setSelectedMember(data))
  } catch (e) {
    e.response
      ? dispatch(setMemError(e.response.data))
      : dispatch(setMemError(e))
  }
}

export const postMember = (type, values, push) => async dispatch => {
  try {
    await axiosWithBaseURL().post(`/members/${type}`, values)
    push('/confirmation')
  } catch (e) {
    e.response
      ? dispatch(setMemError(e.response.data))
      : dispatch(setMemError(e))
  }
}
