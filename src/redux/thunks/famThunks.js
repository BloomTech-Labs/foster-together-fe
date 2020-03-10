import axiosWithAuth from '../../utils/axios/axiosWithAuth'
import { setFamiliesArray, setFamError } from '../slices/famSlice'

export const getFamilies = () => async dispatch => {
  try {
    const { data } = axiosWithAuth().get('/families')
    dispatch(setFamiliesArray(data))
  } catch (e) {
    dispatch(setFamError(e.response.data))
  }
}
