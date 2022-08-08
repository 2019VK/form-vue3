<template>
  <!-- 头部显示栏 -->
  <div class="main-header">
    <div class="header-title">
      <div class="left-my-header" @click="goBack">
        <img src="./assets/goback.png" />
        <span>个人中心</span>
      </div>
      <div class="right-my-header">
        <button
          type="button"
          class="my-button my-button-exit"
          @click="openExitDia"
        >
          退出
        </button>
      </div>
    </div>
  </div>
  <!-- 用户头像昵称信息栏 -->
  <div class="container">
    <div class="info">
      <div class="avatar">
        <div class="avatar-icon">
          <div class="user-avatar" @mouseover="avaCover" @mouseleave="avatar">
            <img
              :src="
                user.avatar
                  ? user.avatar
                  : require('./assets/defaultAvatar.png')
              "
              class="img-circle"
            />
            <div class="avatar-mask" v-show="ifAvaCover" @click="openAvaDia">
              <div class="avatar-mask-changed">修改头像</div>
            </div>
          </div>
        </div>
        <div class="avatar-username">
          <p v-text="user.nickname"></p>
        </div>
        <div class="avatar-id">
          <span>ID：</span>
          <span class="avatar-userid" v-text="user.id"></span>
        </div>
      </div>
    </div>
    <!-- 用户昵称显示修改 -->
    <div class="box">
      <div class="line-top">
        <span
          >个人资料
          <span style="font-size: 12px">(一周仅可修改2次昵称)</span>
        </span>
      </div>
      <div class="intro-container">
        <!-- 正常显示的昵称 -->
        <div class="nickname-text" v-if="!ifNickDia">
          <div class="left-el" v-text="user.nickname"></div>
          <div class="right-el">
            <a @click="openNickDia">修改</a>
          </div>
        </div>
        <!-- 要修改昵称时的表单 -->
        <div class="nickname-form" v-if="ifNickDia">
          <div class="my-col-8">
            <input
              v-model="setInfo.nickname"
              type="text"
              rows="2"
              maxlength="20"
              class="my-input"
              placeholder="请输入新的昵称"
            />
          </div>
          <div class="my-col-16">
            <div class="buttons">
              <button
                type="button"
                class="my-button my-button--default"
                @click="closeNickDia"
              >
                取消
              </button>
              <button
                type="button"
                class="my-button my-button--primary"
                @click="changeNick"
              >
                确认
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 密码修改栏 -->
    <div class="box">
      <div class="line-top">
        <span>安全设置</span>
      </div>
      <div class="intro-container">
        <div class="set-passward">
          <div class="left-el">密码设置</div>
          <div class="right-el">
            <a @click="openPwdDia">修改</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 密码修改弹出框 -->
  <div v-if="ifPwdDia">
    <div class="v-modal"></div>
    <div class="my-dialog-wrapper">
      <div class="my-dialog">
        <div class="my-dialog-header">
          <span>修改密码</span>
          <button type="button" class="my-dialog-headerbtn">
            <span class="iconfont" @click="closePwdDia">&#xe621;</span>
          </button>
        </div>
        <div class="my-dialog-body">
          <div class="pswMargin">
            <span>旧密码:</span>
            <input
              type="password"
              name="oldPsw"
              placeholder="请输入当前密码"
              class="my-input"
              v-model="changePwd.oldPwd"
            />
          </div>
          <div class="pswMargin">
            <span>新密码:</span>
            <input
              type="password"
              name="newpsw"
              placeholder="请输入新的密码"
              class="my-input"
              v-model="changePwd.pwd"
            />
          </div>
          <div class="pswMargin">
            <span>确认密码:</span>
            <input
              type="password"
              name="confirmPsw"
              placeholder="请再次输入新的密码"
              class="my-input"
              v-model="changePwd.confirmPwd"
            />
          </div>
        </div>
        <div class="my-dialog-footer">
          <span class="dialog-footer">
            <button
              type="button"
              class="my-button my-button--default"
              @click="closePwdDia"
            >
              <span>取消</span>
            </button>
            <button
              type="button"
              class="my-button my-button--primary"
              @click="changePassword"
            >
              <span>确定</span>
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- 退出弹出框 -->
  <div v-if="ifExitDia">
    <div class="v-modal"></div>
    <div class="my-dialog-wrapper">
      <div class="my-dialog">
        <div class="my-dialog-header">
          <span>退出</span>
          <button type="button" class="my-dialog-headerbtn">
            <span class="iconfont" @click="closeExitDia">&#xe621;</span>
          </button>
        </div>
        <div class="my-dialog-body" style="padding-top: 0px">
          <div>确定要退出当前账号吗？</div>
        </div>
        <div class="my-dialog-footer">
          <span class="dialog-footer">
            <button
              type="button"
              class="my-button my-button--default"
              @click="closeExitDia"
            >
              <span>取消</span>
            </button>
            <button
              type="button"
              class="my-button my-button--primary"
              @click="exit"
            >
              <span>确定</span>
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- 弹出修改头像框 -->
  <div v-if="ifAvaDia">
    <div class="v-modal"></div>
    <div class="my-dialog-wrapper">
      <div class="my-dialog">
        <div class="my-dialog-header">
          <span>上传新头像</span>
          <button type="button" class="my-dialog-headerbtn">
            <span class="iconfont" @click="closeAvakDia">&#xe621;</span>
          </button>
        </div>
        <div class="my-dialog-body" style="padding-top: 0px">
          <div class="set-avatar-container">
            <div class="upload-btn">
              <button type="button" class="my-button my-button-upload">
                <span>
                  <i class="my-icon-upload" style="color: #82a5fe"></i>
                  <span class="upload-text">请选择要上传的图片</span>
                </span>
              </button>
              <input type="file" accept="image/*" @change="changeAvatar" />
            </div>
          </div>
        </div>
        <div class="my-dialog-footer">
          <span class="dialog-footer">
            <button
              type="button"
              class="my-button my-button--default"
              @click="closeAvakDia"
            >
              <span>取消</span>
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, onMounted, ref, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reqLogout } from "@/api/auth";
import { reqSetInfo, reqChangePwd } from "@/api/user";
import { ChangeUser } from "@/type/user";
import { ElMessage } from "element-plus";

