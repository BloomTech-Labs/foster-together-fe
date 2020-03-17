import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice'
import memReducer from '../slices/memSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    mem: memReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
