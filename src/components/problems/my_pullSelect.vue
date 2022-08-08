<template>
  <div class="pullSelect-box">
    <div class="title">
      {{ index + 1 }} . {{ problem.title }}
      <span class="require" v-if="problem.required">*</span
      ><span class="type">[下拉选择题]</span>
    </div>
    <a-select
      v-if="!isUse"
      ref="select"
      class="select"
      :disabled="isUse"
      v-model:value="id"
      @change="sendResult"
    >
      <a-select-option
        v-for="option in problem.setting.options"
        :key="option.id"
        :value="option.id"
        >{{ option.title }}
      </a-select-option>
    </a-select>
    <ul v-else class="list">
      <li v-for="option in problem.setting.options" :key="option.id">
        {{ option.title }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
// 引入vue基本的函数
import { defineComponent, ref, reactive, inject } from "vue";
// 引入element的消息提示
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "pullSelect",
  // 接收父组件的值
  props: ["index", "problem", "isUse"],
  setup(props) {
    // 定义id双向绑定选择的id
    const id = ref("");
    // 定义需要的result
    const result = reactive({
      id: "",
      title: "",
    });
    // 接收发result给爷爷组件的函数
    let receiveResult: any = inject("receiveResult");
    // 发送所填写的结果给爷爷组件
    /*
     *先将result的值更新为新的数据
     *根据得到的id用find函数找到相对应的title
     *如果输入空，应该直接返回，提示用户
     * 不为空才发送给爷爷组件汇总
     */
    function sendResult() {
      result.id = id.value;
      if (props.problem.required && result.id.length === 0) {
        ElMessage.error("该题为必填项，不能为空");
        return;
      }
      result.title = props.problem.setting.options.find(
        (item: any) => item.id === id.value
      ).title;
      receiveResult(props.index, result);
    }

    return {
      id,
      result,
      sendResult,
    };
  },
});
</script>
<style scoped>
.pullSelect-box {
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
.select {
  margin-top: 16px;
  margin-left: 16px;
  width: 200px;
}
.list {
  margin-top: 16px;
  margin-left: 32px;
  color: #707070;
  font-size: 16px;
}
</style>