// 设置用户信息所需参数
export interface SetInfo {
  nickname: string;
  avatar: string;
}

// 修改密码参数
export interface ChangePwd {
  oldPwd: string;
  pwd: string;
  confirmPwd: string;
}

// 服务器接收的user
export interface User {
  account: string;
  avatar: string;
  ctime: number;
  id: string;
  nickname: string;
  pwd: string;
  status: number;
  utime: number;
}

// 修改密码参数类
export class ChangeUser {
  changePwd: ChangePwd = {
    oldPwd: "",
    pwd: "",
    confirmPwd: "",
  };
  setInfo: SetInfo = {
    nickname: "",
    avatar: "",
  };
}
