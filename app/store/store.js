import { configureStore } from "@reduxjs/toolkit";
import { chatDataSlice } from "./features/chatSlice";
import { UserDataSlice } from "./features/userSlice";

export const store = configureStore({
  reducer: {
    user: UserDataSlice.reducer,
    chat: chatDataSlice.reducer,
  },
});
