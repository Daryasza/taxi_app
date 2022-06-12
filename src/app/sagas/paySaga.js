import { takeEvery, call, put,  } from 'redux-saga/effects'
import { SEND_CARD, proceed, } from '../actions'
import { fetchPostCard } from '../../api/api'

export function* paySaga(action) {
  const token = localStorage.getItem('TOKEN')
  const res =  yield call(fetchPostCard, action.payload.cardNumber, action.payload.expiryDate, action.payload.cardName, action.payload.cvc, token ) 

  if (res.success) {
    yield put(proceed());

    localStorage.setItem('CARD', true)

  } else {
    alert(res.error)
  }
}

export function* paymentSaga() {
  yield takeEvery(SEND_CARD, paySaga)
}