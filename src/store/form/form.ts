import { reqGetFormList } from "@/api/form";
import { GetFormList } from "@/type/form";
import { FormList } from "@/type/form";

export default {
  namespace:true,
  state: {
    formList: {
      items:[],
      total:0,
    },
    // 普通请求表单参数
    formInfo: {
      offset: 0, //number类型,可选   第几页, 0开始
      limit: 8, //number类型,可选   一页限制显示多少个
      // isStar:false
    },
    // 请求收藏表单参数
    formStarInfo: {
      offset: 0, //number类型,可选   第几页, 0开始
      limit: 8, //number类型,可选   一页限制显示多少个
      isStar:true
    },
  },
  getters: {
    allPage(state:any){
      return Math.ceil(state.formList.total/state.formInfo.limit)
    }
  },
  mutations: {
    // 修改vuex的表单列表
    formList(state: any, formList: FormList) {
      state.formList = formList;
    },
    // 修改formInfo
    changeFormInfo(state: any,offset:number){
      state.formInfo.offset += offset 
    },
    // 修改formInfo
    changeFormStarInfo(state: any,offset:number){
      state.formStarInfo.offset += offset 
    }
  },
  actions: {
    // 获取一页表单
    async getFormList(context: any, data: GetFormList) {
      const res: any = await reqGetFormList(data);
      // console.log(res);
      if (res.stat !== "ok") {
        alert("获取表单列表失败");
      } else {
        context.commit("formList", res.data);
      }
    },
  },
  modules: {},
};
