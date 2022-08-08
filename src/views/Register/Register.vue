<template>
  <header>
    <div class="wrap">
      <div class="logo">
        <div class="logoImg">
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+MDUg5Zu+5qCHL+agvOW8j+Wbvuaghy/ooajljZUgMzBweC3lk4HniYxAMXg8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSI1NC41MjIxMzM2JSIgeDI9IjgzLjUwMTEzMDMlIiB5Mj0iOTkuMjI5MzkyMSUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzBENTlEMyIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDA3NUUzIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik05LjgyNDI0MDA3LDEyLjEgTDE3LjE1NTQwNDcsMC4yNzYzMDU5ODIgTDIyLjM5NTg1MjgsLTMuNTI2NTY1NzFlLTEwIEwyMi4zOTU4NTI4LDIxLjE0OTIxODcgQzIyLjM5NTg1MjgsMjEuNjE5MDkyMyAyMi4wMzMwOTA2LDIyIDIxLjU4NTYwMDcsMjIgTDEuMjA2NTM0MzksMjIgQzAuNzU5MDQ0NTQ2LDIyIDAuMzk2MjgyMzU0LDIxLjYxOTA5MjMgMC4zOTYyODIzNTQsMjEuMTQ5MjE4NyBMMC4zOTU4NTI3NTUsMTIuMSBMOS44MjQyNDAwNywxMi4xIFoiIGlkPSJwYXRoLTIiPjwvcGF0aD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ijk2LjQwMTQ4OTQlIiB5MT0iMzMuMzU3OTg4MiUiIHgyPSIyNS4xNzU4NzA5JSIgeTI9IjY0LjMwODkzNTIlIiBpZD0ibGluZWFyR3JhZGllbnQtNCI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNEIyRkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwODFGQyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjEwMy4zMzQ2MDElIiB5MT0iMzQuOTMwNjk1MyUiIHgyPSI2Mi44MTYyOTYzJSIgeTI9IjU0LjY3NDQwMzglIiBpZD0ibGluZWFyR3JhZGllbnQtNSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxMjc1RUMiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzA3ODdGQyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSIwNS3lm77moIcv5qC85byP5Zu+5qCHL+ihqOWNlS0zMHB4LeWTgeeJjCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iue8lue7hC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIDQuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNjA0MTQ3LCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMyIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICA8dXNlIGlkPSLot6/lvoQiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgICAgICAgICAgPGltYWdlIGlkPSLot6/lvoQiIG1hc2s9InVybCgjbWFzay0zKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjIyLjY4IiBoZWlnaHQ9IjIxLjYiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlVBQUFBVUNBWUFBQUJpUzNZekFBQUFCR2RCVFVFQUFMR09mUHRSa3dBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUFGYUFEQUFRQUFBQUJBQUFBRkFBQUFBQTFlenUrQUFBREdFbEVRVlE0RWFXVXoyNGNSUkRHditxZW5iV3RqZTA0T0pFaUl2a1FjakFTaDJ3azRNZ05DWVVvU0Q3eEdOeTRvTHhHWGlGdndJbG5DRmhDQ2dpUkJPenN2K3p1ek03T2JuZFg4WTJkZU0zTmRscGF6ZlJzOTYrL3F2cXFCUjh3cmgvOHVUV3RaMThCMlRVZ0FRNmx1TlIzVjJXYW1VeVh5MjhNMlJkaXFXdGU3bG5DTGFSV0o3c3FOSC84KzMzVDhBRGlkOGwzTGpxb3BOd01jaVdsTzkrLzJFd2hQUkpwM1JTMWJmVm9neTh3TEVWOGZXbG9FL1prTW44b1R1OG8wbzZLdEVVbEFscUk4K01ZUTNGcGFQdTc1NTh5eEM3TTdjQmt6WmtSYUlXcWpTVHBXeFpzZWlubzdzRmhKNW84Rmk4M1ZkQWhUT0IwNWd3amthd2ZFMGJZWENzdkJSMHQ4SWpWMkNQc2hoUEpHWExnZkVvdkRVUXh4THFmb0ZpZlh4amErdmJYQjdEMHRaai9tQUszWVVwYld1RkZldWEwRjZFRGlCVUk0K1dGb0kzSlZlVUhNZGtUMkVjQ2FhdVRCUlcramFaOUtoK2duYVpZeEJwYldiaVFUNHY1L0VjVDIyY0MyL1MxaWNqTXBWUXdqd09rTUVpSUkzNHZFV1FKN0tjc2UvamJFeFgzQ2J2aWpnSGJsTjVtWk1KRkZDTE5rNDdob01FTnJMRlkxVFNUTTNuRGxqeml5aDdjeG9qblZmaW5DdmdaeXJSd3VkRzR6RG9uN0FkdVlZd25Qek1WUXlJZ2tyb3crSUtoRDdudW1HY2M4WVJlcm40SXJVdThHaTZ4ZjhnTGdEZUJlcHVRTWFUdjJHSlNpeVoyQjYxeWZ0RHg1aEJGZFU1bEkvNzVMenhlMHZMSFZSYkcyTnlwOEZjWjhleEFHWmhsaEJ3bnRtNm1zV1FhT3F4a0Mra2s3Rk9zWi9PQmtXalQzVGJucmpIVXZ4SFIxekc2SG54ZW9PZ3ZzTjlOT0R6ZGtpWG4vdmFLZ2tvNmpIeU53VHA2WmFYVVBKbUprVnN5WnpVdFZhYTBuTUN0RDdDWmo0R3F4UFZ1d0ZPY3FHeXdHWE4vbEJSVHVGYk9qWFFETHhtTEsyaE9wWUZneC9LcEJJU2FWcElLMGMzUXIrYTROMS9nZG5PWk12dnZSb1liN05maFJvRVVNMTVqMUZqUk5HNEZqU3g2TTNOTVFSVVN0bllqeWpxaTB3LzQvTXVBdzJlR3A5MHpZTVBOc0pkWHVFWklzU0dZWllLNlpJRVp5ZnRoSmJCMjYzVFQ3VDhNZTU4cGZtR29uYnZOTjJOeCtGeXBiTFpSdy9sS1Axa3BmQTg5ZS81MFRzMy9JV2RMM3IzOEIrN3RwbDZibCt3MUFBQUFBRWxGVGtTdVFtQ0MiPjwvaW1hZ2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZD0iTTI3LDAgTDE4LjE3MzYzNTUsMTQuNjM0NTQxMiBDMTguMDExOTgzMSwxNC45MDI1Njg4IDE3LjcwODA3NDksMTUuMDM0ODM1NiAxNy40MTQyMjc2LDE0Ljk5MjEgTDEuMjUyMjc4LDE0Ljk5MjM5IEMxLjExMjk0ODcxLDE0Ljk5MjM5IDEsMTQuODgwMzA0OCAxLDE0Ljc0MjA0MDcgQzEsMTQuNjk2MTkzOCAxLjAxMjY4NjczLDE0LjY1MTIyNzIgMS4wMzY2NzY0MSwxNC42MTIwNDU1IEw0LjE1NjgwNTQ0LDkuNDQ4NzU4NjcgQzQuMjk0MDY5NjgsOS4yMjQ1Njg4NyA0LjUzOTI2MjAyLDkuMDg3Njk2NTcgNC44MDM2MTAyMiw5LjA4NzY5NjU3IEwxNC42OTk0MzIzLDkuMDg3NDg1NyBMMTkuOTE1NTMxMiwwLjM2OTQxMjY5OSBDMjAuMDUxNjMzMSwwLjE0MDQ4NzkyOCAyMC4yOTk1Mjk1LDAgMjAuNTY3Mzc0NCwwIEwyNywwIFogTTE1Ljc0NDc0ODEsMCBDMTUuODg1NzE5OCwwIDE2LDAuMTA0NjU5MjU5IDE2LDAuMjMzNzYyOTk5IEMxNiwwLjI3MjQ2MDQ3MSAxNS45ODk1MSwwLjMxMDU1MjY1MiAxNS45Njk0NzEzLDAuMzQ0NjIxODIxIEwxMi44NTk5NzAzLDUuNjMxMjg3NDcgQzEyLjcyNjM5NDQsNS44NTgzODg3MyAxMi40Njc0NjYzLDYgMTIuMTg1ODAwNiw2IEw2LjI1NTI1MTk1LDYgQzYuMTE0MjgwMTksNiA2LDUuODk1MzQwNzQgNiw1Ljc2NjIzNyBDNiw1LjcyODExNDYxIDYuMDEwMTgwNjMsNS42OTA1NzA2OCA2LjAyOTY1NDYzLDUuNjU2ODc3MjcgTDkuMDgzNDg5NjcsMC4zNzMyMDk4IEM5LjIxNjE5NDAyLDAuMTQzNjA4MTA3IDkuNDc2NjE4MDgsMCA5Ljc2MDI4MTYyLDAgTDE1Ljc0NDc0ODEsMCBaIiBpZD0i5b2i54q2IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ljc5MzMzMTQxLDkuMDg3NDg1NyBMMTQuNjk5NDMyMyw5LjA4NzQ4NTcgTDE0LjY5OTQzMjMsOS4wODc0ODU3IEwxMS41NDkyNTk1LDE1IEwxLjMwOTkwMTY3LDE0Ljk5Mzg4MzkgQzEuMTcwMTA0NjIsMTQuOTkzODAwNCAxLjA1Njg0NDQxLDE0Ljg4MDQwNDggMS4wNTY5Mjc5MSwxNC43NDA2MDc3IEMxLjA1Njk1NDk3LDE0LjY5NTMxNjMgMS4wNjkxMzM2OCwxNC42NTA4NjE2IDEuMDkyMTkzODUsMTQuNjExODgwMyBMNC4xMzk3NTQzNSw5LjQ2MDIyNDY4IEM0LjI3NjQyMzE0LDkuMjI5MTk3MDkgNC41MjQ5MDYxOCw5LjA4NzQ4NTcgNC43OTMzMzE0MSw5LjA4NzQ4NTcgWiIgaWQ9IuefqeW9oiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC01KSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
          />
        </div>
        <h1 class="logoTitle">金山表单</h1>
      </div>
    </div>
  </header>
  <div class="contentBox">
    <h1 class="title">注册</h1>
    <div>
      <div class="account">
        <input type="text" placeholder="账号" v-model="registerData.account" />
      </div>
      <div class="password">
        <input type="password" placeholder="密码" v-model="registerData.pwd" />
      </div>
      <div class="confirmPassword">
        <input type="password" placeholder="确认密码" v-model="registerData.confirmPwd" />
      </div>
      <div class="register">
        <button @click="register">立即注册</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {RegisterData} from '@/type/auth'
