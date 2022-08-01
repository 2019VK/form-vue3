<template>
<div class="index">
    <!-- 头部logo,昵称,头像 -->
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
        <!-- 头像昵称组件 -->
        <AvaNickname/>
      </div>
    </header>
    <main>
      <div class="content">
        <!-- 左侧tab栏 -->
        <div class="tab">
          <div class="createForm" @click="createForm">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAXklEQVRYR+2XQQoAIAgE2/8/2uhQRNBBMSSYzqbDFCyqFR8Vz29hADOzHV5SqFfo0hgMAAYwgAEMpBs4G74OqZkdKwsAKDfgffP0TwgABjCAAQx8Z8ALfKsP74ZZAB3ic3AhrCWTvQAAAABJRU5ErkJggg=="
            />
            <span>新建</span>
          </div>
          <div class="tabFormList tabActive">表单列表</div>
        </div>
        <div class="forms">
          <div class="filterStar" @click="showStarForm">
            <span :class="{ star: true, starActive: isStar }"></span>
            <span class="statText">仅展示收藏</span>
          </div>
          <!-- 右侧表单列表 -->
          <div class="formList">
            <div class="param1late">
              <div class="formTitle">
                <h3>表单名称</h3>
              </div>
              <div class="formTime">
                <h3>表单时间</h3>
              </div>
              <div class="formStatus">
                <h3>状态</h3>
              </div>
              <div class="temformOperation">
                <h3>操作</h3>
              </div>
            </div>
            <form-list
              v-for="form in Store.state.FORM.formList.items"
              :key="form.id"
              :operation="operation[form.status - 2]"
              :form="form"
              :isStar="isStar"
              :param1="param1"
              :param2="param2"
              :saveOffset="saveOffset"
            />
          </div>
          <!-- 右侧下方翻页 -->
          <div class="flip">
            <div class="previous" @click="prePage">上一页</div>
            <span>{{ page }}/{{ allPage }}</span>
            <div class="next" @click="nextPage">下一页</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, readonly,ref } from "vue";
