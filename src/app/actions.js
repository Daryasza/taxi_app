export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const SIGN_UP = 'SIGN_UP'
export const AUTHENTICATE = 'AUTHENTICATE'
export const SEND_CARD = 'SEND_CARD'
export const PROCEED = 'PROCEED'
export const GET_ADDRESS = 'GET_ADDRESS'
export const SHOW_ADDRESS = 'SHOW_ADDRESS'
export const GET_ROUTE = 'GET_ROUTE'
export const SHOW_ROUTE = 'SHOW_ROUTE'


export const login = () => ({type: LOG_IN})

export const logout = () => ({type: LOG_OUT})

export const proceed = () => ({type: PROCEED})

export const get_address = () => ({type: GET_ADDRESS})

export const show_address = (payload) => ({
  type: SHOW_ADDRESS,
  payload
})

export const get_route = (from, to) => ({
  type: GET_ROUTE,
  payload: {from, to}
})

export const show_route = (payload) => ({
  type: SHOW_ROUTE,
  payload,
})

export const sign_up = (email, password, name, surname) => ({
  type: SIGN_UP,
  payload: {
    email,
    password,
    name,
    surname
  }
})

export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: {email, password}
})

export const send_card = (cardNumber, expiryDate, cardName, cvc) => ({
  type: SEND_CARD,
  payload: {
    cardNumber,
    expiryDate,
    cardName,
    cvc
  }
})