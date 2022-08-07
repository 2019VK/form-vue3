<template>
  <div class="score-box">
    <div class="title">
      {{ index + 1 }} . {{ problem.title }}
      <span class="require" v-if="problem.required">*</span
      ><span class="type">[打分题]</span>
    </div>
    <el-rate v-model="result" :disabled="isUse" class="rate" @change="sendResult"></el-rate>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref,inject } from "vue";
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "scoreQuestion",
  props: ['index','problem','isUse'],
  setup(props) {
    let result = ref(0);
    let receiveResult: any = inject("receiveResult");
    function sendResult(){
      if (props.problem.required && result.value === 0) {
        ElMessage.error("该题为必填项，不能为空");
        return;
      }
      receiveResult(props.index, result.value);
    }
    return {
      result,
      sendResult
    };
  },
});
</script>
<style scoped>
.score-box {
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
.rate {
  margin-top: 16px;
  margin-left: 16px;
}
</style>