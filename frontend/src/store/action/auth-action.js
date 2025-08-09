import https from "../http.request";
import {
  SIGNUP,
  LOGIN,
  CHECK_AUTHENTICATION,
  AUTH_LOADING,
  LOGOUT,
} from "../action-types";
import toast from "react-hot-toast";

export const checkAuthentication = () => {
  return async (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    try {
      const { res } = await https.get(
        `${import.meta.env.VITE_BASE_URL}auth/checkAuthentication`
      );

      if (res?.data?.user) {
        dispatch({
          type: CHECK_AUTHENTICATION,
          payload: res.data.user,
        });
      } else {
        // No user data means not authenticated
        dispatch({
          type: CHECK_AUTHENTICATION,
          payload: null,
        });
      }
    } catch (error) {
      dispatch({ type: AUTH_LOADING });
      console.log(
        "error",
        error.response.data.message || "authentication failed"
      );
    }
  };
};
export const signup = (user) => {
  return async (dispatch) => {
    const { res, error } = await https.post(
      `${import.meta.env.VITE_BASE_URL}auth/signup`,
      user
    );
    if (!error) {
      dispatch({ type: SIGNUP, payload: res.data });
    } else if (error) {
      const err = error.response.data.message || "Something went wrong";
      throw new Error(err);
    }
  };
};

export const verifyEmail = (code) => {
  return async (dispatch) => {
    const { res, error } = await https.post(
      `${import.meta.env.VITE_BASE_URL}auth/verify-email`,
      code
    );
    if (!error && res) {
      dispatch(checkAuthentication());
    }
    if (error) {
      const err = error.response.data.message || "Something went wrong";
      throw new Error(err);
    }
  };
};
export const login = (user) => {
  return async (dispatch) => {
    const { res, error } = await https.post(
      `${import.meta.env.VITE_BASE_URL}auth/login`,
      user
    );
    if (!error) {
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
    } else if (error) {
      throw new Error(error.response.data.message || "Login failed");
    }
  };
};
export const forgotPassword = (user, setLoading) => {
  setLoading(true);
  return async () => {
    const { res, error } = await https.post(
      `${import.meta.env.VITE_BASE_URL}auth/forgot-password`,
      user
    );
    if (res) {
      setLoading(false);
    }
    if (error) {
      const err = error.response.data.message || "Something went wrong";
      setLoading(false);
      throw new Error(err);
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    const { error } = await https.get(
      `${import.meta.env.VITE_BASE_URL}auth/logout`
    );
    if (!error) {
      dispatch({ type: LOGOUT });
      toast.success("Logged out successfully");
    }
    if (error) {
      const err = error.response.data.message || "Something went wrong";
      toast.error(err);
      throw new Error(err);
    }
  };
};
