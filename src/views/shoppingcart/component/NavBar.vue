<template>
  <div class="navber">
    <sticky>
      <NavBar @onClickRight="onClickRight">
        <template v-slot:title>
          <span class="title">购物车</span>
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
import NavBar from '@/components/NavBar/index.vue';
import { Icon, ShareSheet, Sticky } from 'vant';
import { sharesheetMixins } from '@/mixin/sharesheetMixins';
export default {
  components: {
    NavBar,
    Icon,
    ShareSheet,
    Sticky,
  },
  mixins: [sharesheetMixins],
  data () {
    return {
    }
  },
  methods: {
    onClickRight () {
      this.showShare = true
    },
  },
}
</script>

<style>
.title {
  font-size: 18px;
}
</style>