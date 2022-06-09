import { takeEvery, call, put, all } from 'redux-saga/effects'
import { AUTHENTICATE, SIGN_UP, SEND_CARD, GET_ADDRESS, proceed, login, show_address, GET_ROUTE, show_route } from '../actions'
import { fetchLogin, fetchSignUp, fetchPostCard, fetchAddressList, fetchRoutes } from '../../api/api'


export function* authSaga(action) {

  const res = yield call(fetchLogin, action.payload.email, action.payload.password) 

  if (res.success) {
    yield put(login());

    localStorage.setItem('isLogged', true)
    localStorage.setItem('TOKEN', res.token)

  } else {
    alert(res.error)
  }
}

export function* authorizationSaga(){
  yield takeEvery(AUTHENTICATE, authSaga);
};



export function* registrationSaga() {
  yield takeEvery(SIGN_UP, function* (action) {
    const res =  yield call(fetchSignUp, action.payload.email, action.payload.password,action.payload.name, action.payload.surname ) 
  
    if (res.success) {
      yield put(login());

      localStorage.setItem('isLogged', true)
      localStorage.setItem('TOKEN', res.token)
  
    } else {
      alert(res.error)
    }
  })
}

export function* paymentSaga() {
  yield takeEvery(SEND_CARD, function* (action) {
    const token = localStorage.getItem('TOKEN')
    const res =  yield call(fetchPostCard, action.payload.cardNumber, action.payload.expiryDate, action.payload.cardName, action.payload.cvc, token ) 
  
    if (res.success) {
      yield put(proceed());

      localStorage.setItem('CARD', true)
  
    } else {
      alert(res.error)
    }
  })
}

export function* addressListSaga() {
  yield takeEvery(GET_ADDRESS, function* () {
    const res =  yield call(fetchAddressList) 
    yield put(show_address(res.addresses))
  })
}

export function* routeSaga() {
  yield takeEvery(GET_ROUTE, function* (action) {
    const {from, to} = action.payload
    const res =  yield call(fetchRoutes, from, to)  

    if (res.length) {
      yield put(show_route(res))
    }
  })
}


export function* mySaga() {
  yield all([
		call(authorizationSaga),
		call(registrationSaga),
    call(addressListSaga),
		call(routeSaga),
		call(paymentSaga)
	])
}
