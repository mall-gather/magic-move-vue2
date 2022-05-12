<template>
  <NavBar>
    <template #left>
      <icon class="come-break"
            @click="comeBreak"
            name="arrow-left" />
    </template>
    <template #title>
      <span>登录</span>
    </template>
  </NavBar>
</template>

<script>
import { Icon } from 'vant';
import NavBar from '@/components/NavBar/index.vue';
export default {
  components: {
    NavBar,
    Icon,
  },
  methods: {
    comeBreak () {
      this.$router.push('/home')
    }
  },
}
</script>

<style lang="less" scoped>
.come-break {
  font-size: 18px;
}
</style>