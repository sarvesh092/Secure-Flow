import { SIGNUP, LOGIN, LOGOUT } from "../action-types";
const initialState = {
  user: "",
};
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      return {
        ...state,
        user: payload,
      };
    case LOGIN:
      return {
        ...state,
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
export default authReducer;
