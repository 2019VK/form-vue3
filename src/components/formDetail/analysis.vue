<template>
  <div class="main-header main">
    <!-- 显示一共多少份答案 -->
    <div class="form-title">共收集{{ total }}份数据（{{ status }}）</div>
    <div class="form-number">
      <!-- 切换答案 -->
      <button type="button" class="iconbtn" @click="prePage">
        <span class="iconfont">&#xe8ef;</span>
      </button>
      <span> 第 </span>
      <button type="button" class="numberbtn">
        <span class="iconfont">{{ page + 1 }}</span>
      </button>
      <span> 份 </span>
      <button type="button" class="iconbtn" @click="nextPage">
        <span class="iconfont">&#xe8f1;</span>
      </button>
    </div>
    <div class="formTitles">
      <!-- 表单标题 -->
      <div class="formTitle_r">
        {{ info?.title }}
      </div>
      <div class="subtitle">
        <span>{{ info?.subTitle }}</span>
      </div>
    </div>
    <!-- 结果显示组件 -->
    <div v-if="items">
      <Result
        v-for="(res, index) in items[page].result"
        :key="res.id"
        :index="index"
        :result="res"
      ></Result>
    </div>
    
  </div>
</template>
<script lang="ts">
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import Result from '@/components/result/result.vue'
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  name: "analysisView",
  components:{Result},
  setup() {
    const Store = useStore();
    const route = useRoute();
    Store.dispatch("getFormDetail", route.query.id);
    const page = ref(0);

    const formDetail = computed(() => {
      return Store.state.FORM.formDetail;
    });
    const items = computed(() => {
      return formDetail.value.items;
    });
    const info = computed(() => {
      return formDetail.value.info;
    });
    const total = computed(() => {
      return items.value?.length;
    });
    const status = computed(() => {
      switch (formDetail.value.info?.status) {
        case 1:
          return "已经删除";
        case 2:
          return "草稿";
        case 3:
          return "正在收集";
        case 4:
          return "已结束";
      }
      return "error";
    });
    function prePage(){
      if(page.value>0){
        page.value -= 1
      }
      return 
    }

    function nextPage(){
      if(page.value < total.value-1){
        page.value += 1
      }
      return 
    }
    
    return {
      formDetail,
      status,
      page,
      items,
      total,
      info,
      prePage,
      nextPage
    };
  },
});
</script>
<style scoped>
/* 引用图标 */
@font-face {
  font-family: "iconfont";
  src: url("./assets/iconfont.ttf") format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main-header {
  /* padding-left: 30px; */
  margin-top: 30px;
}
.form-title {
  font-size: 18px;
  margin-bottom: 20px;
  color: #3c414b;
  font-weight: 500;
  letter-spacing: 5px;
}
.form-number {
  font-size: 14px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e6ed;
}
.form-number span {
  font-size: 14px;
}
.iconbtn {
  padding: 4px 2px 1px 2px;
  border: 1px solid #e2e6ed;
  border-radius: 1px;
  cursor: pointer;
}
.numberbtn {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #e2e6ed;
  border-radius: 3px;
}
/* .form-time {
    margin-top: 20px;
    color: #767C85;
} */
.formTitles {
  text-align: center;
}
.formTitle_r {
  font-weight: 600;
  font-size: 20px;
  color: #3d4757;
  line-height: 22px;
  padding-top: 20px;
}
.subtitle {
  padding: 22px 0 10px;
  line-height: 20px;
  color: #767c85;
  font-size: 16px;
}
</style>