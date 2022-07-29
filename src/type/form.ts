// 引入problem类型
import { Problem } from "./problem"

// 获取列表参数
export interface GetFormList{
  offset?: number
  limit?: number
  isStar?: boolean
}

// 创建表单参数
export interface CreateForm{
  title: string
  subTitle: string
  problems:Problem[]
}

export interface ProblemRes{
  id: string
    title: string
    type: "input" | "singleSelect" | "multiSelect"| "pullSelect" | "date" | "time" | "score"
    required: boolean
    setting?: {
      options: {
        title: string
        status: 1 | 2
      }[]
    }
    result?: string | number | {
      id: string
      title: string
    } | {
      id: string
      title: string
    }[]
}

// 填写表单参数
export interface InputForm{
  formId: string
  problems: ProblemRes[]
}