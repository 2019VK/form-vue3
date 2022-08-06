<template>
  <div class="input-box">
    <div class="title">
      {{ index + 1 }} . {{ problem.title }}
      <span class="require" v-if="problem.required">*</span
      ><span class="type">[填空题]</span>
    </div>
    <el-input v-model="result" placeholder="请输入答案" :disabled="isUse" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "inputQuestion",
  props: ["index", "problem", "isUse"],
  setup() {
    let result = ref("");

    return {
      result,
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