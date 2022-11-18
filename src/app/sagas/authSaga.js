import { takeEvery, call, put, } from 'redux-saga/effects'
import { AUTHENTICATE, login } from '../actions'
import { fetchLogin, } from '../../api/api'


export function* authSaga(action) {
  const res = yield call(fetchLogin, action.payload.email, action.payload.password) 

  if (res.success) {
    yield put(login());

    localStorage.setItem('isLogged', true)
    localStorage.setItem('TOKEN', res.token)

  } else {
    alert('Неверный логин или пароль. Попробуйте снова или зарегестрируйтесь!');
    console.log(res.error);
  }
}

export function* authorizationSaga(){
  yield takeEvery(AUTHENTICATE, authSaga);
};




