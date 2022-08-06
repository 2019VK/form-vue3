/* Form接口 */
import request from "./request";

// 引入类型
import { GetFormList, InputForm, CreateForm } from "@/type/form";

// 获取form列表
export const reqGetFormList = (data?: GetFormList) => {
  return request({
    url: "form/list",
    method: "post",
    data,
  });
};

// 创建表单
export const reqCreateForm = (data: CreateForm) => {
  return request({
    url: "form/create",
    method: "post",
    data,
  });
};

// 获取表单
export const reqGetForm = (id: string) => {
  return request({
    url: "form/get",
    method: "post",
    data: { id },
  });
};

// 删除表单
export const reqDeleteForm = (id: string) => {
  return request({
    url: "form/delete",
    method: "post",
    data: { id },
  });
};

// 收藏表单
export const reqStarForm = (id: string) => {
  return request({
    url: "form/star",
    method: "post",
    data: { id },
  });
};

// 取消收藏
export const reqCancelStarForm = (id: string) => {
  return request({
    url: "form/cancelStar",
    method: "post",
    data: { id },
  });
};

// 填写表单
export const reqInputForm = (form: InputForm) => {
  return request({
    url: "form/input",
    method: "post",
    data: form,
  });
};

// 获取表单填写详情
export const reqFromResult = (formId: string) => {
  return request({
    url: `form/formResult/${formId}`,
    method: "get",
  });
};

// 获取表单单个填写详情
export const reqFromDetail = (id: string) => {
  return request({
    url: `form/detail/${id}`,
    method: "post",
  });
};

// 开始收集表单
export const reqStartForm = (id: string) => {
  return request({
    url: `form/start`,
    method: "post",
    data: { id },
  });
};

// 结束收集表单
export const reqEndForm = (id: string) => {
  return request({
    url: `form/end`,
    method: "post",
    data: { id },
  });
};