export default defineComponent({
  setup() {
    // 使用路由，vuex仓库
    const Store = useStore();
    const router = useRouter();

    // 修改用户参数所需要参数
    const User = reactive(new ChangeUser());

    // 返回首页
    function goBack() {
      router.back();
    }

    /* 退出部分数据以及函数 */
    let ifExitDia = ref(false); // 退出弹窗显示控制
    // 退出弹窗打开
    function openExitDia() {
      ifExitDia.value = true;
    }
    // 退出弹窗关闭
    function closeExitDia() {
      ifExitDia.value = false;
    }
    // 退出
    async function exit() {
      const res: any = await reqLogout();
      if (res.stat !== "ok") {
        // alert("退出失败，请稍后重试");
        ElMessage.error("退出失败，请稍后重试");
      } else {
        localStorage.setItem("token", "");
        closeExitDia();
        router.push("/login");
      }
    }

    /* 修改密码部分数据以及函数 */
    let ifPwdDia = ref(false); //修改密码弹窗显示控制
    // 修改密码弹窗打开
    function openPwdDia() {
      ifPwdDia.value = true;
    }
    // 修改密码弹窗关闭
    function closePwdDia() {
      ifPwdDia.value = false;
    }
    // 修改密码
    async function changePassword() {
      const res: any = await reqChangePwd(User.changePwd);
      if (res.stat !== "ok") {
        // alert(`修改密码失败，${res.response.data.msg}`);
        ElMessage.error(`修改密码失败，${res.response.data.msg}`);
      } else {
        closePwdDia();
        // alert("密码已修改，请重新登录！");
        ElMessage({
          message: "密码已修改，请重新登录！",
          type: "success",
        });
        // 跳转到登录
        router.push("/login");
      }
    }

    /* 修改昵称部分数据以及函数 */
    let ifNickDia = ref(false); //修改密码弹窗显示控制
    // 修改昵称弹窗打开
    function openNickDia() {
      ifNickDia.value = true;
    }
    // 修改昵称弹窗关闭
    function closeNickDia() {
      ifNickDia.value = false;
    }
    // 修改昵称
    async function changeNick() {
      const res: any = await reqSetInfo(User.setInfo);
      if (res.stat !== "ok") {
        // alert(`修改昵称失败，${res.response.data.msg}`);
        ElMessage.error(`修改昵称失败，${res.response.data.msg}`);
      } else {
        // 关闭弹窗
        closeNickDia();
        // 更新页面
        updateInfo();
      }
    }

    /* 修改头像 */
    // 鼠标滑动时的遮罩
    let ifAvaCover = ref(false);
    // 点击修改的弹窗
    let ifAvaDia = ref(false);
    // 遮罩的显示
    function avaCover() {
      ifAvaCover.value = true;
    }
    // 遮罩关闭
    function avatar() {
      ifAvaCover.value = false;
    }
    // 修改头像弹窗打开
    function openAvaDia() {
      ifAvaDia.value = true;
    }
    // 修改头像弹窗关闭
    function closeAvakDia() {
      ifAvaDia.value = false;
    }
    // 修改头像
    function changeAvatar(e: any) {
      const files = e.target.files;
      if (files.length) {
        let file = files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file); // readAsDataURL 读取出的是图片的 base64 格式的数据，这种数据可以直接赋值到 img 的 src 上
        reader.onload = async () => {
          User.setInfo.avatar = reader.result as string;
          const res: any = await reqSetInfo(User.setInfo);
          if (res.stat !== "ok") {
            // alert(`修改头像失败，${res.response.data.msg}`);
            ElMessage.error(`修改头像失败，${res.response.data.msg}`);
          } else {
            // 关闭弹窗
            closeAvakDia();
            // 更新页面
            updateInfo();
          }
        };
      }
    }

    // 修改信息后，更新页面
    function updateInfo() {
      Store.dispatch("getUserInfo").then(() => {
        User.setInfo.nickname = Store.state.USER.user.nickname;
        User.setInfo.avatar = Store.state.USER.user.avatar;
      });
    }

    onMounted(() => {
      // 如果已经登录，上来就更新一下界面
      if (Store.state.USER.isLogin) {
        updateInfo();
      }
    });

    return {
      ...toRefs(Store.state.USER),
      ifExitDia,
      ifPwdDia,
      goBack,
      openExitDia,
      closeExitDia,
      exit,
      openPwdDia,
      closePwdDia,
      changePassword,
      ...toRefs(User),
      openNickDia,
      closeNickDia,
      ifNickDia,
      changeNick,
      ifAvaCover,
      ifAvaDia,
      avaCover,
      avatar,
      closeAvakDia,
      openAvaDia,
      changeAvatar,
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
  color: #383838;
  background: #f7f7f7;
  overflow: auto;
}
* {
  box-sizing: border-box;
}
a {
  color: #1488ed;
}
button {
  border: none;
}
.container {
  max-width: 910px;
  min-width: 650px;
  margin-right: auto;
  margin-left: auto;
}
/* 头部信息栏 */
.main-header {
  width: 100%;
  height: 80px;
  background: #fff;
  box-shadow: 0 1px 0 0 #dbdbdb;
  display: block;
}
.header-title {
  line-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 95%;
  min-width: 650px;
}
.left-my-header {
  display: flex;
  font-size: 16px;
  align-items: center;
  cursor: pointer;
}
.left-my-header img {
  width: 20px;
  height: 20px;
  /* vertical-align: text-bottom; */
}
.right-my-header {
  font-size: 16px;
}
.header-word-center {
  margin-left: 200px;
  font-size: 14px;
  color: #484848;
  letter-spacing: 0;
  line-height: 14px;
  width: 83.3333%;
}
.header-exit {
  margin-right: 200px;
  text-align: right;
  width: 16.66667%;
}
.my-button-exit {
  color: #ffffff;
  background: #fc4e19;
  height: 32px;
  line-height: 0;
}
/* 用户头像昵称信息栏 */
.info {
  margin-top: 60px;
  width: 100%;
  padding-bottom: 24px;
  border: 1px solid #e7e9eb;
  border-radius: 2px;
  position: relative;
  background: #fff url(//qn.cache.wpscdn.cn/s1/avatar-bg.7d147f4.png) no-repeat
    100% 100%;
  filter: alpha(opacity=39);
}
/* 用户信息 */
.avatar {
  text-align: center;
  position: relative;
  padding-bottom: 24px;
}
.avatar-icon {
  position: relative;
  width: 112px;
  height: 112px;
  margin: auto;
  padding-top: 16px;
  cursor: pointer;
}
.avatar-icon .user-avatar {
  position: relative;
  width: 80px;
  height: 80px;
  margin: auto;
}
.avatar-icon .img-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 0;
}
/* 修改头像 */
.avatar-mask {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 0;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
}
.avatar-mask-changed {
  vertical-align: middle;
  text-align: center;
  color: #fff;
  letter-spacing: -0.34px;
  z-index: 999;
  margin-top: 30px;
  font-weight: 700;
}
/* 用户昵称 */
.avatar-username {
  margin: 12px 0 8px;
}
.avatar-username p {
  font-weight: 700;
  font-size: 16px;
  color: #383838;
  letter-spacing: 0;
}
/* 用户ID */
.avatar-id {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 16px;
  font-size: 12px;
}
.avatar-userid {
  color: #333;
}
/* 修改昵称 */
.container .box {
  background: #fff;
  border: 1px solid #e7e9eb;
  border-radius: 2px;
  margin-top: 12px;
  padding: 0 30px;
}
.container .line-top {
  margin-top: 30px;
}
.container .line-top span {
  font-size: 14px;
  color: #969696;
  letter-spacing: -0.34px;
}
.intro-container {
  margin-top: 24px;
  margin-bottom: 30px;
  line-height: 32px;
}
.intro-container .nickname-text {
  font-size: 16px;
  display: flex;
}
.my-row {
  position: relative;
  box-sizing: border-box;
}
.left-el {
  padding-right: 12px;
  width: 83.3333%;
  height: 35px;
}
.container .right-el {
  text-align: right;
  width: 16.66667%;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;
}
.set-passward {
  font-size: 16px;
  display: flex;
}
.quit {
  font-size: 16px;
  display: flex;
}
/* 修改昵称界面 */
.nickname-form {
  display: flex;
}
.my-row {
  position: relative;
  box-sizing: border-box;
}
.my-col-8 {
  width: 33.33333%;
  /* padding-left: 12px; */
  padding-right: 8px;
}
/* 输入框样式 */
.my-input {
  width: 80%;
  height: 35px;
  margin: 0 auto;
  appearance: none;
  background-color: #fff;
  border-radius: 2px;
  border: 1px solid #bfcbd9;
  color: #1f2d3d;
  font-size: inherit;
  line-height: 1;
  outline: 0;
  padding: 3px 10px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.my-col-16 {
  text-align: right;
  width: 66.66667%;
  padding-left: 12px;
  padding-right: 12px;
}
/* 按钮样式 */
.my-button--default {
  color: #333;
  background-color: #f2f5fa;
  height: 32px;
  line-height: 0;
  margin-right: 8px;
}
.my-button {
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 2px;
  letter-spacing: 0.2px;
}
.my-button--primary {
  color: #ffffff;
  background: #1488ed;
  height: 32px;
  line-height: 0;
}
/* 修改密码弹出框 */
.my-dialog-wrapper {
  height: 185px;
  width: 450px;
  top: 35%;
  left: 35%;
  position: fixed;
  margin: 0;
  background: #ffffff;
  border-radius: 4px;
}
.my-dialog {
  top: auto !important;
  font-size: 14px;
  position: relative;
  left: 0;
  width: 450px;
  background: rgb(255, 255, 255);
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  margin-bottom: 50px;
}
.my-dialog .my-dialog-header {
  padding: 30px 0;
  margin: 0 30px;
  border-bottom: 1px solid #e9e9e9;
}
.my-dialog .my-dialog-body {
  padding: 18px 30px 30px;
  color: #48576a;
  font-size: 14px;
}
.my-dialog .my-dialog-footer {
  padding: 0 30px 18px;
  text-align: right;
  box-sizing: border-box;
}
.my-dialog .my-dialog-header span {
  color: #3c414b;
  font-size: 18px;
  text-align: left;
}
.my-dialog-header span {
  display: block;
  padding-right: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: normal;
}
.my-dialog-header button {
  position: absolute;
  right: 16px;
  top: 18px;
  margin-top: 15px;
}
.my-dialog-headerbtn {
  float: right;
  background: 0 0;
  border: none;
  outline: 0;
  padding: 0;
  cursor: pointer;
  font-size: 16px;
}
.my-dialog .my-dialog-header .my-dialog-close {
  padding: 15px;
  font-size: 16px;
}
.my-dialog-headerbtn .my-dialog-close {
  color: #bfcbd9;
}
/* 引入x错号图标 */
@font-face {
  font-family: "iconfont"; /* Project id  */
  src: url("./assets/iconfont.ttf?t=1653909851010") format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pswMargin {
  margin-bottom: 10px;
}
.pswMargin span {
  display: block;
  margin-bottom: 5px;
}
.v-modal {
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  background-color: #333;
}
.upload-btn {
  display: flex;
  align-items: center;
}
.upload-btn .my-button {
  min-width: 171px;
  height: 32px;
  display: flex;
  justify-content: center;
  padding: 8px 10px;
}
.my-button-upload {
  color: #333;
  background: #fff;
  border-color: #e7e9eb;
  line-height: 0;
}
.upload-img-block {
  margin-top: 20px;
  text-align: center;
}
.upload-img-block p {
  text-align: center;
  height: 200px;
}
.upload-text {
  line-height: 16px;
}
.set-avatar-container .upload-img-block .up-pre {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 200px;
  height: 200px;
  max-height: 310px;
  border: 1px solid #e3e3e3;
  text-align: center;
  line-height: 310px;
  color: #999;
  background: #f7f7f7;
  overflow: hidden;
}
.imgtext {
  margin-top: 20px;
}
</style>