import { takeEvery, call, put } from 'redux-saga/effects'
import { GET_ROUTE, show_route } from '../actions'
import { fetchRoutes } from '../../api/api'

export function* routeSaga(action) {
  const {from, to} = action.payload
  const res =  yield call(fetchRoutes, from, to)  

  if (res.length) {
    yield put(show_route(res))
  }
}

export function* routeListSaga() {
  yield takeEvery(GET_ROUTE, routeSaga)
}