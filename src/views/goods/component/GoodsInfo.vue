<template>
  <div class="goods-info">
    <Swipe></Swipe>
    <GoodsDescription title="aa" :pic="123"></GoodsDescription>
  </div>
</template>

<script>
import Swipe from './Swipe.vue';
import GoodsDescription from './GoodsDescription.vue';
export default {
  components: {
    Swipe,
    GoodsDescription,
  },
}
</script>

<style>

</style>