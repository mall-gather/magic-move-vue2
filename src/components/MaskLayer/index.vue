<template>
  <div class="mask-layer">
    <overlay :show="show"
             @click="show = false">
      <div class="wrapper"
           @click.stop>
        <div class="block" />
      </div>
    </overlay>
  </div>
</template>

<script>
import { Overlay } from 'vant';
export default {
  components: {
    Overlay,
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style lang="less" scoped>
.van-overlay {
  z-index: 9999;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  padding: 20px 25px;
  background-color: #fff;
}
</style>