// ** Core packages
import { combineReducers } from "redux";

// ** Import state manager
import cartReducer from "./CartReducers";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
