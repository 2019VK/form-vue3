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
import { useStore} from 'vuex'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: "AvaNickname",
  setup() {
    const Store = useStore()
    const router = useRouter()
    

    const avatar = computed(() => {
      let ava = Store.state.USER.user.avatar
      let defaultImg = "./asset/defaultAvatar.png"
      return ava?ava:defaultImg
    })
    const nickname = computed(() => {
      let nick = Store.state.USER.user.nickname
      return nick?nick:"请登录"
    })

    
    onMounted(() => {
      if(Store.state.USER.isLogin){
        console.log(Store.state.FORM.pageInfo1);
        // let {offset,limit,isStar} = Store.state.FORM.pageInfo1
        Store.dispatch("getUserInfo")
        Store.dispatch('getFormList',{
          offset: 0,  //number类型,可选   第几页
          limit: 8,   //number类型,可选   一页限制显示多少个        
        })
      }
    })
    
    function loginPersonalCentre(){
      if(Store.state.USER.isLogin){
        router.push('/usercenter')
      }else{
        router.push('/login')
      }
    }


    return {
      avatar,
      nickname,
      loginPersonalCentre
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