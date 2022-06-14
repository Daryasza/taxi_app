import { PROCEED } from "../actions";

const old = localStorage.getItem('CARD')
const initial = old ? {cardAdded: true} : {cardAdded: false}

export default function cardReducer(state = initial, action) {

  if (action.type === PROCEED) {
    return {cardAdded: true}
  }
  return state
}