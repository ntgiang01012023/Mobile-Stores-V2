import { ACTION_TYPES_PRODUCT } from "../../../utils/Constants";

const initialState = {
  list: [],
  selectedProduct: null,
  message: null,
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES_PRODUCT.ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ACTION_TYPES_PRODUCT.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };

    case ACTION_TYPES_PRODUCT.ADD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Get all products
    case "GET_ALL_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALL_PRODUCTS_SUCCESS":
      return {
        ...state,
        list: action.payload,
        selectedProduct: null,
        message: null,
        loading: false,
        error: null,
      };
    case "GET_ALL_PRODUCTS_FAILURE":
      return {
        ...state,
        error: action.payload.message,
      };

    // Get a single product
    case "GET_A_SINGLE_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_A_SINGLE_PRODUCT_SUCCESS":
      return {
        ...state,
        selectedProduct: action.payload,
        loading: false,
      };
    case "GET_A_SINGLE_PRODUCT_FAILURE":
      return {
        ...state,
        error: action.payload.message,
      };

    default:
      return state;
  }
};

export default productReducer;
