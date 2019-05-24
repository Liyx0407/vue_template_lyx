//request.js
import axios from "axios";
import Config from '../static/config';
import {
  Message,
  Loading
} from 'element-ui'

let baseURL = '';
let serverLoading;
if (process.env.NODE_ENV === 'production') {
  baseURL = Config.proUrl;
} else {
  baseURL = Config.devtUrl;
}
/****** 创建axios实例 ******/
const service = axios.create({
  baseURL: baseURL, // api的base_url
  timeout: 5000 // 请求超时时间
});
/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(config => {
  serverLoading = Loading.service({
    text: "加载数据中....",
    lock: true,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)',
    fullscreen: true
  });
  config.data = JSON.stringify(config.data)

  config.headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: sessionStorage.getItem("token")
  }
  return config;
}, error => { //请求错误处理
  serverLoading.close();
  console.log(error, "error");
  Message.error({
    message: "服务器开小差啦~"
  });
  Promise.reject("请求超时")
});
/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
  response => { //成功请求到数据
    serverLoading.close();
    //这里根据后端提供的数据进行对应的处理
    //   //解密数据
    // tripleDES.decode(response.data);

    // if (response.data.success === true) {




    //   return Promise.resolve(response.data);
    // } else {
    //   Message.error({
    //     message: "请求超时"
    //   });
    // }
  },
  error => { //响应错误处理
    serverLoading.close();
    Message.error({
      message: "请求超时"
    });
    console.log(error);
    return Promise.reject(error)
  }
);
export default service;
