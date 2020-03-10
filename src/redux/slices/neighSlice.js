import { createSlice } from '@reduxjs/toolkit'

export const neighSlice = createSlice({
  name: 'neigh',
  initialState: {
    neighborsArray: [],
    neighError: null,
  },
  reducers: {
    setNeighborsArray(state, action) {
      state.first_name = action.payload
    },
    setNeighError(state, action) {
      state.authError = action.payload
    },
  },
})

export const { setNeighborsArray, setNeighError } = neighSlice.actions
export default neighSlice.reducer
