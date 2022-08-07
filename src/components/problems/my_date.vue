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
        @change="onChange"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Dayjs } from "dayjs";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "dateQuestion",
  props: ["index", "problem", "isUse"],
  setup() {
    function onChange(value: Dayjs, dateString: string) {
      console.log("Selected Time: ", value);
      console.log("Formatted Selected Time: ", dateString);
    }
    return {
      value: ref<Dayjs>(),
      onChange,
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