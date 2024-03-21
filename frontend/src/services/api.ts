import axios, { AxiosInstance } from "axios";

const url = process.env.APP_URL || "http://localhost:5000";

const baseURL = `${url}/api`;

const instance: AxiosInstance = axios.create({
  baseURL,
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error);
    throw error;
  }
);

export default instance;
