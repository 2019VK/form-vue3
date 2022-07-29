// 设置用户信息所需参数
export interface SetInfo{
  nickname: string
  avatar: string
}

// 修改密码参数
export interface ChangePwd{
  oldPwd: string
  pwd: string
  confirmPwd: string
}