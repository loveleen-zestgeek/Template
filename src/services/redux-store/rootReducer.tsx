import { combineReducers } from "@reduxjs/toolkit";
import homeTabSelectReducer from "../slice/homeTabSelect";

const RootReducer = combineReducers({
  selectedTab: homeTabSelectReducer,
});

export default RootReducer;
