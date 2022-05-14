<template>
  <div class="shopping">
    <div class="goods">
      <GoodsCardRow v-for="item in shopping"
                    :key="item.id"
                    :thumb="item.thumb"
                    :title="item.title"
                    :desc="item.desc"
                    :price="item.price"
                    :num="item.num"
                    :isStepper="false"></GoodsCardRow>
      <div class="describe">
        <div class="pic">
          <div>商品金额：</div>
          <div>
            <span>￥</span>
            <span>{{price}}</span>
          </div>
        </div>
        <div class="freight">
          <div>运费：</div>
          <div>
            <span>￥</span>
            <span>{{freight}}</span>
          </div>
        </div>
        <div class="coupon">
          <coupon-cell :coupons="coupons"
                       :chosen-coupon="chosenCoupon"
                       @click="showList = true" />
        </div>
        <div class="subtotal">
          <div class="null"></div>
          <div>
            <span>￥</span>
            <span>{{subtotal(price, freight, ((coupons[chosenCoupon]?coupons[chosenCoupon].value:0 )/ 100))}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 优惠券列表 -->
    <popup v-model="showList"
           round
           position="bottom">
      <coupon-list :coupons="coupons"
                   :chosen-coupon="chosenCoupon"
                   :disabled-coupons="disabledCoupons"
                   @change="onChange"
                   @exchange="onExchange" />
    </popup>
  </div>
</template>

<script>
import { CouponCell, CouponList, Popup } from 'vant';
import GoodsCardRow from '@/components/GoodsCardRow';

const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};

export default {
  components: {
    GoodsCardRow,
    CouponCell,
    CouponList,
    Popup,
  },
  props: {
    shopping: {
      type: Array,
      default: () => []
    },
  },
  data () {
    return {
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      price: 0,
      priceTotal: 0,
      freight: 0
    };
  },
  mounted () {
    this.shoppingListData()
  },
  methods: {
    onChange (index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange (code) {
      this.coupons.push(coupon);
    },
    // 选择列表
    shoppingListData () {
      this.price = 0
      this.freight = 0
      this.shopping.forEach(item => {
        this.price += item.price
        this.freight += item.freight
      })
    },
    // 小计
    subtotal (price, freight, coupon) {
      this.priceTotal = price + freight - coupon
      return this.priceTotal
    }
  },
}
</script>

<style lang="less" scoped>
.goods {
  margin: 10px 0 0 0;
  padding: 10px 0;
  box-sizing: content-box;
  background-color: #fff;
  .describe {
    .pic,
    .freight {
      display: flex;
      justify-content: space-between;
      margin: 10px 0 0 0;
      padding: 0 10px;
    }
    .coupon {
      .van-cell {
        margin: 10px 0 0 0;
        padding: 0 10px;
      }
    }
    .subtotal {
      display: flex;
      margin: 20px 0 0 0;
      padding: 0 10px 10px;
      .null {
        flex: 1;
      }
    }
  }
}
.van-popup {
  height: 50%;
  padding-top: 4px;
}
</style>