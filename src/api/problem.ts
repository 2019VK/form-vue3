/* problem相关接口 */
import request from "./request";

import { Problem } from "@/type/problem";

// 获取基础题目类型
export const reqGetListType = () => {
  return request({
    url: "problem/listType",
    method: "get",
  });
};

// 获取基础题目
export const reqGetListBasic = () => {
  return request({
    url: "problem/listBasic",
    method: "get",
  });
};

// 获取收藏的题目
export const reqGetListStar = () => {
  return request({
    url: "problem/listStar",
    method: "post",
  });
};

// 收藏题目
export const reqStarProblem = (problem: Problem) => {
  return request({
    url: "problem/star",
    method: "post",
    data: problem,
  });
};

// 取消收藏题目
export const reqCancelStarProblem = (id: string) => {
  return request({
    url: "problem/cancelStar",
    method: "post",
    data: { id },
  });
};
