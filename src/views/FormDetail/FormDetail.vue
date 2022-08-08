<template>
  <div class="container">
    <div class="header">
      <!-- 顶部返回和头像模块 -->
      <div class="box-header">
        <div class="left-wrap">
          <div class="headerbtn" @click="goIndex">
            <img src="./assets/goback.png" class="goback" />
            <span>{{ form.title }}</span>
          </div>
        </div>
        <AvaNickname></AvaNickname>
      </div>
      <!-- 中间导航部分 -->
      <div class="box-footer">
        <router-link
          :to="{ path: '/formdetail/analysis', query: { id: form.id } }"
          class="optionals"
          active-class="optional-active"
          >数据统计&分析</router-link
        >
        <router-link
          :to="{ path: '/formdetail/questions', query: { id: form.id } }"
          class="optionals"
          active-class="optional-active"
          >表单问题</router-link
        >
        <router-link
          :to="{ path: '/formdetail/share', query: { id: form.id } }"
          class="optionals"
          active-class="optional-active"
          >分享</router-link
        >
      </div>
    </div>
    <!-- 根据导航显示不同的组件 -->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
// 引入头像昵称组件
import AvaNickname from "@/components/index/AvaNickname.vue";
// 引入路由，路由器
import { useRouter, useRoute } from "vue-router";
// 引入vue相关函数
import { computed, defineComponent, onMounted } from "vue";
// 引入仓库
import { useStore } from "vuex";
export default defineComponent({
  name: "FormDetail",
  // 注册组件
  components: { AvaNickname },
  setup() {
    // 注册路由器，路由，store仓库
    const router = useRouter();
    const route = useRoute();
    const Store = useStore();
    // 从仓库中取出表单信息form
    const form = computed(() => {
      return Store.state.FORM.form;
    });
    // 返回首页函数
    function goIndex() {
      router.push("/");
    }

    // 在挂载完毕后，向服务器发请求获取数据
    onMounted(() => {
      Store.dispatch("getForm", route.query.id);
      Store.dispatch("getFormDetail", route.query.id);
    });

    return {
      form,
      goIndex,
    };
  },
});
</script>
<style scoped>
body {
  font-size: 14px;
  padding: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  color: #333;
  background: #f5f5f5;
  overflow: auto;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none; /* 去除默认的下划线 */
  color: #000; /* 去除默认的颜色和点击后变化的颜色 */
}
/* 引用图标 */
@font-face {
  font-family: "iconfont";
  src: url("./assets/iconfont.ttf?t=1653909851010") format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  background: #ffffff;
  width: 100%;
  height: 100%;
}
/* 头部状态栏 */
.header {
  left: 0;
  top: 0;
  width: 100%;
  height: 160px;
  background: #fafafa;
  /* box-shadow: 0 1px 0 0 #dbdbdb; */
  display: block;
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
.box-header {
  height: 80px;
  background: #fff;
  box-shadow: 0 1px 0 0 #dbdbdb;
  border-radius: 2px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box-footer {
  height: 80px;
  background: #fff;
  border: 1px solid #e7e9eb;
  border-radius: 2px;
  padding: 0 5%;
  display: flex;
  align-items: center;
}
.left-wrap {
  height: 80px;
  padding-left: 8px;
}
.right-wrap {
  display: flex;
  align-items: center;
}
.img-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  vertical-align: bottom;
}
.right-wrap .nickname {
  padding: 0 8px;
  max-width: 66px;
  font-size: 18px;
  font-weight: 400;
  margin: 0.67em 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.optionals {
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 500;
  line-height: 60px;
  margin-right: 50px;
  color: #000000;
  overflow: hidden;
  padding-left: 15px;
  padding-right: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.optional-active {
  border-radius: 5px;
  line-height: 40px;
  background: #f2f5fa;
}
/* 主体 */
.main {
  max-width: 80%;
  min-width: 700px;
  margin-right: auto;
  margin-left: auto;
}
</style>