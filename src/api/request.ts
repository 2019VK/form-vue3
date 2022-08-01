// 引入axios
import axios from "axios";


// 创建axios实例对象request
// 重新配置request
const request = axios.create({
  // 基础路径
  baseURL:'http://localhost:8080/api',
  // 请求超时时长
  timeout:3000,
})

// 请求拦截器，在发请求之前，请求拦截器可以监测到，在请求之前做一些事情
request.interceptors.request.use((config) => {
  return config
})

// 响应拦截器
request.interceptors.response.use((res) => {
  // 成功回调函数，服务器数据回来后，可以监测到，做一些事情
  return res.data
},(err) =>{
  // 失败回调函数
  // console.log(err);
  return err
})

// 对外暴露
export default request