import { reqGetFormList,reqGetForm,reqFromResult } from "@/api/form";
import { GetFormList,FormItem,FormList,CreateForm } from "@/type/form";
import { formResult } from "@/type/result";
import { ElMessage } from 'element-plus'

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
    // 未创建保存草稿的form
    draftsForm: {},
    // 当前表单
    form:{},
    // formDetail表单详细信息
    formDetail:{},
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
    },
    // 更新草稿form
    updateDraftsForm(state:any,form:CreateForm){
      state.draftsForm = form
    },
    // 修改vuex的当前表单form
    form(state: any, form: FormItem) {
      state.form = form;
    },
    // 修改vuex的当前表单详情formDetail
    formDetail(state: any, formDetail: formResult) {
      state.formDetail = formDetail;
    },

  },
  actions: {
    // 获取一页表单
    async getFormList(context: any, data: GetFormList) {
      const res: any = await reqGetFormList(data);
      // console.log(res);
      if (res.stat !== "ok") {
        // alert("获取表单列表失败");
        ElMessage.error('获取表单列表失败')
      } else {
        context.commit("formList", res.data);
      }
    },
    // 获取当前表单
    async getForm(context: any,id:string) {
      const res:any = await reqGetForm(id)
      if (res.stat !== "ok") {
        // alert("获取表单失败");
        ElMessage.error('获取表单失败')
      } else {
        context.commit("form", res.data.item);
      }
    },
    // 获取当前表单详细信息
    async getFormDetail(context: any,id:string) {
      const res:any = await reqFromResult(id)
      // console.log(res);
      if (res.stat !== "ok") {
        // alert("获取表单详情失败");
        ElMessage.error('获取表单详情失败')
      } else {
        context.commit("formDetail", res.data);
      }
    }
  },
  modules: {},
};
