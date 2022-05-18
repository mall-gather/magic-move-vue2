<template>
  <div class="order-list">
    <pull-refresh v-model="isLoading"
                  success-text="刷新成功"
                  @refresh="onRefresh">
      <div v-if="!isEmptyState"
           class="state">
        <div class="order-data-list"
             v-for="(order,o) in orderList"
             :key="o">
          <div class="order-title">
            <span>
              {{order.date}}
            </span>
            <span class="state">
              {{order.order_status | orderState}}
            </span>
          </div>
          <GoodsCardRow v-for="(item,index) in order.orderGoods"
                        :key="index"
                        :id="item.id"
                        :thumb="item.thumb"
                        :title="item.title"
                        :desc="item.desc"
                        :price="item.price"
                        :num="item.num"
                        :isStepper="false"
                        @onClickCard="onClickCard">
          </GoodsCardRow>
          <div class="payment">
            <van-button round
                        v-if="order.order_status === 1"
                        class="payment-btn"
                        type="info"
                        :loading="isButtonLoading"
                        @click="onClickButton(order)"
                        size="small">付款</van-button>

          </div>
        </div>
      </div>
      <div v-else
           class="empty-state">
        <EmptyState :image="require('@/assets/image/ordernull.webp')"
                    description="暂无订单"></EmptyState>
      </div>
    </pull-refresh>
    <Popup class="popup-confirm"
           v-if="orderList.length"
           :closeable="true"
           :isPopup.sync="isPopupConfirm"
           @onClosed="onClosedConfirm">
      <div class="name">{{pay.name}}</div>
      <div class="amount">
        <span>￥</span>
        <span class="pic">{{pay.price}}</span>
      </div>
      <div class="remain-time">
        <span>剩余支付时间：</span>
        <count-down :time="pay.time"
                    format="mm:ss" />
      </div>
      <div class="plat">
        <Plat @onChangeRadio="onChangeRadioPlat"></Plat>
      </div>
      <van-button type="primary"
                  @click="onClickPayment"
                  round
                  block>确认支付</van-button>
    </Popup>
  </div>
</template>

<script>
import { PullRefresh, CountDown, Button as VanButton } from 'vant';
import GoodsCardRow from '@/components/GoodsCardRow/index.vue';
import EmptyState from '@/components/EmptyState/index.vue';
import Plat from './Plat.vue';
import Popup from '@/components/Popup/index.vue';
import _ from 'lodash';
import { convertTime, countdown } from '@/utils/time';
import { getUserOrderList } from '@/api/order';
export default {
  components: {
    GoodsCardRow,
    EmptyState,
    PullRefresh,
    VanButton,
    Plat,
    Popup,
    CountDown,
  },
  props: {
    active: {
      type: Number,
      default: 0
    },
  },
  data () {
    return {
      isLoading: false,
      isButtonLoading: false,
      isPopupConfirm: false,
      isEmptyState: false,
      orderList: [],
      pay: {},
      time: 30 * 60 * 1000,
    }
  },
  watch: {
    active: {
      immediate: true,
      handler: _.debounce(function (val) {
        console.log(val);
      }, 0)
    },
    orderList: {
      immediate: true,
      handler (val) {
        if (val.length > 0) {
          this.isEmptyState = false
        } else {
          this.isEmptyState = true
        }
      }
    }
  },
  filters: {
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
          return '已关闭'
      }
    }
  },
  created () {
    this.getUserOrderListData()
  },
  methods: {
    // 获取数据
    getUserOrderListData () {
      const data = {
        u_id: this.$store.getters.userInfo.u_id,
        order_status: this.active
      }
      getUserOrderList(data).then(res => {
        console.log(res)
        if (res.data.code === 200) {
          res.data.data.forEach(item => {
            let orderTemp = []
            item.ordergoods.forEach(item2 => {
              orderTemp.push({
                id: item2.order_id,
                thumb: item2.goods_avatar,
                title: item2.goods_name,
                desc: item2.specification.specification_value1 + ' ' + item2.specification.specification_value2,
                price: item2.goods_pic,
                num: item2.goods_num
              })
            })
            this.orderList.push({
              order_id: item.order_id,
              order_status: item.order_status,
              date: convertTime('yyyy-MM-dd', item.create_time),
              create_time: item.create_time,
              end_time: item.end_time,
              orderGoods: orderTemp
            })
          });
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 刷新
    onRefresh () {
      setTimeout(() => {
        console.log('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
    // 点击订单
    onClickCard (val) {
      this.$router.push({
        path: '/orderdetails',
        query: {
          id: val
        }
      })
    },
    //
    onClickButton (order) {
      this.isPopupConfirm = true
      console.log(order);
      let price = 0
      order.orderGoods.forEach(item => {
        price += (item.price * item.num)
      })
      this.pay = {
        name: order.orderGoods.length > 1 ? 'magic商城' : order.orderGoods[0].title,
        time: countdown(order.end_time),
        price: price
      }
    },
    onClosedConfirm () {

    },
    onChangeRadioPlat (val) {
      console.log(val);
    },
    // 付款
    onClickPayment () {
      console.log('付款');
    }
  },
}
</script>

<style lang="less" scoped>
.order-list {
  height: 100%;
  .van-pull-refresh {
    height: calc(100vh - 90px);
    overflow: auto;
    .order-data-list {
      padding: 10px;
      margin: 0 0 10px 0;
      background-color: #fff;
      .order-title {
        padding: 0 0 10px 0;
        font-size: 18px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        >.state{
          font-size: 16px;
          font-weight: 500;
          color: #ff6d6d;
          margin: 0 10px 0 0;
        }
      }
    }
    .empty-state {
      padding: 60px 0 30px 0;
    }
  }
  .van-button {
    color: #ff6d6d;
    border-color: #ff6d6d;
    background-color: #fff;
    padding: 0 20px;
    margin: 10px 0 0 0;
  }
  .payment {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .payment-btn {
      margin: 0 10px 0 0;
    }
  }

  .popup-confirm {
    box-sizing: border-box;
    padding: 40px 10px 30px;
    text-align: center;
    .name {
      font-size: 16px;
      line-height: 22px;
      color: #666;
      font-weight: 400;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .amount {
      color: #ff6d6d;
      margin: 10px 0 0 0;
      span {
        height: 30px;
        line-height: 30px;
        font-size: 24px;
      }
      .pic {
        font-size: 36px;
        height: 30px;
      }
    }
    .remain-time {
      display: flex;
      justify-content: center;
      margin: 10px 0 0 0;
      font-size: 14px;
      font-weight: 400;
      color: #999;
      height: 18px;
      line-height: 18px;
      .van-count-down {
        color: #999;
      }
    }
    .van-button {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 90%;
      margin: 10px auto;
      color: #fff;
      background-color: #ff6d6d;
      border: 1px solid #ff6d6d;
    }
    .plat {
      text-align: left;
      margin: 20px 0 0 0;
    }
  }
}
</style>