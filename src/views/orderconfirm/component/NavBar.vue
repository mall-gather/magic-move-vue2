<template>
  <NavBar @onClickRight="onClickRight">
    <template #left>
      <icon class="come-break"
            @click="comeBreak"
            name="arrow-left" />
    </template>
    <template #title>
      <span>确认订单</span>
    </template>
    <template v-slot:right>
      <icon name="weapp-nav"
            size="18" />
    </template>
  </NavBar>
</template>

<script>
import { Icon, Toast } from 'vant';
import NavBar from '@/components/NavBar/index.vue';
export default {
  components: {
    NavBar,
    Icon,
  },
  methods: {
    comeBreak () {
      this.$router.go(-1)
    },
    onClickRight () {
      Toast('按钮');
    },
  },
}
</script>

<style lang="less" scoped>
.come-break {
  font-size: 18px;
}
</style>