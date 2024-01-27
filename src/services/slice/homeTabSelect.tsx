import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface initialStateProps {
  selectedTab: string;
}

const initialState: initialStateProps = {
  selectedTab: "background",
};

export const homeTabSelectSlice = createSlice({
  name: "homeTabSelect",
  initialState,
  reducers: {
    setSelectedTab: (state, action: PayloadAction<string>) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { setSelectedTab } = homeTabSelectSlice.actions;

export default homeTabSelectSlice.reducer;
