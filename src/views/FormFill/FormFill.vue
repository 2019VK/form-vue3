<template>
  <!-- 顶部返回和头像模块 -->
  <div class="box-header">
    <div class="left-wrap">
      <div class="headerbtn" @click="goIndex">
        <img src="./assets/goback.png" class="goback" />
        <span>{{ form.title }}</span>
      </div>
    </div>
    <AvaNickname></AvaNickname>
  </div>
  <!-- 中间显示表单问题部分 -->
  <main class="main">
    <div class="page_content" id="form_Container">
      <div class="form-write-components" id="form_area">
        <div class="Title-index__title">
          {{ form.title }}
        </div>
        <div class="Title-index__subtitle">
          <span style="word-break: break-all">{{ form.subTitle }}</span>
        </div>

        <div class="problems">
          <problems :isUse="false" :problems="form.problems"></problems>
        </div>

        <div class="formFill">
          <span class="formFillBtn" @click="onSubmit">提交</span>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
// 引入vue基本函数
import { defineComponent, computed, provide, reactive } from "vue";
// 引入vuex仓库
import { useStore } from "vuex";
// 引入路由，路由器
import { useRoute, useRouter } from "vue-router";
// 引入头像组件
import AvaNickname from "@/components/index/AvaNickname.vue";
// 引入题目组件
import problems from "@/components/problems/problems.vue";
// 引入填写表单函数
import { reqInputForm } from "@/api/form";
// 引入输入结果的类型
import { Result } from "@/type/result";
// 引入element-plus的消息提示
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "formFill",
  // 注册组件
  components: {
    problems,
    AvaNickname,
  },
  setup() {
    // 注册仓库,路由,路由器
    const Store = useStore();
    const route = useRoute();
    const router = useRouter();
    // 定义发送给服务器请求的参数
    let formFillinfo: any = reactive({
      formId: "",
      problems: [],
    });
    // 向服务器发请求获取表单信息,成功后将部分数据赋值给formfill
    Store.dispatch("getForm", route.query.id).then(() => {
      formFillinfo.formId = Store.state.FORM.form.id;
      formFillinfo.problems = Store.state.FORM.form.problems;
    });
    // 从仓库中获取表单信息
    const form = computed(() => {
      return Store.state.FORM.form;
    });
    // 返回首页函数
    function goIndex() {
      router.push("/");
    }

    // 定义一个函数用来爷孙组件通信,通过provide提供给后代组件
    function receiveResult(index: number, result: Result) {
      formFillinfo.problems[index].result = result;
    }
    // 提供给后代组件
    provide("receiveResult", receiveResult);
    // 提交函数
    /*
     *提交前要判断是否有必填项未填,有的话直接结束函数
     *同时要处理:要把必填项的requred参数去掉
     *最后再调用接口向服务器发送请求
     */
    async function onSubmit() {
      // 定义常量表示是否有必填项未填,默认为false
      let isEmpty = false;
      // 遍历整个参数,如果有必填项,将其require参数去掉,如果答案为空,则将标识置为true
      for (const item of formFillinfo.problems) {
        // 判断是否为必填项
        if (item.required) {
          // 去除require参数
          delete item.required;
          // 判断结果是否为空
          if (!item.result) {
            isEmpty = true;
            break;
          }
        }
      }
      // 判断标识是否为true,为真则结束函数
      if (isEmpty) {
        // alert("有必填项还未填写哦，请重新填写！");
        ElMessage.error("有必填项还未填写哦，请重新填写！");
        return;
      }
      // 向服务器发请求
      const res: any = await reqInputForm(formFillinfo);
      if (res.stat !== "ok") {
        // alert(`填写失败，${res.response.data.msg}`);
        ElMessage.error(`填写失败，${res.response.data.msg}`);
      } else {
        // alert("填写成功");
        ElMessage({
          message: "填写成功",
          type: "success",
        });
        router.push("/");
      }
    }

    return {
      form,
      goIndex,
      formFillinfo,
      onSubmit,
    };
  },
});
</script>
<style scoped>
body {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  min-width: 1000px;
}

a {
  text-decoration: none;
  color: #000;
}

.box-header {
  height: 80px;
  background: #fff;
  box-shadow: 0 1px 0 0 #dbdbdb;
  border-radius: 2px;
  border: 1px solid #e7e9eb;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left-wrap {
  height: 80px;
  padding-left: 8px;
}
.headerbtn {
  height: 80px;
  cursor: pointer;
  font-size: 16px;
  vertical-align: middle;
  display: flex;
  font-size: 16px;
  align-items: center;
}
.headerbtn span {
  font-size: 16px;
  padding-left: 8px;
}
.goback {
  width: 20px;
  height: 20px;
  /* vertical-align: text-bottom; */
}
/* .main {
  max-width: 80%;
  min-width: 700px;
  margin-right: auto;
  margin-left: auto;
}  */

.page_content {
  margin: auto;
  background-color: #fff;
}

.form-write-components {
  position: relative;
  min-width: 700px;
  max-width: 1400px;
  margin: auto;
  padding: 48px 102px 90px;
}

.Title-index__title {
  line-height: 22px;
  font-size: 20px;
  text-align: center;
  color: #3d4757;
  font-weight: 700;
  word-break: break-all;
  user-select: text;
}

.Title-index__subtitle {
  margin: 0;
  padding: 22px 0 10px;
  line-height: 20px;
  user-select: text;
  color: #767c85;
  text-align: center;
}

.problems {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.formFill {
  margin-top: 38px;
  flex-direction: column;
  align-items: center;
  display: flex;
}

.formFillBtn {
  background-color: #1488ed;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  height: 32px;
  border-radius: 2px;
  display: flex;
  line-height: 32px;
  padding: 0 20px;
}
</style>