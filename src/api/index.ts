// // 当前模块对api统一管理
// import request from "./request";


// /* Auth接口 */

// // 登录接口函数
// export const reqLogin = (data) => {
//   return request({
//     url:'auth/login',
//     data:data,
//     method:'post'
//   })
// }

// // 注册接口函数
// export const reqRegister = (data) => {
//   return request({
//     url:'auth/register',
//     data:data,
//     method:'post'
//   })
// }

// // 退出登录接口函数
// export const reqLogout = () => {
//   return request({
//     url:'auth/logout',
//     method:'post'
//   })
// }


// /* User接口 */

// // 获取用户信息接口函数
// export const reqGetInfo = () => {
//   return request({
//     url:'user/getInfo',
//     method:'get'
//   })
// }

// // 设置用户信息接口函数
// export const reqSetInfo = (data) => {
//   return request({
//     url:'user/setInfo',
//     data,
//     method:'post',
//   })
// }

// // 修改密码接口函数
// export const reqChangePwd = (data) => {
//   return request({
//     url:'user/changePwd',
//     data,
//     method:'post'
//   })
// }

// /* Form接口 */

// // 获取form列表
// export const reqGetFormList = (data) => {
//   return request({
//     url:'form/list',
//     method:'post',
//     data
//   })
// }

// // 创建表单
// export const reqCreateForm = (data) => {
//   return request({
//     url:'form/create',
//     method:'post',
//     data,
//   })
// }

// // 获取表单
// export const reqGetForm = (id) => {
//   return request({
//     url:'form/get',
//     method:'post',
//     data:id
//   })
// }

// // 删除表单
// export const reqDeleteForm = (id) => {
//   return request({
//     url:'form/delete',
//     method:'post',
//     data:id
//   })
// }

// // 收藏表单
// export const reqStarForm = (id) => {
//   return request({
//     url:'form/star',
//     method:'post',
//     data:id
//   })
// }

// // 取消收藏
// export const reqCancelStarForm = (id) => {
//   return request({
//     url:'form/cancelStar',
//     method:'post',
//     data:id
//   })
// }

// // 填写表单
// export const reqInputForm = (form) => {
//   return request({
//     url:'form/input',
//     method:'post',
//     data:form
//   })
// }

// // 获取表单填写详情
// export const reqFromResult = (formId) => {
//   return request({
//     url:`form/formResult/${formId}`,
//     method:'get',
//   })
// }

// // 获取表单单个填写详情
// export const reqFromDetail = (id) => {
//   return request({
//     url:`form/detail/${id}`,
//     method:'post',
//   })
// }

// // 开始收集表单
// export const reqStartForm = (id) => {
//   return request({
//     url:`form/start`,
//     method:'post',
//     data:id
//   })
// }

// // 开始收集表单
// export const reqEndForm = (id) => {
//   return request({
//     url:`form/end`,
//     method:'post',
//     data:id
//   })
// }

// /* problem相关接口 */

// // 获取基础题目类型
// export const reqGetListType = () => {
//   return request({
//     url:'problem/listType',
//     method:'get'
//   })
// }

// // 获取基础题目
// export const reqGetListBasic = () => {
//   return request({
//     url:'problem/listBasic',
//     method:'get'
//   })
// }

// // 获取收藏的题目
// export const reqGetListStar = () => {
//   return request({
//     url:'problem/listStar',
//     method:'post'
//   })
// }

// // 收藏题目
// export const reqStarProblem = (problem) => {
//   return request({
//     url:'problem/star',
//     method:'post',
//     data:problem
//   })
// }

// // 取消收藏题目
// export const reqCancelStarProblem = (id) => {
//   return request({
//     url:'problem/cancelStar',
//     method:'post',
//     data:id
//   })
// }