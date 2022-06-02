import { cardMiddleware } from './cardMiddleware'
import { sendcard } from "../actions"
import { serverPostCard } from '../../api/api'

jest.mock('../../api/api', () => ({ serverPostCard: jest.fn(() => {success: true}) }))

const localStorageMock = (function() {
  var store = {}
  return {
    getItem: function(key) {
      return store[key]
    },
    setItem: function(key, value) {
      store[key] = value.toString()
    },
    clear: function() {
      store = {}
    },
    removeItem: function(key) {
      delete store[key]
    }
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

describe('cardMiddleware', () => {
  beforeEach(() => {
    localStorage.clear()
  });

  describe("SEND_CARD action", () => {
    describe("successful login", () => {
      it("signs up through api", async () => {
        serverPostCard.mockImplementation(async () => (
          {success: true}
        ))
        const dispatch = jest.fn()

        localStorage.setItem('TOKEN', '100')

        await cardMiddleware({ dispatch })()(
          sendcard("2000 0000 0000 0000", "01/22", "TEST", "910")
        )
        expect(serverPostCard).toBeCalledWith("2000 0000 0000 0000", "01/22", "TEST", "910", '100')
        expect(dispatch).toBeCalledWith({
          type: "PROCEED",
        })
      })
    })
  })
})

