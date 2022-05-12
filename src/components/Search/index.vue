<template>
  <div class="carousel">
    <sticky>
      <search shape="round"
              disabled
              background="#fff"
              @click="clickSearch"
              placeholder="请输入搜索关键词">
        <template #left>
          <slot name="left"></slot>
        </template>
        <template #right>
          <slot name="right"></slot>
        </template>
      </search>
    </sticky>
  </div>
</template>

<script>
import { Search, Sticky } from 'vant';
export default {
  components: {
    Sticky,
    Search
  },
  methods: {
    clickSearch () {
      console.log('搜索');
    }
  },
}
</script>

<style lang="less" scoped>
</style>