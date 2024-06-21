// ** Core packages
import { combineReducers } from "redux";

// ** Import state manager
import cartReducer from "../reducers/Cart/CartReducers";
import userReducer from "../reducers/User/UserReducers";
import manufacturerReducer from "../reducers/Manufacturer/ManufacturerReducers";
import categoryReducer from "../reducers/Category/CategoryReducers";
import productReducer from "../reducers/Product/ProductReducers";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  manufacturer: manufacturerReducer,
  category: categoryReducer,
  product: productReducer,
});

export default rootReducer;
