import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authReducer',
  initialState: {
    signedIn: false,
    isLoading: false,
    postSignInError: null,
    postSignUpError: null,
    logoutMessage: null,
    getLogoutError: null,
  },
  reducers: {
    setSignedIn(state, action) {
      state.signedIn = action.payload
      localStorage.setItem('signedIn', action.payload)
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
    setPostSignInError(state, action) {
      state.postSignInError = action.payload
    },
    setPostSignUpError(state, action) {
      state.postSignUpError = action.payload
    },
    setLogoutMessage(state, action) {
      state.logoutMessage = action.payload
    },
    setGetLogoutError(state, action) {
      state.getLogoutError = action.payload
    },
  },
})

export const {
  setSignedIn,
  setIsLoading,
  setPostSignInError,
  setPostSignUpError,
  setLogoutMessage,
  setGetLogoutError,
} = authSlice.actions

export default authSlice.reducer
