<template>
  <div class="contain">
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
            <problems :isUse="true" :problems="form.problems"></problems>
          </div>

          <div class="formFill">
            <span class="formFillBtn" @click="toFormFill">填写表单</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
// 引入基本注册组件和计算属性
import { defineComponent, computed, provide } from "vue";
// 引入vuex仓库
import { useStore } from "vuex";
// 引入路由器，路由
import { useRoute, useRouter } from "vue-router";
// 引入题目组件（里面封装了7种题目组件）
import problems from "@/components/problems/problems.vue";
export default defineComponent({
  name: "questionView",
  // 注册组件
  components: {
    problems,
  },
  setup() {
    // 定义仓库，路由，路由器
    const Store = useStore();
    const route = useRoute();
    const router = useRouter();
    // 从仓库中取当前表单信息
    const form = computed(() => {
      return Store.state.FORM.form;
    });
    // 跳转表单填写函数
    function toFormFill() {
      router.push({
        path: "/formfill",
        query: {
          //路由传的参数 form 在formdetail接收
          id: route.query.id,
        },
      });
    }
    // 注入空参数给组件，消除警告
    provide("receiveResult", receiveResult);
    // 空函数，消除警告
    function receiveResult() {
      //
    }

    return {
      form,
      toFormFill,
    };
  },
});
</script>
<style scoped>
body {
  margin: 0;
  font-family: Microsoft Yahei;
  font-size: 14px;
  line-height: 1.5;
  min-width: 1000px;
}

a {
  text-decoration: none;
  color: #000;
}

header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  border-bottom: 1px solid #e7e9eb;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  padding: 0 16px;
  background: white;
  padding: 0 30px;
  align-content: center;
}

/* .main {
  max-width: 80%;
  min-width: 700px;
  margin-right: auto;
  margin-left: auto;
}  */

.header-inner {
  line-height: 25px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.header_title {
  font-size: 16px;
  font-weight: 500;
  padding-left: 8px;
  color: #333;
  margin: 0.67em 0;
}

.goback {
  width: 20px;
  height: 20px;
  /* vertical-align: text-bottom; */
}

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

.checkbox_item {
  margin: 0;
}
</style>