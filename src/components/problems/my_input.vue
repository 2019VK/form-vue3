<template>
  <div class="input-box">
    <div class="title">
      {{ index + 1 }} . {{ problem.title }}
      <span class="require" v-if="problem.required">*</span
      ><span class="type">[填空题]</span>
    </div>
    <el-input
      v-model="result"
      placeholder="请输入答案"
      :disabled="isUse"
      @change="sendResult"
    />
  </div>
</template>
<script lang="ts">
// 引入vue基础函数
import { defineComponent, ref, inject } from "vue";
// 引入element-plus的消息提示
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "inputQuestion",
  // 接收父组件的传值
  props: ["index", "problem", "isUse"],
  setup(props) {
    // 定义result双向绑定输入的值
    let result = ref("");
    // 注入爷爷组件传过来的函数
    let receiveResult: any = inject("receiveResult");
    // 发送所填写的结果给爷爷组件
    /*
     *如果输入空，应该直接返回，提示用户的
     * 不为空才发送给爷爷组件汇总
     */
    function sendResult(e: string) {
      if (props.problem.required && e.length === 0) {
        ElMessage.error("该题为必填项，不能为空");
        return;
      }
      receiveResult(props.index, e);
    }

    return {
      result,
      sendResult,
    };
  },
});
</script>
<style scoped>
.input-box {
  min-width: 70%;
  max-width: 90%;
  padding: 24px 16px;
  /* border-bottom: 1px solid rgba(25, 55, 88, 0.1); */
}
.title {
  font-weight: 600;
  font-size: 20px;
}
.require {
  font-weight: 600;
  color: #ff6060;
  margin-left: 8px;
}
.type {
  color: #707070;
  font-weight: 500;
  font-size: 18px;
  margin-left: 8px;
}
.el-input {
  margin-top: 16px;
}
.el-input__inner {
  outline: none;
}
</style>