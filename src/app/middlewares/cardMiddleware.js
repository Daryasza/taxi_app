import { SEND_CARD, proceed } from "../actions";
import { serverPostCard } from "../../api/api";

export const cardMiddleware = (store) => (next) => async (action) => {  
  try {

    if (action.type === SEND_CARD) {
      const {
        cardNumber,
        expiryDate,
        cardName,
        cvc
      } = action.payload
      const token = localStorage.getItem('TOKEN')

      const res = await serverPostCard(cardNumber, expiryDate, cardName, cvc, token)
      if (res.success) {
        store.dispatch(proceed())
        localStorage.setItem('CARD', true)

      } else {
        alert(res.error)
      }

    } else {
      next(action)
    }
  } catch (error) {
    console.log(error)
  }
}