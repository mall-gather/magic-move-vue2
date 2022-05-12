<template>
  <div class="home">
    <Search></Search>
    <Swipe></Swipe>
    <Goods></Goods>
  </div>
</template>

<script>
import Search from '@/components/Search/index.vue';
import Swipe from './component/Swipe.vue';
import Goods from './component/Goods.vue';
export default {
  components: {
    Search,
    Swipe,
    Goods,
  },
}
</script>

<style lang="less" scoped>
.home{
  height: calc(100vh - 50px);
  overflow: auto;
}
</style>