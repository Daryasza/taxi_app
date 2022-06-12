import { addressSaga } from './addressSaga'
import { get_address } from '../actions'
import { recordSaga } from './recordSaga'

jest.mock("../../api/api.js", () => ({
  fetchAddressList: () =>({ addresses: {ad: 'ad'}})
}))

describe('addressSaga', () => {

  describe('GET ADDRESS', () => {
    it('gets address througth api', async () => {

      const dispatched = await recordSaga(
        addressSaga,
        get_address()
      )

      expect(dispatched).toEqual([
        { type: 'SHOW_ADDRESS', payload: { ad: 'ad' } }
      ])
    })
  })
})
