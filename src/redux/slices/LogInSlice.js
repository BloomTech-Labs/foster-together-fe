import { createSlice } from '@reduxjs/toolkit'

export const logInSlice = createSlice({
  name: 'LogIn',
  initialState: {
    user: {
      username: '',
      password: '',
      loading: true,
      token: undefined,
      user: null,
    },
  },
  reducers: {
    setUsername(state, action) {
      state.user.username = action.payload
    },
    setPassword(state, action) {
      state.user.password = action.payload
    },
    setAuth(state, { payload }) {
      state.user.loading = false
      state.user.token = payload.token

      if (payload.token) {
        try {
          state.user = JSON.parse(atob(payload.token.split('.')[1]))
        } catch (error) {
          state.user = null
        }
      } else {
        state.user = null
      }
    },
  },
})

export const { setUsername, setPassword, setAuth } = loginSlice.actions
export default loginSlice.reducer
