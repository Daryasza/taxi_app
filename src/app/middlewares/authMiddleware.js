import { SIGN_UP, AUTHENTICATE, login } from "../actions";
import { serverLogin, serverSignUp } from "../../api/api";

export const authMiddleware = (store) => (next) => async (action) => {
  const handleServerResponse = async (apiRequest, ...rest) => {
    const res = await apiRequest(...rest)
  
    if (res.success) {
      store.dispatch(login())
      localStorage.setItem('isLogged', true)
      localStorage.setItem('TOKEN', res.token)
  
    } else {
      alert(res.error)
    }
  }
  
  try {
    if (action.type === AUTHENTICATE) {
      const {email, password} = action.payload
      handleServerResponse(serverLogin, email, password)

    } else if (action.type === SIGN_UP) {
      const {email, password, name, surname} = action.payload
      handleServerResponse(serverSignUp, email, password, name, surname)

    } else {
      next(action)
    }

  } catch (error) {
    console.log(error)
  }
}