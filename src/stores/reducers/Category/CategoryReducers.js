import { ACTION_TYPES_CATEGORY } from "../../../utils/Constants";

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES_CATEGORY.FETCH_ALL_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ACTION_TYPES_CATEGORY.FETCH_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };

    case ACTION_TYPES_CATEGORY.FETCH_ALL_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
