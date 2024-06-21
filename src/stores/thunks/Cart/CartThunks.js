// ** Import apis
import cartApi from "../../../services/Cart/CartApi";

import {
  checkoutCartRequest,
  checkoutCartSuccess,
  checkoutCartFailure,
} from "../../actions/Cart/CartActions";

// Thunk action creator
export const checkoutCart = (data) => {
  return async (dispatch) => {
    try {
      // Dispatch an action indicating that product fetching is pending
      dispatch(checkoutCartRequest());

      const response = await cartApi.useCheckoutCartAPI(data);

      if (response.error) {
        console.log("Error thunk:", response.error);

        // Dispatch an action with the error message on failure
        dispatch(checkoutCartFailure(response.error.response.data.detail));
        return response.error;
      } else {
        console.log("response thunk", response);

        // Dispatch an action with the received products on successful fetching
        dispatch(checkoutCartSuccess(response.data));

        return response;
      }
    } catch (error) {
      console.log("Error thunk:", error);

      // Dispatch an action with the error message on failure
      dispatch(checkoutCartFailure(error));
    }
  };
};
