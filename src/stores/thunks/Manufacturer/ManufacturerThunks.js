// ** Import apis
import manufacturerApi from "../../../services/Manufacturer/ManufacturerApi";

import {
  fetchAllManufacturersRequest,
  fetchAllManufacturersSuccess,
  fetchAllManufacturersFailure,
} from "../../actions/Manufacturer/ManufacturerActions";

// Thunk action creator
export const fetchAllManufacturers = () => {
  return async (dispatch) => {
    try {
      // Dispatch an action indicating that product fetching is pending
      dispatch(fetchAllManufacturersRequest());

      const response = await manufacturerApi.usefetchAllManufacturersAPI();

      if (response.error) {
        // console.log("Error thunk:", response.error);

        // Dispatch an action with the error message on failure
        dispatch(
          fetchAllManufacturersFailure(response.error.response.data.detail)
        );
        return response.error;
      } else {
        // console.log("response thunk", response);

        // Dispatch an action with the received products on successful fetching
        dispatch(fetchAllManufacturersSuccess(response.data));

        return response;
      }
    } catch (error) {
      // console.log("Error thunk:", error);

      // Dispatch an action with the error message on failure
      dispatch(fetchAllManufacturersFailure(error));
    }
  };
};
