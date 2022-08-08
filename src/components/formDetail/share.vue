<template>
  <div class="box">
    <div class="content">
      <div class="qrcode_box">
        <!-- 标题 -->
        <h2 class="title">{{ form.title }}</h2>
        <!-- 二维码 -->
        <qrcode-vue
          :value="qrUrl"
          :size="QRsize"
          level="H"
          id="qrImg"
          class="mb16"
        />
        <div>微信扫码或者长按识别，填写内容</div>
      </div>
      <div class="downloadQR" @click="downloadQrcode">下载二维码</div>
      <button class="linkCopy" @click="copyDomText">复制链接</button>
    </div>
  </div>
  <div></div>
</template>
<script lang="ts">
// 引入基本的定义组件函数，计算属性
import { computed, defineComponent } from "vue";
// 引入仓库
import { useStore } from "vuex";
// 引入生成二维码的插件
import QrcodeVue from "qrcode.vue";
// 引入element-plus的消息提示
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "shareView",
  // 注册组件
  components: { QrcodeVue },
  setup() {
    // 定义仓库
    const Store = useStore();
    // 从仓库中取出当前表单的信息
    const form = computed(() => {
      return Store.state.FORM.form;
    });
    // 定义二维码大小常量
    const QRsize = 200;
    // 计算二维码分享的链接
    const qrUrl = computed(() => {
      return `http://localhost:8080/formfill?id=${form.value.id}`;
    });

    // 下载二维码的函数
    function downloadQrcode() {
      const myCanvas = document.getElementById("qrImg") as HTMLCanvasElement;
      const a = document.createElement("a");
      a.href = myCanvas.toDataURL("image/png");
      a.download = `${form.value.title}_QRcode`;
      a.click();
    }
    // 复制二维码链接的函数
    function copyDomText() {
      // 添加一个input元素放置需要的文本内容
      const input = document.createElement("input");
      input.value = qrUrl.value;
      document.body.appendChild(input);
      // 选中并复制文本到剪切板
      input.select();
      document.execCommand("copy");
      // 移除input元素
      document.body.removeChild(input);
      ElMessage({
        message: "复制成功",
        type: "success",
      });
    }

    return {
      qrUrl,
      downloadQrcode,
      copyDomText,
      form,
      QRsize,
    };
  },
});
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.qrcode_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: px!important;  */
  padding: 15px 35px;
  border: 1px solid #e7e9eb;
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgb(192 198 207 / 50%);
}
.title {
  font-weight: 500;
  font-size: 26px;
}
.qrcode {
  display: block;
  width: 350px !important;
  height: 350px !important;
  margin: 0;
}
.qrcode_box div {
  padding: 10px 0;
  font-size: 14px;
  color: gray;
}
.downloadQR {
  margin: 25px 0;
  color: #1488ed;
  font-size: 26px;
  cursor: pointer;
}
.linkCopy {
  display: block;
  width: 150px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #e7e9eb;
  border-radius: 5px;
  cursor: pointer;
}
</style>