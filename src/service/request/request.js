import axios from "axios";
import { BASE_URL, TIME_OUT } from "../config/index";
// import useMainStore from "@/stores/modules/main";

// const mainStore = useMainStore();

class ZFCRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    this.instance.interceptors.request.use(
      (config) => {
        // mainStore.isLoading = true;
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        // mainStore.isLoading = false;
        return res;
      },
      (err) => {
        // mainStore.isLoading = false;
        return err;
      }
    );
  }

  request(config) {
    // mainStore.isLoading = true
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
          // mainStore.isLoading = false
        })
        .catch((err) => {
          reject(err);
          // mainStore.isLoading = false
        });
    });
  }

  get(config) {

    return this.request({ ...config, method: "get" });
  }

  post(config) {
    console.log("baseurl",BASE_URL);
    return this.request({ ...config, method: "post" });
  }
}

export default new ZFCRequest(BASE_URL, TIME_OUT);
