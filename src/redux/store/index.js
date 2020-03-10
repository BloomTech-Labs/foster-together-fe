import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice'
import famReducer from '../slices/famSlice'
import neighReducer from '../slices/neighSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    fam: famReducer,
    neigh: neighReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
