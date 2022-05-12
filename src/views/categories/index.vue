<template>
  <div class="categories">
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from './component/NavBar.vue';
export default {
  components: {
    NavBar,
  },
}
</script>

<style lang="less" scoped>
.categories{
  height: calc(100vh - 50px);
  overflow: auto;
}
</style>