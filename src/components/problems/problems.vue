<template>
  <component
    v-for="(problem, index) in problems"
    :key="problem.id"
    :index="index"
    :problem="problem"
    :isUse="isUse"
    :is="'my_' + problem.type"
  ></component>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import my_input from "@/components/problems/my_input.vue";
import my_singleSelect from "@/components/problems/my_singleSelect.vue";
import my_multiSelect from "@/components/problems/my_multiSelect.vue";
import my_pullSelect from "@/components/problems/my_pullSelect.vue";
import my_score from "@/components/problems/my_score.vue";
import my_date from "@/components/problems/my_date.vue";
import my_time from "@/components/problems/my_time.vue";
export default defineComponent({
  name: "FormFill",
  components: {
    my_input,
    my_singleSelect,
    my_multiSelect,
    my_pullSelect,
    my_score,
    my_date,
    my_time,
  },
  props: ["problems", "title", "subTitle", "isUse"],
  setup() {
    return {};
  },
});
</script>
<style scoped>
</style>