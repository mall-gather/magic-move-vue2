<template>
  <div class="order-details-content">
    <RouterCell :title="orderInfoData.order_status | orderState"
                :isLink="false">
      <template #label>
        <span>逛逛别的商品，或许有心动的～</span>
      </template>
    </RouterCell>
    <RouterCell v-if="JSON.stringify(orderInfoData) !== '{}'"
                class="address"
                :title="orderInfoData.consignee +' '+ orderInfoData.telephone"
                icon="location-o"
                :isLink="false">
      <template #label>
        <span>{{orderInfoData.address_region | areaCodeConversion}} {{orderInfoData.address_detailed}}</span>
      </template>
    </RouterCell>
    <Shopping v-if="shopping.length"
              :shopping="shopping"></Shopping>
    <OrderInfo :orderInfoData="orderInfoData"></OrderInfo>
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
import { areaCodeToChinese } from '@/utils/areaCode';
import { getUserOrder } from '@/api/order';
export default {
  components: {
    RouterCell,
    Shopping,
    OrderInfo,
    VanButton,
  },
  data () {
    return {
      orderInfoData: {},
      shopping: [],
    }
  },
  filters: {
    areaCodeConversion: function (value) {
      const code = value.split(',')
      return areaCodeToChinese(code);
    },
    orderState: function (value) {
      switch (value) {
        case 1:
          return '待付款'
        case 2:
          return '已付款'
        case 3:
          return '已发货'
        case 4:
          return '已完成'
        case -1:
          return '交易已关闭'
      }
    },
    orderStateDescribe: function (value) {
      switch (value) {
        case 1:
          return '超时订单将自动关闭'
        case 2:
          return '订单已付款，等待发货'
        case 3:
          return '订单已发货，等待签收'
        case 4:
          return '订单已完成'
        case -1:
          return '逛逛别的商品，或许有心动的～'
      }
    },
  },
  created () {
    this.getUserOrderData()
  },
  methods: {
    // 获取数据
    getUserOrderData () {
      const data = {
        u_id: this.$store.getters.userInfo.u_id,
        order_id: this.$route.query.id
      }
      getUserOrder(data).then(res => {
        console.log(res);
        if (res.data.code === 200) {
          this.orderInfoData = res.data.data
          res.data.data.orderGoods.forEach(element => {
            this.shopping.push({
              id: element.goods_id,
              thumb: element.goods_avatar,
              title: element.goods_name,
              desc: element.specification.specification_value1 + ' ' + element.specification.specification_value2,
              price: element.goods_pic,
              freight: res.data.data.order_freight,
              num: element.goods_num
            })
          });
        }
      }).catch(err => {
        console.log(err);
      })
    },
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