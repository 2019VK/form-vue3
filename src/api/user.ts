/* User接口 */
import request from "./request";

// 引入类型
import { SetInfo,ChangePwd } from "@/type/user";

// 获取用户信息接口函数
export const reqGetInfo = () => {
  return request({
    url:'user/getInfo',
    method:'get'
  })
}

// 设置用户信息接口函数
export const reqSetInfo = (data:SetInfo) => {
  return request({
    url:'user/setInfo',
    data,
    method:'post',
  })
}

// 修改密码接口函数
export const reqChangePwd = (data:ChangePwd) => {
  return request({
    url:'user/changePwd',
    data,
    method:'post'
  })
}