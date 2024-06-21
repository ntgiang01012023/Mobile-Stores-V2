// Import action type constants
import { ACTION_TYPES_CART } from "../../../utils/Constants";

// Action creators
// Adding a product to cart
export const selectedProduct = (data) => ({
  type: ACTION_TYPES_CART.SELECTED_PRODUCT,
  payload: data,
});

// Adding a product to cart
export const addProductToCart = (data) => ({
  type: ACTION_TYPES_CART.ADD_PRODUCT_TO_CART,
  payload: data,
});

// Removing a product from cart
export const removeProductFromCart = (id) => ({
  type: ACTION_TYPES_CART.REMOVE_PRODUCT_FROM_CART,
  payload: id,
});

// Checking out cart (initiating checkout process)
export const clearCart = () => ({
  type: ACTION_TYPES_CART.CLEAR_CART,
});

// Increasing quantity of a product in cart
export const increaseProductQuantity = (id) => ({
  type: ACTION_TYPES_CART.INCREASE_PRODUCT_QUANTITY,
  payload: id,
});

// Decreasing quantity of a product in cart
export const decreaseProductQuantity = (id) => ({
  type: ACTION_TYPES_CART.DECREASE_PRODUCT_QUANTITY,
  payload: id,
});

// Checkout cart
export const checkoutCartRequest = () => ({
  type: ACTION_TYPES_CART.CHECKOUT_CART_REQUEST,
});

export const checkoutCartSuccess = (data) => ({
  type: ACTION_TYPES_CART.CHECKOUT_CART_SUCCESS,
  payload: data,
});

export const checkoutCartFailure = (error) => ({
  type: ACTION_TYPES_CART.CHECKOUT_CART_FAILURE,
  payload: error,
});
