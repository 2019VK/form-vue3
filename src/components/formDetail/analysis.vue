<template>
  <div class="main-header" >
    <!-- 显示一共多少份答案 -->
    <div class="form-title">
      共收集{{ total }}份数据（{{ status }}）
    </div>
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
      <!-- 表单标题
      <div v-if="data.info.title" class="formTitle_r">
        {{ data.info.title }}
      </div>
      <div class="subtitle">
        <span v-if="data.info.subTitle">{{ data.info.subTitle }}</span>
      </div> -->
    </div>
    <!-- 结果显示组件 -->
    <div >
      <!-- <Result
        v-for="(res, index) in data.items[page].result"
        :key="index"
        :index="index + 1"
        :title="res.title"
        :typeRaw="res.type"
        :resultRaw="res.result"
      ></Result> -->
    </div>
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "analysisView",
  setup() {
    const total = 4 
    const status = "收集中"
    const page = 1
    return {
      total,
      status,
      page
    };
  },
});
</script>
<style scoped>
/* 引用图标 */
@font-face {
    font-family: 'iconfont';
    src: url('./assets/iconfont.ttf') format('truetype');
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
    color: #3C414B;
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