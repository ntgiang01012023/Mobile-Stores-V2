// Import action type constants
import { ACTION_TYPES_MANUFACTURER } from "../../../utils/Constants";

// Action creators
export const fetchAllManufacturersRequest = () => ({
  type: ACTION_TYPES_MANUFACTURER.FETCH_ALL_MANUFACTURER_REQUEST,
});

export const fetchAllManufacturersSuccess = (data) => ({
  type: ACTION_TYPES_MANUFACTURER.FETCH_ALL_MANUFACTURER_SUCCESS,
  payload: data,
});

export const fetchAllManufacturersFailure = (error) => ({
  type: ACTION_TYPES_MANUFACTURER.FETCH_ALL_MANUFACTURER_FAILURE,
  payload: error,
});
