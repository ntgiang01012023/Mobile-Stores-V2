import { ACTION_TYPES_USER } from "../../../utils/Constants";

const initialState = {
  info: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES_USER.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ACTION_TYPES_USER.LOGIN_SUCCESS:
      return {
        ...state,
        info: {
          sub: action.payload.sub,
          role: action.payload.role,
        },
        loading: false,
      };

    case ACTION_TYPES_USER.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ACTION_TYPES_USER.LOGOUT:
      return {
        ...state,
        info: null,
      };

    default:
      return state;
  }
};

export default userReducer;
