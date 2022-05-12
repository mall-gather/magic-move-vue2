<template>
  <div class="goods">
    <NavBar></NavBar>
    <GoodsInfo></GoodsInfo>
  </div>
</template>

<script>
import NavBar from './component/NavBar.vue';
import GoodsInfo from './component/GoodsInfo.vue';
export default {
  components: {
    NavBar,
    GoodsInfo,
  },
}
</script>

<style lang="less" scoped>
.goods{
  height: 100vh;
}
</style>