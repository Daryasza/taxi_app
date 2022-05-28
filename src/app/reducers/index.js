import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cardReducer from "./cardReducer";

export const rootReducer = combineReducers({
  authReducer,
  cardReducer
})