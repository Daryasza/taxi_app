import { regSaga } from './regSaga'
import { sign_up } from '../actions'
import { recordSaga } from './recordSaga'

jest.mock("../../api/api.js", () => ({
  fetchSignUp: () =>({ "success": true, "token": "somerandomtoken" })
}))

describe('registrationSaga', () => {

  describe('SIGN UP', () => {

    it('register througth api', async () => {

      const dispatched = await recordSaga(
        regSaga,
        sign_up(
          "mail@mail.ru",
          "Passw0rd",
          "Test",
          "Pest"
        )
      )

      expect(dispatched).toEqual([{ type: "LOG_IN" }])
    })
  })
})
