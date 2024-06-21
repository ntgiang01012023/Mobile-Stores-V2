import { ACTION_TYPES_MANUFACTURER } from "../../../utils/Constants";

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const manufacturerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES_MANUFACTURER.FETCH_ALL_MANUFACTURER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ACTION_TYPES_MANUFACTURER.FETCH_ALL_MANUFACTURER_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };

    case ACTION_TYPES_MANUFACTURER.FETCH_ALL_MANUFACTURER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default manufacturerReducer;
