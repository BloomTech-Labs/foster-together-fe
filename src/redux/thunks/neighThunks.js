import axiosWithAuth from '../../utils/axios/axiosWithAuth'
import { setNeighborsArray, setNeighError } from '../slices/neighSlice'
import { axiosWithBaseURL } from '../../utils/axios/axiosWithBaseUrl'

export const getNeighbors = () => async dispatch => {
  try {
    const { data } = await axiosWithAuth().get('/neighbors')
    dispatch(setNeighborsArray(data))
  } catch (e) {
    e.response
      ? dispatch(setNeighError(e.response.data))
      : dispatch(setNeighError(e))
  }
}

export const postNeighbor = (values, push) => async dispatch => {
  try {
    await axiosWithBaseURL().post('/neighbors', values)
    push('/confirmation')
  } catch (e) {
    e.response
      ? dispatch(setNeighError(e.response.data))
      : dispatch(setNeighError(e))
  }
}
