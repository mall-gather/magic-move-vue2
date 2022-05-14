<template>
  <div class="order-confirm">
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
.order-confirm{
  height: calc(100vh - 50px);
}
</style>