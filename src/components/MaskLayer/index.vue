<template>
  <div class="mask-layer">
    <overlay :show="show"
             @click="closureShow">
      <div class="wrapper">
        <div class="block" @click.stop>
          <slot></slot>
        </div>
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
  methods: {
    closureShow() {
      console.log('111');
      this.$emit('update:show',false)
    }
  },
}
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block{
  display: block;
}
</style>