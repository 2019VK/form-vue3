// 题目结构参数
export interface Type {
  type:
    | "input"
    | "singleSelect"
    | "multiSelect"
    | "pullSelect"
    | "date"
    | "time"
    | "score";
}

export interface Problem {
  title: string;
  type: "input" | "singleSelect" | "multiSelect"| "pullSelect" | "date" | "time" | "score";
  required: boolean;
  setting?: {
    options: {
      title: string;
      status: 1 | 2 ;
    }[];
  } | null;
}

export class FormProblems {
  problems: Problem[] = [];
}
