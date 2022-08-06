<template>
  <div class="singleSelect-box">
    <div class="title">
      {{ index + 1 }} . {{ problem.title }}
      <span class="require" v-if="problem.required">*</span
      ><span class="type">[单选题]</span>
    </div>
    <div class="my-2 flex items-center text-sm">
      <el-radio-group v-model="result" class="ml-4" :disabled="isUse">
        <el-radio
          v-for="option in problem.setting.options"
          :key="option.id"
          :label="option.title"
          >{{ option.title }}</el-radio
        >
      </el-radio-group>
    </div>
  </div> 
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "singleSelect",
  props: ['index','problem','isUse'],
  setup() {
    const result = ref("");

    return {
      result,
    };
  },
});
</script>
<style scoped>
.singleSelect-box {
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
.my-2 {
  margin-top: 16px;
}
</style>