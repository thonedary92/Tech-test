import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatId: 1,
};

export const chatDataSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addChatId(state, action) {
      const { chatId } = action.payload;
      state.chatId = chatId;
    },
  },
});

export const { addChatId } = chatDataSlice.actions;
export default chatDataSlice.reducer;
