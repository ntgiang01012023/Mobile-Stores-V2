// Import action type constants
import { ACTION_TYPES_CATEGORY } from "../../../utils/Constants";

// Action creators
export const fetchAllCategoriesRequest = () => ({
  type: ACTION_TYPES_CATEGORY.FETCH_ALL_CATEGORY_REQUEST,
});

export const fetchAllCategoriesSuccess = (data) => ({
  type: ACTION_TYPES_CATEGORY.FETCH_ALL_CATEGORY_SUCCESS,
  payload: data,
});

export const fetchAllCategoriesFailure = (error) => ({
  type: ACTION_TYPES_CATEGORY.FETCH_ALL_CATEGORY_FAILURE,
  payload: error,
});
