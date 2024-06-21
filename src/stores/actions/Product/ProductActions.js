// Import action type constants
import { ACTION_TYPES_PRODUCT } from "../../../utils/Constants";

// Action creators
export const addProductRequest = () => ({
  type: ACTION_TYPES_PRODUCT.ADD_PRODUCT_REQUEST,
});

export const addProductSuccess = (data) => ({
  type: ACTION_TYPES_PRODUCT.ADD_PRODUCT_SUCCESS,
  payload: data,
});

export const addProductFailure = (error) => ({
  type: ACTION_TYPES_PRODUCT.ADD_PRODUCT_FAILURE,
  payload: error,
});

export const fetchProductRequest = () => ({
  type: ACTION_TYPES_PRODUCT.GET_ALL_PRODUCTS_REQUEST,
});

export const fetchProductSuccess = (data) => ({
  type: ACTION_TYPES_PRODUCT.GET_ALL_PRODUCTS_SUCCESS,
  payload: data,
});

export const fetchProductFailure = (error) => ({
  type: ACTION_TYPES_PRODUCT.GET_ALL_PRODUCTS_FAILURE,
  payload: error,
});

// Get a single product
export const fetchASingleProductRequest = () => ({
  type: ACTION_TYPES_PRODUCT.GET_A_SINGLE_PRODUCT_REQUEST,
});

export const fetchASingleProductSuccess = (data) => ({
  type: ACTION_TYPES_PRODUCT.GET_A_SINGLE_PRODUCT_SUCCESS,
  payload: data,
});

export const fetchASingleProductFailure = (error) => ({
  type: ACTION_TYPES_PRODUCT.GET_A_SINGLE_PRODUCT_FAILURE,
  payload: error,
});
