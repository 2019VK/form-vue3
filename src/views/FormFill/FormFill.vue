<template>
  <div class="box-header">
    <div class="left-wrap">
      <div class="headerbtn" @click="goIndex">
        <img src="./assets/goback.png" class="goback" />
        <span>{{ form.title }}</span>
      </div>
    </div>
    <AvaNickname></AvaNickname>
  </div>
  <main class="main">
    <div class="page_content" id="form_Container">
      <div class="form-write-components" id="form_area">
        <div class="Title-index__title">
          {{ form.title }}
        </div>
        <div class="Title-index__subtitle">
          <span style="word-break: break-all">{{ form.subTitle }}</span>
        </div>

        <div class="problems">
          <problems :isUse="false" :problems="form.problems"></problems>
        </div>

        <div class="formFill">
          <span class="formFillBtn" @click="onSubmit">提交</span>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent, computed, provide, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import AvaNickname from "@/components/index/AvaNickname.vue";
import problems from "@/components/problems/problems.vue";
import { reqInputForm } from "@/api/form";
export default defineComponent({
  name: "formFill",
  components: {
    problems,
    AvaNickname,
  },
  setup() {
    const Store = useStore();
    const route = useRoute();
    const router = useRouter();
    let formFillinfo: any = reactive({
      formId: "",
      problems: [],
    });
    Store.dispatch("getForm", route.query.id).then(() => {
      formFillinfo.formId = Store.state.FORM.form.id;
      formFillinfo.problems = Store.state.FORM.form.problems;
    });
    const form = computed(() => {
      return Store.state.FORM.form;
    });
    function goIndex() {
      router.push("/");
    }

    type Result =
      | string
      | number
      | {
          id: string;
          title: string;
        }
      | {
          id: string;
          title: string;
        }[];

    function receiveResult(index: number, result: Result) {
      // console.log(index, result);
      formFillinfo.problems[index].result = result;
    }
    async function onSubmit() {
      let isEmpty = false
      for (const item of formFillinfo.problems) {
        if(item.required){
          delete item.required
          if(!item.result){
            isEmpty = true
            break
          }
        }
      }
      if(isEmpty){
        alert('有必填项还未填写哦，请重新填写！')
        return
      }
      const res: any = await reqInputForm(formFillinfo);
      if (res.stat !== "ok") {
        alert(`填写失败，${res.response.data.msg}`);
      } else {
        alert("填写成功");
        router.push("/");
      }
    }
    provide("receiveResult", receiveResult);
    return {
      form,
      goIndex,
      formFillinfo,
      onSubmit,
    };
  },
});
</script>
<style scoped>
body {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  min-width: 1000px;
}

a {
  text-decoration: none;
  color: #000;
}

.box-header {
  height: 80px;
  background: #fff;
  box-shadow: 0 1px 0 0 #dbdbdb;
  border-radius: 2px;
  border: 1px solid #e7e9eb;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left-wrap {
  height: 80px;
  padding-left: 8px;
}
.headerbtn {
  height: 80px;
  cursor: pointer;
  font-size: 16px;
  vertical-align: middle;
  display: flex;
  font-size: 16px;
  align-items: center;
}
.headerbtn span {
  font-size: 16px;
  padding-left: 8px;
}
.goback {
  width: 20px;
  height: 20px;
  /* vertical-align: text-bottom; */
}
/* .main {
  max-width: 80%;
  min-width: 700px;
  margin-right: auto;
  margin-left: auto;
}  */

.page_content {
  margin: auto;
  background-color: #fff;
}

.form-write-components {
  position: relative;
  min-width: 700px;
  max-width: 1400px;
  margin: auto;
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

.problems {
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>