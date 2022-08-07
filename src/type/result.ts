// 定义答案的基本结构
import { Problem } from "./problem";

export interface info {
  info: {
    author: string;
    ctime: number;
    id: string;
    isStar: boolean;
    problems?: Problem[];
    status: number;
    subTitle: string;
    title: string;
    utime: number;
  };
}
export interface item {
  item: [
    {
      formAuthor: string;
      formId: string;
      id: string;
      result?:
        | string
        | number
        | {
            id: string;
            title: string;
          }
        | {
            id: string;
            title: string;
          }[];
    }
  ];
}
export interface formResult {
  info: info;
  item: item;
}
