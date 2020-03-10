import axiosWithAuth from '../../utils/axios/axiosWithAuth'
import { setNeighborsArray, setNeighError } from '../slices/neighSlice'
import { axiosWithBaseURL } from '../../utils/axios/axiosWithBaseUrl'

export const getNeighbors = () => async dispatch => {
  try {
    const { data } = await axiosWithAuth().get('/neighbors')
    dispatch(setNeighborsArray(data))
  } catch (e) {
    dispatch(setNeighError(e.response.data))
  }
}

export const postNeighbor = values => async dispatch => {
  try {
    await axiosWithBaseURL().post('/neighbors', values)
  } catch (e) {
    dispatch(setNeighError(e.response.data))
  }
}
