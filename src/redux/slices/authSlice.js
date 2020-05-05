import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authError: null,
    userType: null,
    userInfo: null,
    loading: false
  },
  reducers: {
    setAuthError(state, action) {
      state.authError = action.payload;
    },
    setUserType(state, action) {
      state.userType = action.payload;
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    }
  }
});

export const {
  setAuthError,
  setUserType,
  setUserInfo,
  setLoading
} = authSlice.actions;
export default authSlice.reducer;
