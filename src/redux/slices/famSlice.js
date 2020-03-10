import { createSlice } from '@reduxjs/toolkit'

export const famSlice = createSlice({
  name: 'fam',
  initialState: {
    familiesArray: [],
    famError: null,
  },
  reducers: {
    setFamiliesArray(state, action) {
      state.familiesArray = action.payload
    },
    setFamError(state, action) {
      state.authError = action.payload
    },
  },
})

export const { setFamiliesArray, setFamError } = famSlice.actions
export default famSlice.reducer
