import { reqGetInfo } from "@/api/user";
import { User } from "@/type/user";

export default {
  state: {
    user: {
      account: "", // 账户  String
      avatar: "", // 头像? Sting
      ctime: 0,
      id: "",
      nickname: "",
      pwd: "", //加密
      status: 3, // 1是删除，2是在线，3是离线
      utime: 0,
    },
    isLogin: localStorage.getItem('token') || ''
  },
  getters: {},
  mutations: {
    // 修改用户信息
    userInfo(state: any, user: User) {
      state.user = user;
    },
  },
  actions: {
    // 获取用户信息
    async getUserInfo(context: any) {
      const res: any = await reqGetInfo();
      if (res.stat !== "ok") {
        alert("获取用户信息失败");
      } else {
        context.commit("userInfo", res.data.user);
      }
    },
  },
  modules: {},
};
