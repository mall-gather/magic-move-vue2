<template>
  <div class="coupon">
    <NavBar></NavBar>
    <Content></Content>
  </div>
</template>

<script>
import NavBar from './component/NavBar.vue';
import Content from './component/Content.vue';
export default {
  components: {
    NavBar,
    Content,
  },
}
</script>

<style lang="less" scoped>
.coupon{
  height: 100vh;
}
</style>