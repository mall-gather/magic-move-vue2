<template>
  <div class="order-details-content">
    <RouterCell title="交易关闭"
                :isLink="false">
      <template #label>
        <span>逛逛别的商品，或许有心动的～</span>
      </template>
    </RouterCell>
    <RouterCell class="address"
                title="yuzu 10000000000"
                icon="location-o"
                :isLink="false">
      <template #label>
        <span>广西</span>
      </template>
    </RouterCell>
    <Shopping :shopping="shopping"></Shopping>
    <OrderInfo></OrderInfo>
    <van-button class="service-button"
                type="primary"
                @click="onClickService"
                icon="service-o"
                block>联系客服</van-button>
  </div>
</template>

<script>
import { Button as VanButton } from 'vant';
import RouterCell from '@/components/RouterCell/index.vue';
import Shopping from './Shopping.vue';
import OrderInfo from './OrderInfo.vue';
export default {
  components: {
    RouterCell,
    Shopping,
    OrderInfo,
    VanButton,
  },
  data () {
    return {
      shopping: [
        {
          id: 1,
          thumb: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机',
          desc: '12+256',
          price: 1000.22,
          freight: 0,
          num: 1
        },
        {
          id: 2,
          thumb: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机',
          desc: '12+256',
          price: 1000.22,
          freight: 0,
          num: 1
        }
      ],
    }
  },
  methods: {
    onClickService () {
      console.log('联系客服');
    }
  },
}
</script>

<style lang="less" scoped>
.order-details-content {
  .address {
    margin: 10px 0 0 0;
  }
  .service-button {
    margin: 10px 0 0 0;
    color: #16162e;
    background-color: #fff;
    border: 1px solid #fff;
    &::before {
      background-color: #fff;
      border-color: #fff;
    }
  }
}
</style>