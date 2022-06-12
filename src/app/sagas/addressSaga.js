import { takeEvery, call, put } from 'redux-saga/effects'
import { GET_ADDRESS, show_address, } from '../actions'
import { fetchAddressList } from '../../api/api'


export function* addressSaga() {
  const res =  yield call(fetchAddressList) 
  yield put(show_address(res.addresses))
}

export function* addressListSaga() {
  yield takeEvery(GET_ADDRESS, addressSaga)
}