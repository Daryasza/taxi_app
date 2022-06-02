import { authMiddleware } from "./authMiddleware"
import { signup } from "../actions"
import { serverSignUp } from '../../api/api'

jest.mock('../../api/api', () => ({ serverSignUp: jest.fn(() => {success: true}) }))

describe('authMiddleware', () => {
  describe("SIGN_UP action", () => {
    describe("successful login", () => {
      it("signs up through api", async () => {
        serverSignUp.mockImplementation(async () => (
          {success: true}
        ))
        const dispatch = jest.fn()

        await authMiddleware({ dispatch })()(
          signup("testlogin", "testpassword", "testname", "testsurname")
        )
        expect(serverSignUp).toBeCalledWith("testlogin", "testpassword", "testname", "testsurname")
        expect(dispatch).toBeCalledWith({
          type: "LOG_IN",
        })
        expect(localStorage)
      })
    })
    describe("unsuccessful login", () => {
      it("signs up through api", async () => {
        serverSignUp.mockImplementation(async () => (
          {success: false}
        ))
        const dispatch = jest.fn()

        await authMiddleware({ dispatch })()(
          signup("testlogin", "testpassword", "testname", "testsurname")
        )
        expect(dispatch).not.toBeCalled()
      })
    })
  })
})

