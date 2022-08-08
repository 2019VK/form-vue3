<template>
  <div class="date-box">
    <div class="title">
      {{ index + 1 }} . {{ problem.title }}
      <span class="require" v-if="problem.required">*</span
      ><span class="type">[日期题]</span>
    </div>
    <div class="date">
      <a-date-picker
        v-model:value="value"
        format="YYYY-MM-DD"
        :disabled="isUse"
        @change="sendResult"
      />
    </div>
  </div>
</template>
<script lang="ts">
// 引入date的函数
import { Dayjs } from "dayjs";
// 引入vue基本的函数
import { defineComponent, ref, inject } from "vue";
// 引入element的消息提示
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "dateQuestion",
  // 接收父组件的值
  props: ["index", "problem", "isUse"],
  setup(props) {
    // 接收发result给爷爷组件的函数
    let receiveResult: any = inject("receiveResult");
    // 发送所填写的结果给爷爷组件
    /*
     *dateString为需要得到result值
     *如果输入空，应该直接返回，提示用户的
     * 不为空才发送给爷爷组件汇总
     */
    function sendResult(value: Dayjs, dateString: string) {
      if (props.problem.required && dateString.length === 0) {
        ElMessage.error("该题为必填项，不能为空");
        return;
      }
      receiveResult(props.index, dateString);
    }

    return {
      value: ref<Dayjs>(),
      sendResult,
    };
  },
});
</script>
<style scoped>
.date-box {
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
.date {
  margin-top: 16px;
  margin-left: 16px;
  width: 200px;
}
</style>