// 注册所需要参数
export interface Register {
  account: string;
  pwd: string;
  confirmPwd: string;
}

// 登入所需要参数
export interface Login {
  account: string;
  pwd: string;
}

export class LoginData {
  loginData: Login = {
    account: "123",
    pwd: "123",
  };
}

export class RegisterData {
  registerData: Register= {
    account: "",
    pwd: "",
    confirmPwd: "",
  };
}
