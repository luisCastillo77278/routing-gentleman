import { createSlice } from "@reduxjs/toolkit";
import { Roles, UserInfo } from "../../models";
import { persistLocalStorage, clearLocalStorage } from "../../utilities";

export const EmptyUserState: UserInfo = {
  id: 0,
  name: "",
  email: "",
  rol: Roles.USER,
};

export const UserKey = "user";

const initialState = window.localStorage.getItem(UserKey)
  ? JSON.parse(window.localStorage.getItem(UserKey) as string)
  : EmptyUserState;

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (_state, action) => {
      const data = { ...action.payload, rol: Roles.USER };
      persistLocalStorage<UserInfo>(UserKey, data);
      return data;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<UserInfo>(UserKey, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorage(UserKey);
      EmptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = UserSlice.actions;

export default UserSlice.reducer;
