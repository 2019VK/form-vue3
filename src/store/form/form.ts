import { reqGetFormList } from "@/api/form";
import { GetFormList } from "@/type/form";
import { FormList } from "@/type/form";

export default {
  state: {
    formList: {},
    pageInfo1: {
      offset: 0, //number类型,可选   第几页
      limit: 8, //number类型,可选   一页限制显示多少个
      isStar:false
    },
    pageInfo2: {
      offset: 0, //number类型,可选   第几页
      limit: 8, //number类型,可选   一页限制显示多少个
      isStar:true
    },
  },
  getters: {},
  mutations: {
    // 修改vuex的表单列表
    formList(state: any, formList: FormList) {
      state.formList = formList;
    },
  },
  actions: {
    // 获取一页表单
    async getFormList(context: any, data: GetFormList) {
      const res: any = await reqGetFormList(data);
      console.log(res);
      if (res.stat !== "ok") {
        alert("获取表单列表失败");
      } else {
        context.commit("formList", res.data);
      }
    },
  },
  modules: {},
};
