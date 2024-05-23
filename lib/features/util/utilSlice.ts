import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

export interface AdminState {
  sidebarOpen: boolean;
  developmentAboutPageInView: boolean;
}

export interface UtilState extends AdminState {}

const initialState: UtilState = {
  sidebarOpen: false,
  developmentAboutPageInView: false,
};

export const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    toggleDevelopmentAboutPageInView: (state, { payload }) => {
      state.developmentAboutPageInView = payload;
    },
  },
});

export const { toggleSidebar, toggleDevelopmentAboutPageInView } = utilSlice.actions;

export const selectUtil = (state: RootState) => state.rootReducer.util;

export default utilSlice.reducer;
