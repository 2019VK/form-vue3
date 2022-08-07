 <template>
  <div class="template">
    <div class="formTitle">
      <h3>{{ form.title }}</h3>
    </div>
    <div class="formTime">
      <h3>{{ formTime }}</h3>
    </div>
    <div class="formStatus">
      <h3>{{ statusComputed }}</h3>
      <span
        :class="{ star: true, starActive: form.isStar }"
        @click="changeStar(form)"
      ></span>
    </div>
    <div class="formOperation">
      <h3 v-for="(ope, index) in operation" :key="index" @click="bypass(ope)">
        {{ ope }}
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, computed } from "vue";
import {
  reqStarForm,
  reqCancelStarForm,
  reqStartForm,
  reqEndForm,
  reqDeleteForm,
} from "@/api/form";
import { useStore } from "vuex";
// 引入element-plus函数
import { ElMessage, ElMessageBox } from "element-plus";
import router from "@/router";
export default defineComponent({
  name: "FormList",
  props: ["operation", "form", "isStar", "formInfo", "formStarInfo"],
  setup(props) {
    const Store = useStore();

    const statusComputed = computed(() => {
      switch (props.form.status) {
        case 1:
          return "已删除";
        case 2:
          return "草稿";
        case 3:
          return "收集中";
        case 4:
          return "已结束";
      }
      return "error";
    });

    const formTime = computed(() => {
      return new Date(props.form.ctime)
        .toLocaleString()
        .replace(/:\d{1,2}$/, " ");
    });
    // 改变收藏
    /*
     * 先判断当前form的收藏状态，如果是收藏，则调用取消收藏，如果是未收藏，调用收藏
     * 调用服务器改变收藏状态后，要更新界面，
     * 先判断当前界面是显示所有的还是仅收藏
     * 显示所有的则传入普通参数
     * 显示仅收藏，则传入收藏参数
     */
    async function changeStar() {
      let id = props.form.id;
      if (props.form.isStar) {
        cancelStarForm(id);
      } else {
        starForm(id);
      }
      updateFormList();
    }

    // 收藏表单
    async function starForm(id: string) {
      const res: any = await reqStarForm(id);
      if (res.stat !== "ok") {
        ElMessage.error("收藏表单失败，请稍后重试");
      }
    }
    // 取消收藏
    async function cancelStarForm(id: string) {
      const res: any = await reqCancelStarForm(id);
      if (res.stat !== "ok") {
        ElMessage.error("取消收藏表单失败，请稍后重试");
      }
    }
    // 处理operation操作的函数
    function bypass(operation: string) {
      switch (operation) {
        case "发布":
          publish();
          break;
        case "编辑":
          editor();
          break;
        case "分享":
          share();
          break;
        case "填写":
          formFill();
          break;
        case "查看结果":
          viewResults();
          break;
        case "停止":
          stop();
          break;
        case "删除":
          deleteForm();
          break;
      }
    }
    // 发布表单的函数  调用接口向服务器发请求，成功则更新页面，失败则提示
    async function publish() {
      const res: any = await reqStartForm(props.form.id);
      if (res.stat !== "ok") {
        ElMessage.error(`发布失败，${res.response.data.msg}`);
      } else {
        ElMessage({
          message: "发布成功！",
          type: "success",
        });
        updateFormList();
      }
    }
    // 编辑？
    function editor() {
      console.log("editor");
    }
    // 分享，跳转到分享的二维码
    function share() {
      router.push({
        path: "/formdetail/share",
        query: {
          //路由传的参数 form 在formdetail接收
          id: props.form.id,
        },
      });
    }
    // 添写表单，跳转到表单填写界面
    function formFill() {
      router.push({
        path: "/formfill",
        query: {
          //路由传的参数 form 在formdetail接收
          id: props.form.id,
        },
      });
    }
    // 查看结果，跳转到查看结果页面
    function viewResults() {
      router.push({
        path: "/formdetail/analysis",
        query: {
          //路由传的参数 form 在formdetail接收
          id: props.form.id,
        },
      });
    }
    // 停止收集，调用接口向服务器发请求，成功则更新页面，失败则提示
    async function stop() {
      const res: any = await reqEndForm(props.form.id);
      if (res.stat !== "ok") {
        ElMessage.error(`停止收集失败，${res.response.data.msg}`);
      } else {
        ElMessage({
          message: "停止收集成功！",
          type: "success",
        });
        updateFormList();
      }
    }
    // 删除表单，调用接口向服务器发请求，成功则更新页面，失败则提示
    async function deleteForm() {
      const res: any = await reqDeleteForm(props.form.id);
      if (res.stat !== "ok") {
        ElMessage.error(`删除失败，${res.response.data.msg}`);
      } else {
        ElMessage({
          message: "删除成功！",
          type: "success",
        });
        updateFormList();
      }
    }

    // 更新界面数据函数
    function updateFormList() {
      if (props.isStar) {
        Store.dispatch("getFormList", props.formStarInfo);
      } else {
        Store.dispatch("getFormList", props.formInfo);
      }
    }

    return {
      statusComputed,
      formTime,
      changeStar,
      bypass,
    };
  },
});
</script>

<style scoped>
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
.template h3 {
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
</style>