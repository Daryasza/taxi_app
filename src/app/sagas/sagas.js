import { call, all } from 'redux-saga/effects'

import { routeListSaga } from './routeSaga'
import { authorizationSaga } from './authSaga'
import { registrationSaga } from './regSaga'
import { addressListSaga } from './addressSaga'
import { paymentSaga } from './paySaga'

export function* mySaga() {
  yield all([
		call(authorizationSaga),
		call(registrationSaga),
    call(addressListSaga),
		call(routeListSaga),
		call(paymentSaga)
	])
}
