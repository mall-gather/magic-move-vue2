<template>
  <NavBar @onClickRight="onClickRight">
    <template v-slot:title>
        <span class="title">个人中心</span>
      </template>
    <template v-slot:right>
        <icon name="weapp-nav"
                size="18" />
      </template>
  </NavBar>
</template>

<script>
import NavBar from '@/components/NavBar/index.vue';
import { Icon,Toast } from 'vant';
export default {
  components: {
    NavBar,
    Icon,
  },
  data () {
    return {
    }
  },
  methods: {
    onClickRight () {
      Toast('按钮');
    },
  },
}
</script>

<style>
.title{
  font-size: 18px;
}
</style>