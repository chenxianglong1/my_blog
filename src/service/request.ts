// import axios from "axios";
import axios, { Axios, AxiosResponse, AxiosRequestConfig } from "axios";
import { ElMessage } from 'element-plus'

declare module "axios" {
  interface AxiosResponse<T = any> {
    code: null;
    msg: null;
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance;
}
const request = axios.create({
  timeout: 120000,
});

request.interceptors.request.use(
  config => {
    // const store = useAppStore();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => {
    const { code, msg } = response.data;
    if (code == 0) {
      return Promise.resolve(response.data)
    } else if (code === 4001 || code === 4009) {
      return Promise.reject(msg)
    } else if (code == "5000") {
      ElMessage.error(msg || '请求异常')
      console.error("请求异常", response);
    } else {
      msg && ElMessage.error(msg)
      return Promise.resolve(response.data)
    }
  },
  error => {
    if (error && error.response) {
      const res = {
        msg: error.response.status + error.response.statusText
      };
      ElMessage.error(res.msg)
      return Promise.reject(res)
    }
    return Promise.reject(error)
  },
);
export default request;
