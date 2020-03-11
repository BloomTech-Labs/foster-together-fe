import { createSlice } from '@reduxjs/toolkit'

export const neighSlice = createSlice({
  name: 'neigh',
  initialState: {
    neighborsArray: [],
    neighError: null,
    selectedNeighbor: {},
  },
  reducers: {
    setNeighborsArray(state, action) {
      state.neighborsArray = action.payload
    },
    setNeighError(state, action) {
      state.neighError = action.payload
    },
    setSelectedNeighbor(state, action) {
      state.selectedNeighbor = action.payload
    },
  },
})

export const {
  setNeighborsArray,
  setNeighError,
  setSelectedNeighbor,
} = neighSlice.actions
export default neighSlice.reducer
