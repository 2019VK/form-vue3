<template>
  <div class="user" @click="loginPersonalCentre">
    <!-- 头像部分 -->
    <div class="avatar">
      <img :src="avatar" />
    </div>
    <!-- 昵称部分 -->
    <h2 class="nickname" v-text="nickname"></h2>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "AvaNickname",
  setup() {
    // 引入vuex仓库
    const Store = useStore();
    // 引入路由器
    const router = useRouter();
    // 计算头像是显示默认的，还是登入的
    const avatar = computed(() => {
      let ava = Store.state.USER.user.avatar;
      let defaultImg = "./asset/defaultAvatar.png";
      return ava ? ava : defaultImg;
    });
    // 计算昵称是显示默认的，还是登入的
    const nickname = computed(() => {
      let nick = Store.state.USER.user.nickname;
      return nick ? nick : "请登录";
    });
    // 当登入了，初始化的时候获取
    onMounted(() => {
      if (Store.state.USER.isLogin) {
        Store.dispatch("getUserInfo");
      }
    });
    // 判断是跳转登录还是个人中心
    /* 登录了跳转个人中心，没登录跳转登录 */
    function loginPersonalCentre() {
      if (Store.state.USER.isLogin) {
        router.push("/usercenter");
      } else {
        router.push("/login");
      }
    }

    return {
      avatar,
      nickname,
      loginPersonalCentre,
    };
  },
});
</script>

<style scoped>
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
}
.nickname {
  font-size: 18px;
  font-weight: 400;
  margin: 0.67em 0;
  max-width: 88px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>