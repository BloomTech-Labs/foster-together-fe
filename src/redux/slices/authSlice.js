import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authError: null,
    userType: null,
    userInfo: null,
  },
  reducers: {
    setAuthError(state, action) {
      state.authError = action.payload
    },
    setUserType(state, action) {
      state.userType = action.payload
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
  },
})

export const { setAuthError, setUserType, setUserInfo } = authSlice.actions
export default authSlice.reducer
