export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const SIGN_UP = 'SIGN_UP'
export const AUTHENTICATE = 'AUTHENTICATE'
export const SEND_CARD = 'SEND_CARD'
export const PROCEED = 'PROCEED'

export const login = () => ({type: LOG_IN})

export const logout = () => ({type: LOG_OUT})

export const proceed = () => ({type: PROCEED})

export const signup = (email, password, name, surname) => ({
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

export const sendcard = (cardNumber, expiryDate, cardName, cvc) => ({
  type: SEND_CARD,
  payload: {
    cardNumber,
    expiryDate,
    cardName,
    cvc
  }
})