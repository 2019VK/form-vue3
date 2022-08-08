// 题目结构参数
export type problemType =
  | "input"
  | "singleSelect"
  | "multiSelect"
  | "pullSelect"
  | "date"
  | "time"
  | "score";

export interface Problem {
  title: string;
  type:problemType;
  required: boolean;
  setting?: {
    options: {
      title: string;
      status: 1 | 2;
    }[];
  } | null;
}

export class FormProblems {
  problems: Problem[] = [];
}
