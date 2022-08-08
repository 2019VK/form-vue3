<template>
  <div class="result">
    <div class="title">
      {{ index + 1 }} . {{ result.title }}
      <span class="require" v-if="result.required">*</span
      ><span class="type">[{{ type }}]</span>
    </div>
    <div class="answer">答案：{{ answer }}</div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "resultView",
  props: ["index", "result"],
  setup(props) {
    // 重新计算题目类型，显示为中文的题目类型
    const type = computed(() => {
      switch (props.result.type) {
        case "input":
          return "填空题";
        case "singleSelect":
          return "单选题";
        case "multiSelect":
          return "多选题";
        case "pullSelect":
          return "下拉选择题";
        case "date":
          return "日期题";
        case "time":
          return "时间题";
        case "score":
          return "分数题";
      }
      return "error";
    });
    // 重新计算显示answer
    /*
    * 填空题、日期、时间的result是string类型
    * 单选题、下拉选择题的result是object类型
    * 多选题的result是数组类型
    * 打分题的result是number类型
    * 都不是的话，则是用户未填写
    */
    const answer = computed(() => {
      switch (typeof props.result.result) {
        case "string":
          return props.result.result;
        case "number":
          return props.result.result+' 星';
        case "object":
          if (Array.isArray(props.result.result)) {
            let ans = "";
            for (const p of props.result.result) {
              ans = ans + p.title + " | ";
            }
            return ans.slice(0,ans.length-2);
          } else {
            return props.result.result.title;
          }
      }
      return "未填写";
    });

    return {
      type,
      answer,
    };
  },
});
</script>
<style scoped>
.result {
  min-width: 70%;
  max-width: 90%;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(25, 55, 88, 0.1);
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
.answer {
  color: #333;
  font-size: 18px;
  line-height: 22px;
  margin: 15px 0 5px 0;
}
</style>