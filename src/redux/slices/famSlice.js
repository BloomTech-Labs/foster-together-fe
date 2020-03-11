import { createSlice } from '@reduxjs/toolkit'

export const famSlice = createSlice({
  name: 'fam',
  initialState: {
    familiesArray: [],
    famError: null,
    selectedFamily: {},
  },
  reducers: {
    setFamiliesArray(state, action) {
      state.familiesArray = action.payload
    },
    setFamError(state, action) {
      state.famError = action.payload
    },
    setSelectedFamily(state, action) {
      state.selectedFamily = action.payload
    },
  },
})

export const {
  setFamiliesArray,
  setFamError,
  setSelectedFamily,
} = famSlice.actions
export default famSlice.reducer
