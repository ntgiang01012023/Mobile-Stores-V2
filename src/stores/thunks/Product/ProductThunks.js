// ** Import apis
import productApi from "../../../services/Product/ProductApi";

import {
  addProductRequest,
  addProductSuccess,
  addProductFailure,
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFailure,
  fetchASingleProductRequest,
  fetchASingleProductSuccess,
  fetchASingleProductFailure,
} from "../../actions/Product/ProductActions";

// Thunk action creator
export const addProduct = (data) => {
  return async (dispatch) => {
    try {
      // Dispatch an action indicating that product fetching is pending
      dispatch(addProductRequest());

      const response = await productApi.useAddProductAPI(data);

      if (response.error) {
        // console.log("Error thunk:", response.error);

        // Dispatch an action with the error message on failure
        dispatch(addProductFailure(response.error.response.data.detail));
        return response.error;
      } else {
        // console.log("response thunk", response);

        // Dispatch an action with the received products on successful fetching
        dispatch(addProductSuccess(response.data));

        return response;
      }
    } catch (error) {
      // console.log("Error thunk:", error);

      // Dispatch an action with the error message on failure
      dispatch(addProductFailure(error));
    }
  };
};

export const fetchProduct = (limit, skip) => {
  return async (dispatch) => {
    try {
      // Dispatch an action indicating that product fetching is pending
      dispatch(fetchProductRequest());

      const response = await productApi.useGetAllProductAPI(limit, skip);

      if (response.error) {
        console.log("Error thunk:", response.error);

        // Dispatch an action with the error message on failure
        dispatch(fetchProductFailure(response.error.response.data.detail));
        return response.error;
      } else {
        console.log("response thunk", response);

        // Dispatch an action with the received products on successful fetching
        dispatch(fetchProductSuccess(response.data));

        return response;
      }
    } catch (error) {
      console.error("Error fetching products:", error);

      // Dispatch an action with the error message on failure
      dispatch(fetchProductFailure(error));
    }
  };
};

export const fetchASingleProduct = (id) => {
  return async (dispatch) => {
    // Dispatch an action indicating that product fetching is pending
    dispatch(fetchASingleProductRequest());

    try {
      const response = await productApi.useGetASingleProductAPI(id);

      if (response.error) {
        // console.log("Error thunk:", response.error);

        // Dispatch an action with the error message on failure
        dispatch(
          fetchASingleProductFailure(response.error.response.data.detail)
        );
        return response.error;
      } else {
        // console.log("response thunk", response);

        // Dispatch an action with the received products on successful fetching
        dispatch(fetchASingleProductSuccess(response.data));

        return response;
      }
    } catch (error) {
      console.error("Error fetching a single product:", error);

      // Dispatch an action with the error message on failure
      dispatch(fetchASingleProductFailure(error));
    }
  };
};
