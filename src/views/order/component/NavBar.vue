<template>
  <div class="navber">
    <NavBar @onClickRight="onClickRight">
      <template #left>
        <icon class="come-break"
              @click="comeBreak"
              name="arrow-left" />
      </template>
      <template #title>
        <span>订单列表</span>
      </template>
      <template v-slot:right>
        <icon name="weapp-nav"
              size="18" />
      </template>
    </NavBar>
    <share-sheet v-model="showShare"
                 :options="options" />
  </div>
</template>

<script>
import { Icon, ShareSheet } from 'vant';
import NavBar from '@/components/NavBar/index.vue';
import { sharesheetMixins } from '@/mixin/sharesheetMixins';
export default {
  components: {
    NavBar,
    Icon,
    ShareSheet,
  },
  mixins: [sharesheetMixins],
  methods: {
    comeBreak () {
      this.$router.go(-1)
    },
    onClickRight () {
      this.showShare = true
    },
  },
}
</script>

<style lang="less" scoped>
.come-break {
  font-size: 18px;
}
</style>