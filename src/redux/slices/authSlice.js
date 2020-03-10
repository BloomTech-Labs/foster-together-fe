import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authError: null,
    userType: null,
  },
  reducers: {
    setFirstName(state, action) {
      state.firstName = action.payload
    },
    setUserType(state, action) {
      state.userType = action.payload
    },
  },
})

export const { setAuthError, setUserType } = authSlice.actions
export default authSlice.reducer
