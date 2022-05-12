<template>
  <nav-bar class="nav-bar"
           title="标题"
           @click-left="onClickLeft"
           @click-right="onClickRight">
    <template #left>
      <slot name="left"></slot>
    </template>
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #right>
      <slot name="right"></slot>
    </template>
  </nav-bar>
</template>

<script>
import { NavBar } from 'vant';
export default {
  components: {
    NavBar,
  },
  data () {
    return {
    }
  },
  methods: {
    onClickLeft() {
      this.$emit('onClickLeft')
    },
    onClickRight() {
      this.$emit('onClickRight')
    },
  },
}
</script>

<style lang="less" scoped>
</style>