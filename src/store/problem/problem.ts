import { reqGetProblemType,reqGetProblemBasic } from '@/api/problem'
import { ElMessage } from 'element-plus'

export default{
  namespace:true,
  state: {
    // 定义problemTypes存储题目的种类
    problemTypes:[],
    // 定义basicProblems存储基本的题目
    basicProblems:[]
  },
  getters: {
  },
  mutations: {
    // 修改state的problemTypes
    problemType(state:any,problemTypes:any){
      state.problemTypes = problemTypes
    },
    // 修改state的basicProblems
    problemBasic(state:any,basicProblems:any){
      state.basicProblems = basicProblems
    }
  },
  actions: {
    // 向服务器发送请求获取题目类型
    async getProblemType(context:any){
      const res:any = await reqGetProblemType()
      // console.log(res);
      if(res.stat !== 'ok'){
        // alert('获取题目类型失败，请稍后重试')
        ElMessage.error('获取题目类型失败，请稍后重试')
      }else{
        context.commit('problemType',res.data.problemTypes)
      }
    },
    // 向服务器发送请求获取基础题目
    async getProblemBasic(context:any){
      const res:any = await reqGetProblemBasic()
      // console.log(res);
      if(res.stat !== 'ok'){
        // alert('获取基本题目失败，请稍后重试')
        ElMessage.error('获取基本题目失败，请稍后重试')
      }else{
        context.commit('problemBasic',res.data.basicProblems)
      }
    }


  },
  modules: {
  }
}