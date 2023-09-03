import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";

export const rootreducer = combineReducers({
    user: userReducer,
})