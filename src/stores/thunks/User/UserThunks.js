// ** Import apis
import userAPI from "../../../services/User/UserApi";

import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../../actions/User/UserActions";
import { decodeToken } from "react-jwt";

// Thunk action creator
export const login = (data) => {
  return async (dispatch) => {
    try {
      // Dispatch an action indicating that product fetching is pending
      dispatch(loginRequest());

      const response = await userAPI.useLoginAPI(data);

      if (response.error) {
        // console.log("Error thunk:", response.error);

        // Dispatch an action with the error message on failure
        dispatch(loginFailure(response.error.response.data.message));
        return response.error.response.data.message;
      } else {
        // console.log("response thunk", response);

        const newData = decodeToken(response.data);

        // console.log("newData", newData);

        // Dispatch an action with the received products on successful fetching
        dispatch(loginSuccess(newData));

        return response;
      }
    } catch (error) {
      // console.log("Error thunk:", error);

      // Dispatch an action with the error message on failure
      dispatch(loginFailure(error));
    }
  };
};
