<template>
  <div class="box-header">
    <div class="left-wrap">
      <div class="headerbtn" @click="toCreate">
        <img src="./assets/goback.png" class="goback" />
        <span>退出预览</span>
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
          <span style="word-break: break-all">
            {{ form.subTitle }}
          </span>
        </div>

        <div class="problems">
          <problems :isUse="false" :problems="form.problems"></problems>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
// 引入vue基本函数
import { defineComponent, computed, provide } from "vue";
// 引入路由，路由器
import { useRoute, useRouter } from "vue-router";
// 引入题目组件
import problems from "@/components/problems/problems.vue";
// 引入生成随机id的包
import { v4 as uuidv4 } from "uuid";
// 引入输入结果的类型
import { Result } from '@/type/result'
export default defineComponent({
  name: "formPreview",
  // 注册组件
  components: {
    problems,
  },
  setup() {
    // 注册路由,路由器
    const route = useRoute();
    const router = useRouter();
    // 从params参数中取值
    /* 由于在渲染的过程中要用选项的id
     * 遍历给每一个选项加上一个id
     */
    const form = computed(() => {
      if (route.params.form) {
        let formTemp = JSON.parse(route.params.form as string);
        for (const item of formTemp.problems) {
          if (item.type.indexOf("Select") != -1) {
            item.setting.options;
            for (const opt of item.setting.options) {
              opt.id = createId();
            }
          }
        }
        return formTemp;
      } else {
        return null;
      }
    });
    // 创建随机id的函数
    function createId() {
      return uuidv4();
    }

    // 定义一个函数用来爷孙组件通信(空的是为了消除警告)
    function receiveResult(index: number, result: Result) {
      // formFillinfo.problems[index].result = result;
    }
    // 提供给后代组件
    provide("receiveResult", receiveResult);

    function toCreate() {
      router.push({
        name: "createform",
        params: {
          form: route.params.form,
        },
      });
    }

    return {
      form,
      toCreate,
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