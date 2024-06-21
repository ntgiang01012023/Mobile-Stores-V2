import { describe, expect, it } from "vitest";
import userReducer from "../stores/reducers/UserReducers";
import { ACTION_TYPES_USER } from "../utils/Constants";

describe("userReducer", () => {
  it("returns initial state", () => {
    // Arrange
    const initialState = {
      info: null,
      loading: false,
      error: null,
    };

    // Act
    const newState = userReducer(undefined, {});

    // Assert
    expect(newState).toEqual(initialState);
  });

  it("handles LOGIN_REQUEST action", () => {
    // Arrange
    const initialState = {
      info: null,
      loading: false,
      error: null,
    };

    const action = { type: ACTION_TYPES_USER.LOGIN_REQUEST };

    // Act
    const newState = userReducer(initialState, action);

    // Assert
    expect(newState.loading).toBe(true);
  });

  it("handles LOGIN_SUCCESS action", () => {
    // Arrange
    const initialState = {
      info: null,
      loading: true,
      error: null,
    };

    const payload = { sub: "user123", role: "admin" };
    const action = { type: ACTION_TYPES_USER.LOGIN_SUCCESS, payload };

    // Act
    const newState = userReducer(initialState, action);

    // Assert
    expect(newState.info).toEqual(payload);
    expect(newState.loading).toBe(false);
  });

  it("handles LOGIN_FAILURE action", () => {
    // Arrange
    const initialState = {
      info: null,
      loading: true,
      error: null,
    };

    const error = "Login failed";
    const action = { type: ACTION_TYPES_USER.LOGIN_FAILURE, payload: error };

    // Act
    const newState = userReducer(initialState, action);

    // Assert
    expect(newState.error).toBe(error);
    expect(newState.loading).toBe(false);
  });

  it("handles LOGOUT action", () => {
    // Arrange
    const initialState = {
      info: { sub: "user123", role: "admin" },
      loading: false,
      error: null,
    };

    const action = { type: ACTION_TYPES_USER.LOGOUT };

    // Act
    const newState = userReducer(initialState, action);

    // Assert
    expect(newState.info).toBe(null);
  });

  it("returns current state for unknown action type", () => {
    // Arrange
    const initialState = {
      info: null,
      loading: false,
      error: null,
    };

    const action = { type: "UNKNOWN_ACTION" };

    // Act
    const newState = userReducer(initialState, action);

    // Assert
    expect(newState).toEqual(initialState);
  });
});
