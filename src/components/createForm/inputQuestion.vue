<template>
  <div class="question">
    <div class="title">
      <span>{{ q_index + 1 }}</span>
      <input
        v-model="question.title"
        type="text"
        class="input"
        placeholder="请输入问题标题"
      />
    </div>
    <div class="options"></div>
    <div class="question_bottom">
      <div>
        <label for="problemTypes">题型切换：</label>
        <select id="problemTypes" v-model="question.type" @change="changeType">
          <option
            v-for="(pro, index) in problemTypes"
            :key="index"
            :value="pro.type"
          >
            {{ pro.title }}
          </option>
        </select>
      </div>
      <div class="bottom">
        <input type="checkbox" v-model="question.required" />
        <span>必填</span>
        <div @click="deleteItem"><img src="./assets/delete.png" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inputQuestion",
  props: ["q_index", "problem","delete","problemTypes"],
  data() {
    return {
      question: this.problem,
    };
  },
  methods: {
    deleteItem() {
      this.delete(this.q_index)
    },
    /* 两种状态：
     * 一种是填空-->选择  setting变成有值的option
     * 一种是选择-->填空  setting变成null
     * 其他的情况不修改setting
     */
    changeType() {
      // 如果有setting则是选择题  变成填空时清空setting
      if (this.question.setting) {
        if (this.question.type.indexOf("Select") === -1) {
          // this.question.setting = null;
          delete this.question.setting
        }
        // 没有setting是填空题  变成选择时设置setting
      } else {
        if (this.question.type.indexOf("Select") != -1) {
          this.question.setting = {
            options: [
              { title: "选项1", status: 2 },
              { title: "选项2", status: 2 },
            ],
          };
        }
      }
    },
  },
};
</script>


<style scoped>
img {
  width: 20px;
  vertical-align: middle;
}
span {
  font-size: 15px;
}
input {
  border: none;
  outline: none;
  color: #333;
}
select {
  border: 1px solid #cccdcf;
  border-radius: 5px;
  padding: 2px;
  outline: none;
}

.input {
  border: none;
  width: 90%;
  padding: 14px;
  font-size: 18px;
  font-weight: 500;
  /* border-bottom: 1px dashed rgb(192 198 207 / 50%); */
}
.question {
  padding: 10px;
  width: 540px;
  box-shadow: 0 4px 16px 0 rgb(192 198 207 / 50%);
  border-radius: 4px;
  margin-top: 20px;
  background-color: #fff;
}
.options {
  /* border-bottom: 1.5px solid #e7e9eb; */
  padding-bottom: 5px;
}
.option {
  display: block;
  font-size: 16px;
  padding-left: 20px;
  padding-top: 5px;
  color: #333;
}
.bottom {
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
}
.question_bottom {
  border-top: 1.5px solid #e7e9eb;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
}
</style>