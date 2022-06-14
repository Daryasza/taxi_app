import { authSaga } from './authSaga'
import { authenticate } from '../actions'
import { recordSaga } from './recordSaga'

jest.mock("../../api/api.js", () => ({
  fetchLogin: () =>({ success: true })
}))

describe('authorizationSaga', () => {

  describe('AUTHENTICATE', () => {
   
    it('authenticates througth api', async () => {
      
      const dispatched = await recordSaga(
        authSaga,
        authenticate("testlogin", "testpassword")
      )

      expect(dispatched).toEqual([{ type: "LOG_IN" }])
    })
  })
}) 

