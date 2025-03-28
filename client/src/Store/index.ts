import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "./settingsSlice";
import postsCacheSlice from "./postsCacheSlice";

export const store = configureStore({
  reducer: {
    settings: settingsSlice,
    postsCache: postsCacheSlice
  }
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];