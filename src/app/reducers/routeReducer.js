import { SHOW_ROUTE } from "../actions"

const initialState = {isRoute: false, MyRoute: []}

export default function routeReducer (state = initialState, action) {
  switch(action.type) {
    case SHOW_ROUTE: {
      return {
        isRoute: true,
        MyRoute: action.payload,
      }
    }
    default: {
      return state
    }
  }
}