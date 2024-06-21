// Import action type constants
import { ACTION_TYPES_USER } from "../../../utils/Constants";

// Action creators
// Login
export const loginRequest = () => ({
  type: ACTION_TYPES_USER.LOGIN_REQUEST,
});

export const loginSuccess = (data) => ({
  type: ACTION_TYPES_USER.LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = (error) => ({
  type: ACTION_TYPES_USER.LOGIN_FAILURE,
  payload: error,
});

// Logout
export const logout = () => ({
  type: ACTION_TYPES_USER.LOGOUT,
});
