import {LOG_IN, LOG_OUT } from "../actions";

const oldState = localStorage.getItem('isLogged');
const initialState = oldState ? {isLoggedIn: true} : {isLoggedIn: false};

export default function authReducer (state = initialState, action) {
  switch(action.type) {
    case LOG_IN: {
      return {isLoggedIn: true};
    }
    case LOG_OUT: {
      return {isLoggedIn: false};
    }
    default: {
      return state;
    }
  }
}
