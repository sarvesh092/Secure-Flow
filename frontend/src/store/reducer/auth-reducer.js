import {
  SIGNUP,
  LOGIN,
  LOGOUT,
  CHECK_AUTHENTICATION,
  AUTH_LOADING,
} from "../action-types";

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case SIGNUP:
      return {
        ...state,
        user: payload,
        isAuthenticated: false,
        isLoading: false,
      };

    case LOGIN:
      return {
        ...state,
        user: payload.user,
        isAuthenticated: true, // Assuming login only succeeds if verified
        isLoading: false,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    case CHECK_AUTHENTICATION:
      return {
        ...state,
        user: payload,
        isAuthenticated: !!payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
