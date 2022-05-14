<template>
  <div class="sign-out">
    <cell value="退出登录"
          @click="onSignOut"
          size="large" />
  </div>
</template>

<script>
import { Cell } from 'vant';
import {removeToken} from '@/utils/auth';
export default {
  components: {
    Cell,
  },
  methods: {
    onSignOut () {
      this.$store.dispatch('removeData')
      removeToken('forward-data')
      this.$router.replace('/home')
    }
  },
}
</script>

<style lang="less" scoped>
.van-cell {
  .van-cell__value {
    text-align: center;
  }
}
</style>