import { reactive, toRefs } from '@vue/reactivity';
import {reqRegister} from '@/api/auth';
import { useRouter } from 'vue-router'
import {defineComponent} from 'vue'
import { ElMessage } from 'element-plus'
export default defineComponent({
  name: "RegisterView",
  setup(){
    const data = reactive(new RegisterData())
    const router = useRouter()


    // 调用接口，请求注册，注册成功提示返回登录，注册失败，提示注册失败，以及原因
    async function register(){
      const res:any = await reqRegister(data.registerData)
      if(res.stat !== 'ok'){
        // alert(`注册失败，${res.response.data.msg}`)
        ElMessage.error(`注册失败，${res.response.data.msg}`)
      }else{
        // alert('注册成功，请返回登入')
        ElMessage({
          message: '注册成功，将返回登入',
          type: 'success',
        })
        router.push('/login')
      }
    }

    return {
      ...toRefs(data),
      register
    }
  }
});
</script>
<style scoped>
/* 清除所有的默认边距和设置内减模式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* 去除a标签默认下划线，并设置默认文字颜色 */
a {
  text-decoration: none;
  color: #333;
}
/* 设置img的垂直对齐方式为居中对齐，去除img默认下间隙 */
img {
  vertical-align: middle;
}
/* 去除input默认样式 */
input {
  border: none;
  outline: none;
  color: #333;
}
/* 设置背景色 */
body {
  height: 100%;
  background-color: #f7f7f7;
}
/* 顶部颜色 */
header {
  background-color: #fff;
  border-bottom: 1px solid #e9e9e9;
}
/* 顶部里面的logo */
.wrap {
  display: flex;
  height: 56px;
  max-width: 1180px;
  margin: 0 auto;
  align-items: center;
}
.logo {
  display: flex;
  line-height: 25px;
  justify-content: center;
  align-items: center;
}
.logoImg {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
}
.logoTitle {
  font-size: 18px;
  font-weight: 500;
  color: #3c414b;
  margin: 0.67em 0;
}

/* 主要内容表单 */
.contentBox {
  width: 360px;
  margin: 100px auto;
  padding: 40px;
  background-color: #fff;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
}
.title {
  text-align: center;
  margin-bottom: 24px;
}
/* 用户部分 */
.account {
  margin-top: 10px;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  height: 50px;
  margin-bottom: 15px;
}
.account input {
  padding-left: 10px;
  height: 48px;
  width: 90%;
  font-size: 16px;
}
/* 密码部分 */
.password {
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  margin-bottom: 4px;
  height: 50px;
  margin-bottom: 15px;
}
.password input {
  padding-left: 10px;
  height: 48px;
  width: 90%;
  font-size: 16px;
}
/* 确认密码部分 */
.confirmPassword {
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  margin-bottom: 4px;
  height: 50px;
  margin-bottom: 15px;
}
.confirmPassword input {
  padding-left: 10px;
  height: 48px;
  width: 90%;
  font-size: 16px;
}
/* 注册部分 */
.register {
  margin-top: 20px;
  margin-bottom: 10px;
}
.register button {
  display: block;
  width: 100%;
  height: 50px;
  background-color: #1e86e7;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
}
</style>