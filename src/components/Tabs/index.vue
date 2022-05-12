<template>
  <tabs class="tabs"
        v-model="active"
        swipeable
        @change="onChange">
    <slot></slot>
  </tabs>
</template>

<script>
import { Tabs } from 'vant';
export default {
  components: {
    Tabs,
  },
  data () {
    return {
      active: 0,
    };
  },
  methods: {
    onChange () {
      this.$emit('onChange', this.active)
    },
  },
}
</script>

<style lang="less" scoped>
.tabs {
  height: 45px;
  /deep/.van-tabs__content {
    height: 100%;
  }
}
</style>