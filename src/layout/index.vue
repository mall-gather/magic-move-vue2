<template>
  <div class="layout">
    <router-view />
    <tabbar @change="tabBar"
            v-model="active">
      <tabbar-item name="home"
                   icon="wap-home-o">首页</tabbar-item>
      <tabbar-item name="categories"
                   icon="bookmark-o">分类</tabbar-item>
      <tabbar-item name="shoppingcart"
                   icon="shopping-cart-o">购物车</tabbar-item>
      <tabbar-item name="me"
                   icon="user-o">我的</tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  components: {
    Tabbar,
    TabbarItem,
  },
  data () {
    return {
      active: 'home'
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (val) {
        this.active = val.path.split('/')[1]
      }
    }
  },
  methods: {
    tabBar () {
      this.$router.push({
        path: '/' + this.active
      })
    }
  },
}
</script>

<style lang="less" scoped>
</style>