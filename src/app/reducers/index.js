import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cardReducer from "./cardReducer";
import routeReducer from "./routeReducer";
import addressReducer from "./addressReducer";

export const rootReducer = combineReducers({
  authReducer,
  cardReducer,
  addressReducer,
  routeReducer,
})