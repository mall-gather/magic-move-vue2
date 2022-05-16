<template>
  <div class="navber">
    <NavBar @onClickRight="onClickRight">
      <template v-slot:title>
        <span class="title">个人中心</span>
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
import NavBar from '@/components/NavBar/index.vue';
import { Icon, ShareSheet } from 'vant';
import { sharesheetMixins } from '@/mixin/sharesheetMixins';
export default {
  components: {
    NavBar,
    Icon,
    ShareSheet,
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