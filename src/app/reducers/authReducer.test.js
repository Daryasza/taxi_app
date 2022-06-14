import authReducer from "./authReducer";

describe('authReducer', () => {

  it('returns the predicted value', () => {
    const initialState = {}

    const firstAction = {
      type: 'LOG_IN'
    }
    const secondAction = {
      type: 'LOG_OUT'
    }

    const firstResult = authReducer( initialState, firstAction)
    const secondResult = authReducer( initialState, secondAction)

    expect(firstResult).toEqual({isLoggedIn: true})
    expect(secondResult).toEqual({isLoggedIn: false})
  })
})