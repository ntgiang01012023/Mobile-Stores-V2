// ** Import apis
import categoryApi from "../../../services/Category/CategoryApi";

import {
  fetchAllCategoriesRequest,
  fetchAllCategoriesSuccess,
  fetchAllCategoriesFailure,
} from "../../actions/Category/CategoryActions";

// Thunk action creator
export const fetchAllCategories = () => {
  return async (dispatch) => {
    try {
      // Dispatch an action indicating that product fetching is pending
      dispatch(fetchAllCategoriesRequest());

      const response = await categoryApi.usefetchAllCategoriesAPI();

      if (response.error) {
        // console.log("Error thunk:", response.error);

        // Dispatch an action with the error message on failure
        dispatch(
          fetchAllCategoriesFailure(response.error.response.data.detail)
        );
        return response.error;
      } else {
        // console.log("response thunk", response);

        // Dispatch an action with the received products on successful fetching
        dispatch(fetchAllCategoriesSuccess(response.data));

        return response;
      }
    } catch (error) {
      // console.log("Error thunk:", error);

      // Dispatch an action with the error message on failure
      dispatch(fetchAllCategoriesFailure(error));
    }
  };
};
