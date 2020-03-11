import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authError: null,
    userType: null,
  },
  reducers: {
    setAuthError(state, action) {
      state.authError = action.payload
    },
    setUserType(state, action) {
      state.userType = action.payload
    },
  },
})

export const { setAuthError, setUserType } = authSlice.actions
export default authSlice.reducer
