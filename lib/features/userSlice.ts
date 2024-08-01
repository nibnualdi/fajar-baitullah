import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

export interface UserData {
  id: number | string | null;
  email: string;
}

const initialState: UserData = {
  id: null,
  email: "",
};

export const UserDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      console.log(payload, "dari redux")
      state.id = payload.id;
      state.email = payload.email;
    },
  },
});

export const { setUser } = UserDataSlice.actions;

export const selectUserData = (state: RootState) => state.rootReducer.userData;

export default UserDataSlice.reducer;
