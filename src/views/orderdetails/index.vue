<template>
  <div class="order-details">
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
.order-details{
  height: 100vh;
  overflow: auto;
}
</style>