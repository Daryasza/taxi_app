import addressReducer from './addressReducer'

describe('addressReducer', () => {

  it('returns the predicted value', () => {
    const initialState = {}

    const action = {
      type: 'SHOW_ADDRESS',
      payload: 'MyAdresses'
    }

    const result = addressReducer( initialState, action)

    expect(result).toEqual({isAddress: true, MyAdresses: 'MyAdresses'})
  })
})