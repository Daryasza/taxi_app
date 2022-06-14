import cardReducer from './cardReducer'

describe('cardReducer', () => {

  it('returns the predicted value', () => {
    const initialState = {}

    const action = {
      type: 'PROCEED'
    }

    const result = cardReducer( initialState, action)

    expect(result).toEqual({cardAdded: true})
  })
})