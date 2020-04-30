import { createSlice } from "@reduxjs/toolkit";

export const memSlice = createSlice({
  name: "mem",
  initialState: {
    membersArray: [],
    memError: null,
    selectedMember: {}
  },
  reducers: {
    setMembersArray(state, action) {
      state.membersArray = action.payload;
    },
    setMemError(state, action) {
      state.memError = action.payload;
    },
    setSelectedMember(state, action) {
      state.selectedMember = action.payload;
    }
  }
});

export const {
  setMembersArray,
  setMemError,
  setSelectedMember
} = memSlice.actions;
export default memSlice.reducer;
