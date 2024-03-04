import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

export interface AdminState {
  sidebarOpen: boolean;
}

export interface UtilState extends AdminState {}

const initialState: UtilState = {
  sidebarOpen: false,
};

export const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { toggleSidebar } = utilSlice.actions;

export const selectUtil = (state: RootState) => state.rootReducer.util;

export default utilSlice.reducer;
