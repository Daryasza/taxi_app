import routeReducer from './routeReducer'

describe('routeReducer', () => {

  it('returns the predicted value', () => {
    const initialState = {}

    const action = {
      type: 'SHOW_ROUTE',
      payload: 'MyRoute'
    }

    const result = routeReducer( initialState, action)

    expect(result).toEqual({isRoute: true, MyRoute: 'MyRoute'})
  })
})