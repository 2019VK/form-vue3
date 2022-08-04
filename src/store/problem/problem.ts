import { reqGetProblemType,reqGetProblemBasic } from '@/api/problem'

export default{
  namespace:true,
  state: {
    problemTypes:[],
    basicProblems:[]
  },
  getters: {
  },
  mutations: {
    problemType(state:any,problemTypes:any){
      state.problemTypes = problemTypes
    },
    problemBasic(state:any,basicProblems:any){
      state.basicProblems = basicProblems
    }
  },
  actions: {
    async getProblemType(context:any){
      const res:any = await reqGetProblemType()
      // console.log(res);
      if(res.stat !== 'ok'){
        alert('获取题目类型失败，请稍后重试')
      }else{
        context.commit('problemType',res.data.problemTypes)
      }
    },
    async getProblemBasic(context:any){
      const res:any = await reqGetProblemBasic()
      // console.log(res);
      if(res.stat !== 'ok'){
        alert('获取基本题目失败，请稍后重试')
      }else{
        context.commit('problemBasic',res.data.basicProblems)
      }
    }


  },
  modules: {
  }
}