<template>
  <div class="shopping-cart" :class="isEmptyState?'shopping-cart-empty-state':''">
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
  data() {
    return {
      isEmptyState: true
    }
  },
}
</script>

<style lang="less" scoped>
.shopping-cart{
  height: calc(100vh - 100px);
  overflow: auto;
}
.shopping-cart-empty-state{
  height: calc(100vh - 50px);
}
</style>