import React from "react";
import { AuthContextProvider, MyContext } from "./AuthContext";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("MyContext", () => {
  describe("login", () => {
    it("sets 'isLoggedIn' to false", () => {
      let isLoggedIn;
      let login;

      render(
        <AuthContextProvider>
          <MyContext.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              login = value.login;
              return null;
            }}
          </MyContext.Consumer>
        </AuthContextProvider>
      );

      expect(isLoggedIn).toBe(false);
      act(() => {
        login("v@e", "c");
      })
      expect(isLoggedIn).toBe(true);
    });
  });

  describe("logout", () => {
    it("sets 'isLoggedIn' to false", () => {
      let isLoggedIn;
      let logout;
      let login;

      render(
        <AuthContextProvider>
          <MyContext.Consumer>
            {(value) => {
              logout = value.logout;
              login = value.login;
              isLoggedIn = value.isLoggedIn;
              return null;
            }}
          </MyContext.Consumer>
        </AuthContextProvider>
      );

      act(() => {
        login("v@e", "c");
        logout();
      });

      expect(isLoggedIn).toBe(false);
    });
  });
});


