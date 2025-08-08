import axios from "axios";

//sends cookies with requests
const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
const https = {
  async post(url, data, config = {}) {
    try {
      const response = await axiosInstance.post(url, data, config);
      return { res: response, error: null };
    } catch (error) {
      return { res: null, error: error };
    }
  },
  async get(url, config = {}) {
    try {
      const response = await axiosInstance.get(url, config);
      return { res: response, error: null };
    } catch (error) {
      return { res: null, error: error };
    }
  },
  async put(url, data, config = {}) {
    try {
      const response = await axiosInstance.put(url, data, config);
      return { res: response, error: null };
    } catch (error) {
      return { res: null, error: error };
    }
  },
  async delete(url, data, config = {}) {
    try {
      const response = await axiosInstance.delete(url, data, config);
      return { res: response, error: null };
    } catch (error) {
      return { res: null, error: error };
    }
  },
};
export default https;
