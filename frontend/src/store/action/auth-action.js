import https from "../http.request";
import {
  SIGNUP,
  LOGIN,
  CHECK_AUTHENTICATION,
  AUTH_LOADING,
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
      console.log("error", error);
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
    if (res) {
      console.log("res", res);
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
    dispatch({ type: AUTH_LOADING });

    const { res, error } = await https.post(
      `${import.meta.env.VITE_BASE_URL}auth/login`,
      user
    );

    if (res?.data) {
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
      return { success: true };
    } else if (error) {
      throw new Error(error.response?.data?.message || "Login failed");
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
  return async () => {
    const { res, error } = await https.get(
      `${import.meta.env.VITE_BASE_URL}auth/logout`
    );
    if (res) {
      toast.success("User logged out successfully");
    }
    if (error) {
      const err = error.response.data.message || "Something went wrong";
      toast.error(err);
      throw new Error(err);
    }
  };
};
