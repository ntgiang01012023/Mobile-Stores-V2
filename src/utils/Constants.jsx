export const APP_ROUTE = {
  HOME: "/",
  PRODUCT: "/product",
  CART: "/cart",
  ADMIN: "/admin/",
  ADMIN_LOGIN: "/admin/login",
  ADMIN_ADD_PRODUCT: "/admin/add-product",
};

export const ACTION_TYPES_CART = {
  // Selected product
  SELECTED_PRODUCT: "SELECTED_PRODUCT",

  // Adding a product to cart
  ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",

  // Removing a product from cart
  REMOVE_PRODUCT_FROM_CART: "REMOVE_PRODUCT_FROM_CART",

  // Clear out cart
  CLEAR_CART: "CLEAR_CART",

  // Checking out cart
  CHECKOUT_CART: "CHECKOUT_CART",

  // Increasing quantity of a product in cart
  INCREASE_PRODUCT_QUANTITY: "INCREASE_PRODUCT_QUANTITY",

  // Decreasing quantity of a product in cart
  DECREASE_PRODUCT_QUANTITY: "DECREASE_PRODUCT_QUANTITY",
};
