import axios from "axios";
const https = {
  async post(url, data, config = {}) {
    try {
      const response = await axios.post(url, data, config);
      return { res: response, error: null };
    } catch (error) {
      return { res: null, error: error };
    }
  },
  async get(url, config = {}) {
    try {
      const response = await axios.get(url, config);
      return { res: response, error: null };
    } catch (error) {
      return { res: null, error: error };
    }
  },
  async put(url, data, config = {}) {
    try {
      const response = await axios.put(url, data, config);
      return { res: response, error: null };
    } catch (error) {
      return { res: null, error: error };
    }
  },
  async delete(url, data, config = {}) {
    try {
      const response = await axios.delete(url, data, config);
      return { res: response, error: null };
    } catch (error) {
      return { res: null, error: error };
    }
  },
};
export default https;
