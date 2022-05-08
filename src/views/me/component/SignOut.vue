<template>
  <div class="sign-out">
    <cell value="退出登录" size="large" />
  </div>
</template>

<script>
import { Cell } from 'vant';
export default {
  components: {
    Cell,
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