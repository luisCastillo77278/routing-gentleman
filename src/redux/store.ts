import { configureStore } from "@reduxjs/toolkit";
import { UserInfo } from "../models";
import userReducer from './state/slice'

export interface AppStore {
  user: UserInfo
}

export default configureStore<AppStore> ({
  reducer: {
    user: userReducer
  }
})