<template>
  <header>
    <div class="header">
      <div class="header_left" @click="goBack">
        <img src="./assets/goback.png" />
        <span>新建表单</span>
      </div>
      <!-- 头像昵称 -->
      <AvaNickname></AvaNickname>
    </div>
  </header>
  <main>
    <div class="container">
      <!-- 左侧 -->
      <div class="left-item">
        <span>添加题目</span>
        <div class="question-btn">
          <button
            v-for="(item, index) in problemTypes"
            :key="index"
            @click="addQuestion(item.type)"
          >
            {{ item.title }}
          </button>
        </div>
        <span>基础题目</span>
        <div class="question-btn">
          <button
            v-for="(item, index) in basicProblems"
            :key="index"
            @click="addbaiscProblem(item.title)"
          >
            {{ item.title }}
          </button>
        </div>
        <span>我的常用题</span>
      </div>
      <!-- 中间 -->
      <div class="center-item">
        <div class="center-item_title">
          <div>
            <input
              type="text"
              class="input title_text"
              placeholder="请输入表单标题"
              v-model="title"
            />
          </div>
          <div>
            <input
              type="text"
              class="input subtitle"
              placeholder="输入表单副标题"
              v-model="subTitle"
            />
          </div>
          <component
            v-for="(problem, index) in problems"
            :key="index + createId()"
            :is="problem.type.length > 5 ? 'selectQuestion' : 'inputQuestion'"
            :q_index="index"
            :problem="problem"
            :delete="deleteProblem"
            :createId="createId"
            :problemTypes="problemTypes"
          ></component>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="right-item">
        <button @click="toProblem">预览</button>
        <button @click="saveDraftForm">保存草稿</button>
        <button class="create" @click="createForm">完成创建</button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  toRefs,
} from "vue";
// 引入生成随机id的包（因为动态v-for的key要唯一）
import { v4 as uuidv4 } from "uuid";
// 引入组件
import AvaNickname from "@/components/index/AvaNickname.vue";
import inputQuestion from "@/components/createForm/inputQuestion.vue";
import selectQuestion from "@/components/createForm/selectQuestion.vue";
// 引入vuex仓库、路由
import { useStore } from "vuex";
import { useRouter} from "vue-router";
// 引入类型，题目的类型，初始化创建的参数
import { Problem } from "@/type/problem";
import { createFormData } from "@/type/form";
// 引入向服务器发请求的函数
import { reqCreateForm } from "@/api/form";
// 引入element-plus函数
import { ElMessage, ElMessageBox } from "element-plus";

export default defineComponent({
  name: "CreateForm",
  // 注册组件
  components: { AvaNickname, inputQuestion, selectQuestion },
  setup() {
    // vuex仓库、路由器
    const Store = useStore();
    const router = useRouter()
    // 将vuex仓库中的题目类型和基础题目取出来
    const problemTypes = computed(() => {
      return Store.state.PROBLEM.problemTypes;
    });
    const basicProblems = computed(() => {
      return Store.state.PROBLEM.basicProblems;
    });
    // 定义form味表单的输入数据，title，subTitle，problems
    let form = reactive(new createFormData());
    // 添加题目的函数，用来添加表单中的题目
    /* 判断输入的type，看是添加填空的还是选择的题目 */
    function addQuestion(
      type:
        | "input"
        | "singleSelect"
        | "multiSelect"
        | "pullSelect"
        | "date"
        | "time"
        | "score"
    ) {
      if (type.indexOf("Select") != -1) {
        addSelectProblem(type);
      } else {
        addInputProblem(type);
      }
    }
    // 添加填空题的函数
    function addInputProblem(
      type:
        | "input"
        | "singleSelect"
        | "multiSelect"
        | "pullSelect"
        | "date"
        | "time"
        | "score"
    ) {
      const problem: Problem = {
        title: "",
        type: type,
        required: true,
      };
      form.problems.push(problem);
    }
    // 添加选择题的函数
    function addSelectProblem(
      type:
        | "input"
        | "singleSelect"
        | "multiSelect"
        | "pullSelect"
        | "date"
        | "time"
        | "score"
    ) {
      const problem: Problem = {
        required: true,
        setting: {
          options: [
            { title: "默认选项", status: 2 },
            { title: "默认选项", status: 2 },
          ],
        },
        title: "",
        type: type,
      };
      form.problems.push(problem);
    }
    // 左上角的返回
    /* 返回前根据是否输入title,subtitle,problems来提示是否弹出保存草稿 */
    function goBack() {
      if (form.title !== "" || form.subTitle !== "" || form.problems.length !== 0) {
        ElMessageBox.confirm("是否将本次表单保存草稿?", {
          confirmButtonText: "保存",
          cancelButtonText: "不保存",
        })
          .then(() => {
            saveDraftForm();
            router.back();
          })
          .catch(() => {
            ElMessage({
              type: "warning",
              message: "未保存草稿",
            });
            router.back();
          });
      }else{
        router.back();
      }
    }
    // 创建随机id的函数
    function createId() {
      return uuidv4();
    }
    // 删除题目的函数
    function deleteProblem(index: number) {
      form.problems.splice(index, 1);
    }
    // 添加基础题目
    function addbaiscProblem(title: string) {
      switch (title) {
        case "姓名":
          addNameProblem();
          break;
        case "性别":
          addSexProblem();
          break;
      }
    }
    // 添加姓名得到题目
    function addNameProblem() {
      const problem: Problem = {
        required: true,
        title: "姓名",
        type: "input",
      };
      form.problems.push(problem);
    }
    // 添加性别题目
    function addSexProblem() {
      const problem: Problem = {
        required: true,
        setting: {
          options: [
            { title: "男", status: 2 },
            { title: "女", status: 2 },
          ],
        },
        title: "性别",
        type: "singleSelect",
      };
      form.problems.push(problem);
    }
    // 向服务器发送请求创建表单
    async function createForm() {
      const res: any = await reqCreateForm(form);
      if (res.stat !== "ok") {
        ElMessage.error(`创建失败，${res.response.data.msg}`);
      } else {
        ElMessage({
          message: "创建成功！",
          type: "success",
        });
        router.push("/");
      }
    }
    // 保存草稿的函数，将界面中输入的form，保存至vuex仓库中
    function saveDraftForm() {
      Store.commit("updateDraftsForm", form);
      ElMessage({
        message: "保存草稿成功！",
        type: "success",
      });
    }
    // 在初始化的时候，获取基本题目类型，基本题目，以及进入的时候弹窗是否使用之前的草稿
    onMounted(() => {
      // 获取基本题目类型，基本题目
      Store.dispatch("getProblemType");
      Store.dispatch("getProblemBasic");
      // 先判断是否有保存的草稿
      if(Store.state.FORM.draftsForm.title){
        ElMessageBox.confirm("检测你有保存的草稿，是否使用?", {
          confirmButtonText: "使用",
          cancelButtonText: "不使用",
        })
          .then(() => {
            form.title = Store.state.FORM.draftsForm.title
            form.subTitle = Store.state.FORM.draftsForm.subTitle
            form.problems = Store.state.FORM.draftsForm.problems
          })
          .catch(() => {
            ElMessage('未使用草稿')
          });
      }
    });

    return {
      problemTypes,
      basicProblems,
      goBack,
      createId,
      addQuestion,
      deleteProblem,
      addbaiscProblem,
      createForm,
      ...toRefs(form),
      saveDraftForm, 
    };
  },
});
</script>

