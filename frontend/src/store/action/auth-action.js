import https from "../http.request";
import { SIGNUP, LOGIN } from "../action-types";
import toast from "react-hot-toast";

export const signup = (user, setLoading, setError) => {
  setLoading(true);
  return async (dispatch) => {
    const { res, error } = await https.post(
      `${import.meta.env.VITE_BASE_URL}signup`,
      user
    );
    if (!error) {
      dispatch({ type: SIGNUP, payload: res.data });
      setLoading(false);
      setError(null);
    } else if (error) {
      const err = error.response.data.message || "Something went wrong";
      setLoading(false);
      setError(err);
      throw new Error(err);
    }
  };
};

export const verifyEmail = (code, setLoading) => {
  setLoading(true);
  return async () => {
    const { res, error } = await https.post(
      `${import.meta.env.VITE_BASE_URL}verify-email`,
      code
    );
    if (res) {
      console.log("res", res);
      setLoading(false);
    }
    if (error) {
      const err = error.response.data.message || "Something went wrong";
      setLoading(false);
      throw new Error(err);
    }
  };
};
export const login = (user, setLoading) => {
  setLoading(true);
  return async (dispatch) => {
    const { res, error } = await https.post(
      `${import.meta.env.VITE_BASE_URL}login`,
      user
    );
    if (res) {
      dispatch({ type: LOGIN, payload: res.data });
      setLoading(false);
    }
    if (error) {
      const err = error.response.data.message || "Something went wrong";
      setLoading(false);
      throw new Error(err);
    }
  };
};
export const forgotPassword = (user, setLoading) => {
  setLoading(true);
  return async () => {
    const { res, error } = await https.post(
      `${import.meta.env.VITE_BASE_URL}forgot-password`,
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
      `${import.meta.env.VITE_BASE_URL}logout`
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