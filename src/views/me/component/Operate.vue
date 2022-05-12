<template>
  <div class="operate">
    <RouterCell title="我的订单" icon="orders-o" @onCell="onOrder"></RouterCell>
    <RouterCell title="我的优惠券" icon="coupon-o"></RouterCell>
    <RouterCell title="收货地址" icon="location-o"></RouterCell>
    <RouterCell title="联系客服" icon="service-o"></RouterCell>
    <RouterCell title="查看《服务条款》" icon="comment-o"></RouterCell>
  </div>
</template>

<script>
import RouterCell from '@/components/RouterCell/index.vue';
export default {
  components: {
    RouterCell,
  },
  methods: {
    onOrder() {
      this.$router.push({
        path:'/order'
      })
    }
  },
}
</script>

<style lang="less" scoped>
.operate{
  margin: 0 0 10px 0;
}
</style>