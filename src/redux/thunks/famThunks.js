import { setFamiliesArray, setFamError } from '../slices/famSlice'
import { axiosWithBaseURL } from '../../utils/axios/axiosWithBaseUrl'

export const getFamilies = () => async dispatch => {
  try {
    const { data } = await axiosWithBaseURL().get('/families')
    dispatch(setFamiliesArray(data))
  } catch (e) {
    dispatch(setFamError(e.response.data))
  }
}
