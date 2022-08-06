<template>
  <div class="multiSelect-box">
    <div class="title">
      {{ index + 1 }} . {{ problem.title }}
      <span class="require" v-if="problem.required">*</span
      ><span class="type">[多选题]</span>
    </div>
    <el-checkbox-group v-model="result" class="select" :disabled="isUse">
      <el-checkbox
        v-for="option in problem.setting.options"
        :key="option.id"
        :label="option.title"
        size="large"
      />
    </el-checkbox-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "multiSelect",
  props: ['index','problem','isUse'],
  setup() {
    const result = ref([]);

    return {
      result,
    };
  },
});
</script>
<style scoped>
.multiSelect-box {
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
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-left: 16px;
}
</style>