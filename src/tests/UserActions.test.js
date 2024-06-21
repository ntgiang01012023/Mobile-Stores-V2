import { describe, expect, it } from "vitest";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
} from "../stores/actions/UserActions";
import { ACTION_TYPES_USER } from "../utils/Constants";

describe("user actions", () => {
  it("loginRequest creates a LOGIN_REQUEST action", () => {
    const expectedAction = {
      type: ACTION_TYPES_USER.LOGIN_REQUEST,
    };

    expect(loginRequest()).toEqual(expectedAction);
  });

  it("loginSuccess creates a LOGIN_SUCCESS action with payload", () => {
    const userData = { username: "admin", token: "abc123" };

    const expectedAction = {
      type: ACTION_TYPES_USER.LOGIN_SUCCESS,
      payload: userData,
    };

    expect(loginSuccess(userData)).toEqual(expectedAction);
  });

  it("loginFailure creates a LOGIN_FAILURE action with error payload", () => {
    const error = new Error("Login failed");

    const expectedAction = {
      type: ACTION_TYPES_USER.LOGIN_FAILURE,
      payload: error,
    };

    expect(loginFailure(error)).toEqual(expectedAction);
  });

  it("logout creates a LOGOUT action", () => {
    const expectedAction = {
      type: ACTION_TYPES_USER.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });
});
