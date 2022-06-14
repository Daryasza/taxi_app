import { routeSaga } from './routeSaga'
import { get_route } from '../actions'
import { recordSaga } from './recordSaga'

const numberOfPoints = 5
jest.mock("../../api/api.js", () => ({
  fetchRoutes: () => Array(numberOfPoints).fill([30.272182,59.800652])
}))

describe('routeListSaga', () => {

  describe('GET ROUTE', () => {

    it('get route througth api', async () => {

      const dispatched = await recordSaga(
        routeSaga,
        get_route(
          "Эрмитаж",
          "Пулково (LED)"
        )
      )

      expect(dispatched).toEqual([
        {
          type: 'SHOW_ROUTE',
          payload: Array(numberOfPoints).fill([30.272182,59.800652])
        }
      ])
    })
  })
})
