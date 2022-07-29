/* Auth接口 */
import request from "./request";

import { Login,Register } from "@/type/auth";

// 登录接口函数
export const reqLogin = (data:Login) => {
  return request({
    url:'auth/login',
    data:data,
    method:'post'
  })
}

// 注册接口函数
export const reqRegister = (data:Register) => {
  return request({
    url:'auth/register',
    data:data,
    method:'post'
  })
}

// 退出登录接口函数
export const reqLogout = () => {
  return request({
    url:'auth/logout',
    method:'post'
  })
}