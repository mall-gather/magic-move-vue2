<template>
  <div class="navber">
    <sticky>
      <NavBar @onClickRight="onClickRight">
        <template #left>
          <icon class="come-break"
                @click="comeBreak"
                name="arrow-left" />
        </template>
        <template #title>
          <span></span>
        </template>
        <template v-slot:right>
          <icon name="weapp-nav"
                size="18" />
        </template>
      </NavBar>
    </sticky>
    <share-sheet v-model="showShare"
                 :options="options" />
  </div>
</template>

<script>
import { Icon, ShareSheet, Sticky } from 'vant';
import { sharesheetMixins } from '@/mixin/sharesheetMixins';
import NavBar from '@/components/NavBar/index.vue';
export default {
  components: {
    NavBar,
    Icon,
    ShareSheet,
    Sticky,
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