import { SHOW_ADDRESS } from "../actions"

const initialState = {isAddress: false, MyAdresses: []}

export default function addressReducer (state = initialState, action) {
  switch(action.type) {
    case SHOW_ADDRESS: {
      return {
        isAddress: true,
        MyAdresses: action.payload,
      }
    }
    default: {
      return state
    }
  }
}