import { createSlice } from '@reduxjs/toolkit'

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState: {
    user: {
      first_name: '',
      last_name: '',
    },
  },
  reducers: {
    setUserFirstName(state, action) {
      console.log("hi")
      state.user.first_name = action.payload

    },
    setUserLastName(state, action) {
      state.user.last_name = action.payload
      console.log(state)
    },
  },
})

export const user = state => state.user
export const { setUserFirstName, setUserLastName } = signUpSlice.actions
export default signUpSlice.reducer
