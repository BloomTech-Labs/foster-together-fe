import axiosWithAuth from '../../utils/axios/axiosWithAuth'
import { setNeighborsArray, setNeighError } from '../slices/neighSlice'

export const getNeighbors = () => async dispatch => {
  try {
    const { data } = axiosWithAuth().get('/neighbors')
    dispatch(setNeighborsArray(data))
  } catch (e) {
    dispatch(setNeighError(e.response.data))
  }
}
