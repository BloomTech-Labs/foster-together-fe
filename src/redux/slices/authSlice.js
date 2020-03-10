import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    firstName: '',
    authError: null,
    userType: null,
  },
  reducers: {
    setFirstName(state, action) {
      state.firstName = action.payload
    },
    setAuthError(state, action) {
      state.authError = action.payload
    },
    setUserType(state, action) {
      state.userType = action.payload
    },
  },
})

export const { setFirstName, setAuthError, setUserType } = authSlice.actions
export default authSlice.reducer