<style scoped>
header {
  background-color: #fff;
  height: 80px;
  align-items: center;
}
body {
  background-color: #f7f7f7;
  margin: 0;
  height: 100%;
}
input {
  background: none;
  outline: none;
  border: none;
}
input:focus {
  border: none;
}
main {
  margin: 10px auto;
}
img {
  width: 20px;
}
span {
  font-size: 15px;
}
button {
  width: 100px;
  height: 30px;
  background-color: #fff;
  color: #3d4757;
  border: 1px solid #e7e9eb;
  border-radius: 2px;
  cursor: pointer;
}
select {
  background: rgba(25, 55, 88, 0.08);
  height: 30px;
  font-size: 15px;
  color: #3e4858;
  text-align: center;
  border: none;
  border-radius: 5px;
}
option {
  color: black;
  box-shadow: 0 4px 16px 0 rgb(192 198 207 / 50%);
  line-height: 30px;
}
.header {
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  padding: 0 2.5%;
  border-bottom: 1px solid #e9e9e9;
}
.header_left {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.header_left span {
  padding-left: 8px;
  font-size: 16px;
}

.container {
  display: flex;
  flex-direction: row;
  width: auto;
  justify-content: center;
  height: 90%;
}
.left-item {
  margin: 20px;
  width: 280px;
  height: 720px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #e9e9e9;
}
.question-btn {
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
  justify-items: center;
}
.question-btn > button > img {
  vertical-align: bottom;
}
.center-item {
  align-items: center;
  display: flex;
  min-height: 720px;
  flex-direction: column;
  width: 610px;
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  border: 1px solid #e9e9e9;
}
.left-item_title {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding-top: 20px;
  text-align: center;
}
.center-item_title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title_text {
  font-size: 20px !important;
  font-weight: 700;
  text-align: center;
}
.subtitle {
  color: #aeb5c0;
  font-size: 15px;
  font-weight: 550;
  text-align: center;
}
.input {
  border: none;
  padding: 14px;
}
.question {
  padding: 10px;
  width: 540px;
  box-shadow: 0 4px 16px 0 rgb(192 198 207 / 50%);
  border-radius: 2px;
  margin-top: 20px;
  background-color: #fff;
}
.a-tiankong {
  border-bottom: 1.5px dashed rgb(192 198 207 / 50%);
}
.bottom1 {
  padding: 3px 5px;
  background: rgba(25, 55, 88, 0.08);
  border-radius: 1px;
  font-size: 12px;
  margin-right: 16px;
  border: nones;
}
.bottom2 {
  border: 1px solid #e2e6ed;
  font-size: 12px;
  margin-right: 10px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  cursor: pointer;
  padding: 3px 6px;
}
.right-item {
  display: grid;
  height: 720px;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  grid-gap: 25px;
  padding: 20px;
  grid-template-rows: 30px;
  margin: 20px;
  border: 1px solid #e9e9e9;
}
.bottom3 {
  display: flex;
  gap: 5px;
  align-items: center;
}
.question_bottom {
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: right;
}
.create {
  background-color: #1488ed;
  border: none;
  color: #fff;
}
</style>