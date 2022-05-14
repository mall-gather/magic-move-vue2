<template>
  <div class="sign-out">
    <cell value="退出登录" @click="onSignOut" size="large" />
  </div>
</template>

<script>
import { Cell } from 'vant';
export default {
  components: {
    Cell,
  },
  methods: {
    onSignOut() {
      console.log('退出登录');
    }
  },
}
</script>

<style lang="less" scoped>
.van-cell{
  .van-cell__value{
    text-align: center;
  }
}
</style>