import FormList from '@/components/index/FormList.vue'
import AvaNickname from '@/components/index/AvaNickname.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: "IndexView",
  components:{
    FormList,
    AvaNickname
  },
  setup(){
    const Store = useStore()
    const operation = readonly([
        ["发布", "编辑", "删除"],
        ["分享", "填写", "查看结果", "停止", "删除"],
        ["查看结果", "删除"],
      ])
    let isStar = ref(false) // 界面中是否收藏的
    let param1= reactive( {
        // 普通时候的页码信息
        offset: 1, //number类型,可选   第几页
        limit: 8, //number类型,可选   一页限制显示多少个
        // isStar: true,  // 是否选择只展示收藏的
      })
    let param2 = reactive({
        // 仅收藏时候的页码信息
        offset: 1, //number类型,可选   第几页
        limit: 8, //number类型,可选   一页限制显示多少个
        isStar: true, // 是否选择只展示收藏的
      })

    return {
      Store,
      operation,
      isStar,
      param1,
      param2
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
.index {
  height: 100%;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  flex: 1;
}
html,
body {
  height: 100%;
}

/* 顶部颜色 */
header {
  background-color: #fff;
  border-bottom: 1px solid #e9e9e9;
}
/* 顶部里面的logo */
.wrap {
  display: flex;
  height: 80px;
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}
.logo {
  display: flex;
  line-height: 25px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
/* 左侧导航栏 */
main {
  height: 100%;
}
.content {
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: row;
}
.tab {
  display: flex;
  flex-direction: column;
  max-width: 230px;
  min-width: 167px;
  padding: 20px 16px;
  flex: 1;
  background-color: #fff;
  border-right: 1px solid #e7e9eb;
}
.createForm {
  display: flex;
  background-color: #1488ed;
  color: #fff;
  height: 40px;
  align-items: center;
  border-radius: 4px;
  justify-content: center;
  font-size: 14px;
  vertical-align: middle;
  cursor: pointer;
  margin-top: 15px;
  cursor: pointer;
}
.createForm img {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.tabFormList {
  width: 100%;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  margin-top: 30px;
  text-align: center;
  color: #767c85;
  cursor: pointer;
}
.tabActive {
  background-color: #f2f5fa;
  color: #333;
  border-radius: 4px;
}
.forms {
  flex: 1;
  background-color: #fff;
  position: relative;
}
.filterStar {
  position: absolute;
  top: 10px;
  right: 5%;
  cursor: pointer;
}
.star {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-size: 16px 16px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE0UlEQVRYR8WWfWxTVRjGn/fcu64IGwHiR8RgokQZwWjYEtBtbUGwt44tSqy9BYYBZIlRFFESifyxGCMGHYImfsyQkOyjHXMSKKwtYa7rxCwwFJIZMJgQGRGGMUJXB1vb85pbGMK+aCvC+fPe8z7v77znnOe8hDs86L/kt9jd74vcSR+GGj+PZqqTMcC8Rcsej8fjPxLTpnDQs/G2A1g0vYWZ54NwibLp0fBub3cmEBlVwKLpZcy8ezAhEerCgYZltwWgoqIi6/jpSBeYHyGgCqBXGZwtSJ3TFqg7nC5E2hWwavrrknkbCL8oc/NmcceJ9yTzBhAOtgcaiv5XgJKSJZMi8cSvACYrCkpDzQ17y8pW5lzo7zvJ4HsF4cW2QENjOhBpVcBid33CwFoQtbQHvAsGE1k0VwUzviLg1HhxT57f/1l/qhApAZSWVtx1IRYtBksfCIqqqrNb99YeG0zidO5UenqbfmLGYxDYDJm1tT1YezYViGEATueb4873nntCkswnpgIw54OQxwzFECSi7eGA9+Wh4tZn3QtlQu7/9zv9ToROIj7CrHSaxymd+3fVnB8alwSwaPoqZi4EUT4xz2RAvXEixQj8syGomsTGlj2enpFWV6y5NxB4gQHNwMRhyYjOMHMnCXSazaavDaCrAK7FAHYmV0kkAXQRG/R0RKrUOSEx5Vg6+8rMZC1dOl3EkS85UcBXFlbAwIQrVURdm99bTkR8bQusDn21lFxtAAiwnu5pHmu/5y9aPjUWHzgI5geJ0Dxj2sTnqqurY0mY6wMtmusdZmwCYUBhpSQUrD+QykEaa47duWpyX2+0HYyZBPphoil3oc9X3XfNRYcGF2vuKrBcR0CUs5Sn2/fWH8oU4pny8vGX/xg4wIy5BHTlqIpl3776v67XG3YLkvun6TsYWE6gP4WJikI+z4l0IQzLPnH6oo8ZdsMfGFmFI13NEX3AVlmpyo7j3zKjlEDdMKMwndeusrJStHQcrwNDJ1CPyFaLQntqDQcdNkY1IsMPenrPBpm5mIj2hwNee6pVsDj0lSx5O4giihDWUHP90dFix3RCq+ZySsZOItoVDniNq5rSsGlL9AQnPCD6pj3gdY4VdDOAdZJRRUJsC/s9a1PKbhhbif4Ux/kggQ6Fg945GQNYHO6tLOUbJMTbYb+nKlUAm2PpAwkZ7yais+GA9/7MATS9iZkXj/bM2jR3EXImHR3alCYfp0jTZQaU+3LzzI2NlQMZnQGLph9m5gJFqE+G/HUdhkjyenVH3ZCJ9QzMIuACEX1BwvxpqHnHucFExXbXbwCmkcn0UNhXcyozALt+zmg0zNk0VY0p0b+RqADzWmZMTQoSRcCce9Xf+wmooSxRZfhGseb6HoxCVQhbq9/TljaAw7EmOyrPX7rq11uYaPW1ZEAXSHw8Y1pO/ckzkdmJBK9noufBLAAwEfmY2YDMV0iUhwKe2rQB5jtcD8ckbjAPAlpJ4KM2f4N/qKCtbNl0GYu/xcwvgTFu8L8AvdsW9H6QNoC1ZMk8GU98R4QEQE2KIja37qs/crOb4HCsuDsqL79GYKNbnkKCvgz7va+kDWBz6C9ICStMWVvGOkSjCRtt3MWByAoAM8JB75q0AW620lv1P6Wm9FYlG0nnjgP8AwdCFj9G8DUXAAAAAElFTkSuQmCC);
  vertical-align: middle;
  cursor: pointer;
}
.starActive {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADPUlEQVRYR8WXTWgcdRjGn2e6O7M1VawHPw47m2pCd1ZpkQQ/ULQUQXuQelBQFEVLL1URCj30YI1eFKUnKwXBIIJevJSoCILoRTyYohTNbJukZifa2B6MlGp3ZjP/RzaSkI/dnY9gO6dl3vd9nt//P//3nVniKl+8yv7IDRD67hF7y5ZjLE/8uZFF5AJoTt86yHDhFxLHbS945YoDhBPuCUF7CbbEwh0l7+yZvBCZd6Dl9++KFX+zZEhyzPGCvVcEQBqxIn90XNCdKw03WdbuYrWxDJUFJtMORPX+542JR9caEPzJ9l4YIkdMFvN2bmoA/bGjL5z/axLSLZ1MLMvaZ1cb6+CSgFIDhL77uqQjXQXJOWfr9YO8+dTfSaYr44kAmr1388KlubuN4i8EXNNTnHjPsTa/ye1nfk8LsQpAkwNOy8Q7EZthwQyBGIZQE1BIK/hfHs+TGAcwLuCkI46z1pjrpMGw7j4j4EEaDAO4XVAxm1nKbPIcgZNtKLtgj3Jw6rdF1Fa9/xFjzNj/ZryGj8AJ27vncfLTeLkLQr//KSD+WErfFSnXvTqN+NYpbdrDbTPN5UG29CPyKy8ZmXdzCacoIvijXbR3cXDqYtcuCH13RNJrKfQypRCYtG37fg5MX1g/xNbcafrlYxBezOTQK5k858C6j97MTMcuWHtzcd7XP2ifhyc3CkFwHig+4NSmf+6m1XEQSUPFsH7hMwgP54Ug8I9F66Gi1/i+5wZ1C7bbMzbxl3kBQH5V8oLEBXQdxZHv7jfS+3kBCPpOLagl1XcFCOvlN2TwapJAj2d7yanNXptU3x3Adz+U9FySQK+408cbWAnmc52Bpu9+DWn3RgBoFXY61V9P5QOYKE8CGOi6xeRFSdf1BCQfLXnB55kBJDGqVy5LctZNLvI0gaPFgv1RC62aFswhCE90emVbFg7Y1dnj2QGmbrsxjKLzqwrJ70i9Y28PxkhqZUxnt1VaYXxQ0j4BfUsxkm85XnA4M0BULw8bgx9IGAhjFq23kwZK20QNd2t0WQdk+DKgm0h84nizT2cGaJ6u7IHRY0DhaJ4/HYtfVgvRs4a4q1QN9mcG2MjJz1qb+FGaVTBr/r+FizEw88IfcAAAAABJRU5ErkJggg==);
}
.template {
  display: flex;
  justify-content: space-around;
  justify-items: center;
  width: 95%;
  height: 50px;
  border: 1px solid #e7e9eb;
  border-radius: 4px;
  align-items: center;
  margin-bottom: 20px;
}
.statText {
  font-size: 14px;
  line-height: 14px;
  margin: 0.67em 0;
  color: #949aae;
  margin-left: 4px;
}
.formList {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 400;
}
.param1late {
  display: flex;
  justify-content: space-around;
  justify-items: center;
  width: 95%;
  height: 50px;
  border: 1px solid #e7e9eb;
  border-radius: 4px;
  align-items: center;
  margin-bottom: 20px;
}
.param1late h3 {
  padding: 0;
  margin: 0;
  font-size: 18px;
  font-weight: normal;
}
.formTitle {
  display: flex;
  justify-content: space-between;
  flex: 2;
  max-width: 280px;
  min-width: 110px;
}
.formTitle h3 {
  margin-left: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.formTime {
  display: flex;
  justify-content: center;
  flex: 2;
  max-width: 290px;
  min-width: 185px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.formStatus {
  display: flex;
  justify-content: space-between;
  flex: 2;
  margin-left: 5%;
  max-width: 290px;
  min-width: 100px;
}
.temformOperation {
  display: flex;
  justify-content: center;
  flex: 3;
  max-width: 340px;
  min-width: 270px;
}
.formOperation {
  display: flex;
  justify-content: center;
  flex: 3;
  max-width: 340px;
  min-width: 270px;
}
.formOperation h3 {
  font-size: 14px;
  padding: 4px 10px;
  border: 1px solid #e7e9eb;
  border-radius: 5px;
  color: #767c85;
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.formOperation h3:hover {
  color: #1488ed;
  border: 1px solid #1488ed;
  cursor: pointer;
}
.flip {
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #e7e9eb;
  padding-top: 10px;
  color: #767c85;
}
.flip span {
  margin: 0 8px;
}
.previous {
  font-size: 12px;
  padding: 4px 8px;
  border: 1px solid #e7e9eb;
  border-radius: 4px;
}
.next {
  font-size: 12px;
  padding: 4px 8px;
  border: 1px solid #e7e9eb;
  margin-right: 5%;
  border-radius: 4px;
}
.previous:hover,
.next:hover {
  color: #1488ed;
  border: 1px solid #1488ed;
  cursor: pointer;
}
</style>