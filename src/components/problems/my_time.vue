<template>
  <div class="time-box">
    <div class="title">
      {{ index + 1 }} . {{ problem.title }}
      <span class="require" v-if="problem.required">*</span
      ><span class="type">[时间题]</span>
    </div>
    <div class="time">
      <a-time-picker
        v-model:value="result"
        value-format="HH:mm:ss"
        :disabled="isUse"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "timeQuestion",
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
.time-box {
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
.time {
  margin-top: 16px;
  margin-left: 16px;
  width: 200px;
}
</style>