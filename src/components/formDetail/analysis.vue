<template>
  <!-- 判断有没有答案，没有则显示else里面得到暂时无答案 -->
  <div class="main-header main" v-if="total != 0">
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
        v-for="(res, index) in items[page]?.result"
        :key="res.id"
        :index="index"
        :result="res"
      ></Result>
    </div>
  </div>
  <!-- 显示暂时没有答案 -->
  <div v-else class="empty-result">
    <img src="./assets/empty-result.png" />
    <span>暂时没结果，请稍后再来哦</span>
  </div>
</template>
<script lang="ts">
// 引入路由和vuex仓库
import { useRoute } from "vue-router";
import { useStore } from "vuex";
// 引入结果组件
import Result from "@/components/result/result.vue";
// 引入vue基本函数
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  name: "analysisView",
  // 注册组件
  components: { Result },
  setup() {
    // 注册仓库和路由
    const Store = useStore();
    const route = useRoute();
    // 发请求获取表单数据，存在仓库中
    Store.dispatch("getFormDetail", route.query.id);
    // 定义当前页码
    const page = ref(0);
    // 分别从仓库中取出服务器返回的表单所有信息、结果信息、题目信息，结果条数
    // 所有信息，里面包含info和items
    const formDetail = computed(() => {
      return Store.state.FORM.formDetail;
    });
    // 结果信息，里面包含要显示的结果
    const items = computed(() => {
      return formDetail.value.items;
    });
    // 题目信息
    const info = computed(() => {
      return formDetail.value.info;
    });
    // 收集到的结果条数
    const total = computed(() => {
      return items.value?.length;
    });
    // 将数字的状态转换成中文
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
    // 上一页函数，在不越界的情况下，将page减一即可
    function prePage() {
      if (page.value > 0) {
        page.value -= 1;
      }
      return;
    }
    // 下一页函数，在不越界的情况下，将page加一即可
    function nextPage() {
      if (page.value < total.value - 1) {
        page.value += 1;
      }
      return;
    }

    return {
      formDetail,
      status,
      page,
      items,
      total,
      info,
      prePage,
      nextPage,
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
.empty-result {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #767c85;
}
</style>