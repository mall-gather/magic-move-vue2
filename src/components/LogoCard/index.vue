<template>
  <div class="logo">
    <van-image width="200"
               height="200"
               :src="require('@/assets/logo.png')" />
  </div>
</template>

<script>
import { Image as VanImage } from 'vant';
export default {
  components: {
    VanImage,
  },
}
</script>

<style lang="less" scoped>
.logo{
  height: 200px;
  text-align: center;
  padding: 20px 0 0 0;
}
</style>