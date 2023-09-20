import axios from "axios";
import { ElMessage } from "element-plus";
const config = {
  baseURL: "http://shiyansong.cn:8888/api/private/v1",
};

class Request {
  instance: any;
  constructor(config: any) {
    this.instance = axios.create(config);
    this.instance.interceptors.request.use((config: any) => {
      let token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    });
    this.instance.interceptors.response.use((res: any) => {
      if (res.data.meta.status === 200) {
        ElMessage({
          message: res.data.meta.msg,
          type: "success",
        });
      } else {
        ElMessage({
          message: res.data.meta.msg,
          type: "error",
        });
      }
      return res;
    });
  }
  get(url: string, params: any) {
    return this.instance.get(url, params);
  }
  post(url: string, params: any) {
    return this.instance.post(url, params);
  }
  put(url: string, params: any) {
    return this.instance.put(url, params);
  }
  delete(url: string, params: any) {
    return this.instance.delete(url, params);
  }
}

export default new Request(config);
