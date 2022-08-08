<template>
  <div class="multiSelect-box">
    <div class="title">
      {{ index + 1 }} . {{ problem.title }}
      <span class="require" v-if="problem.required">*</span
      ><span class="type">[多选题]</span>
    </div>
    <el-checkbox-group v-model="ids" class="select" :disabled="isUse">
      <el-checkbox
        v-for="option in problem.setting.options"
        :key="option.id"
        :label="option.id"
        size="large"
        @change="sendResult"
        >{{ option.title }}</el-checkbox
      >
    </el-checkbox-group>
  </div>
</template>
<script lang="ts">
// 引入vue基本的函数
import { defineComponent, ref, inject } from "vue";
// 引入element的消息提示
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "multiSelect",
    // 接收父组件的值
  props: ["index", "problem", "isUse"],
  setup(props) {
    // 定义ids双向绑定选择的id
    const ids = ref([]);
      // 接收发result给爷爷组件的函数
    let receiveResult: any = inject("receiveResult");
    // 发送所填写的结果给爷爷组件
    /*
     *先将result的值更新为新的数据
     *根据得到的id用find函数找到相对应的title
     *如果输入空，应该直接返回，提示用户的
     * 不为空才发送给爷爷组件汇总
     */
    function sendResult() {
      // 定义需要的result
      let result: object[] = [];
      // 如果输入空，应该直接返回，提示用户的
      if (props.problem.required && ids.value.length === 0) {
        ElMessage.error("该题为必填项，不能为空");
        return;
      }
      // 遍历ids里的数组，找对应的title，拼成对象数组
      for (const id of ids.value) {
        // 写在里面，因为每次要初始化
        let res = {
          id: "",
          title: "",
        };
        // 赋值新值
        res.id = id;
        res.title = props.problem.setting.options.find(
          (item: any) => item.id === id
        ).title;
        result.push(res);
      }
      // 发送给组件
      receiveResult(props.index, result);
    }

    return {
      ids,
      sendResult,
    };
  },
});
</script>
<style scoped>
.multiSelect-box {
  min-width: 70%;
  max-width: 90%;
  padding: 24px 16px;
  /* border-bottom: 1px solid rgba(25, 55, 88, 0.1); */
}
.title {
  font-weight: 600;
  font-size: 20px;
}
.require {
  font-weight: 600;
  color: #ff6060;
  margin-left: 8px;
}
.type {
  color: #707070;
  font-weight: 500;
  font-size: 18px;
  margin-left: 8px;
}
.select {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-left: 16px;
}
</style>