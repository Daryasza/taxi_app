import { takeEvery, call, put, } from 'redux-saga/effects'
import { SIGN_UP, login, } from '../actions'
import { fetchSignUp,  } from '../../api/api'

export function* regSaga(action) {
  const res =  yield call(fetchSignUp, action.payload.email, action.payload.password,action.payload.name, action.payload.surname ) 

  if (res.success) {
    yield put(login());

    localStorage.setItem('isLogged', true)
    localStorage.setItem('TOKEN', res.token)

  } else {
    alert(res.error)
  }
}

export function* registrationSaga() {
  yield takeEvery(SIGN_UP, regSaga)
}

