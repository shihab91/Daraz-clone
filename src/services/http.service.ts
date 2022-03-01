import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 1500,
};

const instance: AxiosInstance = axios.create(axiosConfig);
// instance.get("/products").then((res) => res.data);

class Request {}
const httpReq = new Request();

export default httpReq;
