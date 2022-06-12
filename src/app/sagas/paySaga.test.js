import { paySaga } from './paySaga'
import { send_card } from '../actions'
import { recordSaga } from './recordSaga'

jest.mock("../../api/api.js", () => ({
  fetchPostCard: () =>({ success: true })
}))

describe('paymentSaga', () => {

  describe('SEND CARD', () => {

    it('send card througth api', async () => {

      const dispatched = await recordSaga(
        paySaga,
        send_card(
          "1234567812345678",
          "12/22",
          "TEST TEST",
          "123"
        )
      )

      expect(dispatched).toEqual([{ type: "PROCEED" }])
    })
  })
})
