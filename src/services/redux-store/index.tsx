import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./rootReducer";

export const store = configureStore({
  reducer: {
    reducer: RootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
