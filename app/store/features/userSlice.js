import structuredData from "@/app/general/constant";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: structuredData,
};
export const UserDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      const _user = state.user.filter((user) => user.id !== action.payload.id);
      state.user = [..._user, action.payload];
    },
  },
});
export const { sendMessage } = UserDataSlice.actions;
export default UserDataSlice.reducer;
