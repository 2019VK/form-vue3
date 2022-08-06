<template>
  <div class="contain">
    <main class="main">
      <div class="page_content" id="form_Container">
        <div class="form-write-components" id="form_area">
          <div class="Title-index__title">
            {{ form.title }}
          </div>
          <div class="Title-index__subtitle">
            <span style="word-break: break-all">{{
              form.subTitle
            }}</span>
          </div>

          <component
            v-for="(problem, index) in form.problems"
            :key="problem.id"
            :index="index"
            :problem="problem"
            :isUse="true"
            :is="'my_' + problem.type"
          ></component>

          <div class="formFill">
            <span class="formFillBtn" @click="toFormFill">填写表单</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import my_input from "@/components/problems/my_input.vue";
import my_singleSelect from "@/components/problems/my_singleSelect.vue";
import my_multiSelect from "@/components/problems/my_multiSelect.vue";
import my_pullSelect from "@/components/problems/my_pullSelect.vue";
import my_score from "@/components/problems/my_score.vue";
import my_date from "@/components/problems/my_date.vue";
import my_time from "@/components/problems/my_time.vue";
export default defineComponent({
  name: "questionView",
  components: {
    my_input,
    my_singleSelect,
    my_multiSelect,
    my_pullSelect,
    my_score,
    my_date,
    my_time,
  },
  setup() {
    const Store = useStore();
    const form = computed(() => {
      return Store.state.FORM.form;
    });
    return {
      form,
    };
  },
});
</script>
<style scoped>
body {
  margin: 0;
  font-family: Microsoft Yahei;
  font-size: 14px;
  line-height: 1.5;
  min-width: 1000px;
}

a {
  text-decoration: none;
  color: #000;
}

.contain {
  justify-content: center;
}

.main {
  justify-content: center;
}

header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  border-bottom: 1px solid #e7e9eb;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  padding: 0 16px;
  background: white;
  padding: 0 30px;
  align-content: center;
}

.header-inner {
  line-height: 25px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.header_title {
  font-size: 16px;
  font-weight: 500;
  padding-left: 8px;
  color: #333;
  margin: 0.67em 0;
}

.goback {
  width: 20px;
  height: 20px;
  /* vertical-align: text-bottom; */
}

.page_content {
  width: 776px;
  margin: auto;
  min-height: calc(100vh - 88px);
  background-color: #fff;
}

.form-write-components {
  position: relative;
  padding: 48px 102px 90px;
}

.Title-index__title {
  line-height: 22px;
  font-size: 20px;
  text-align: center;
  color: #3d4757;
  font-weight: 700;
  word-break: break-all;
  user-select: text;
}

.Title-index__subtitle {
  margin: 0;
  padding: 22px 0 10px;
  line-height: 20px;
  user-select: text;
  color: #767c85;
  text-align: center;
}

.formFill {
  margin-top: 38px;
  flex-direction: column;
  align-items: center;
  display: flex;
}

.formFillBtn {
  background-color: #1488ed;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  height: 32px;
  border-radius: 2px;
  display: flex;
  line-height: 32px;
  padding: 0 20px;
}

.checkbox_item {
  margin: 0;
}
</style>