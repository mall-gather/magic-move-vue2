<template>
  <div class="order-confirm-content">
    <RouterCell v-if="list.length === 0"
                title="无收货地址，请点击前往设置"
                icon="location-o"
                @onCell="onCellAddress"></RouterCell>
    <RouterCell v-else
                :title="list[addressIndex].address"
                icon="location-o"
                @onCell="onCellAddress">
      <template v-if="list.length !== 0"
                #label>
        {{list[addressIndex].name}} {{list[addressIndex].tel}}
      </template>
    </RouterCell>
    <Popup :isPopup.sync="isPopup">
      <template>
        <AddressList v-if="list.length"
                     :list="list"
                     :switchable="true"
                     :addressId="addressId"
                     @onAdd="onAddAddress"
                     @onEdit="onEditAddress"
                     @onclickItem="onclickItemAddress"></AddressList>
      </template>
    </Popup>
    <!-- 商品 -->
    <Shopping v-if="this.$store.getters.orderConfirm.length == shopping.length"
              :shopping="shopping"
              @subtotal="subtotal"></Shopping>
    <!-- 备注 -->
    <field v-model="message"
           rows="1"
           autosize
           label="备注"
           type="text"
           placeholder="选填，建议先和客服协商一致" />

    <SubmitBar :resultLength="list.length"
               :priceTotal="priceTotal"
               :isCheckboxShow="isCheckboxShow"
               @onSubmit="onSubmitOrderConfirm"></SubmitBar>

    <Popup class="popup-confirm"
           :closeable="true"
           :isPopup.sync="isPopupConfirm"
           @onClosed="onClosedConfirm">
      <div v-if="shopping.length>0"
           class="name">{{shopping.length>1?'magic商城':shopping[0].title}}</div>
      <div class="amount">
        <span>￥</span>
        <span class="pic">{{priceTotal.toFixed(2)}}</span>
      </div>
      <div class="remain-time">
        <span>剩余支付时间：</span>
        <count-down :time="time"
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
import { Field, CountDown, Button as VanButton } from 'vant';
import RouterCell from '@/components/RouterCell/index.vue';
import Popup from '@/components/Popup/index.vue';
import AddressList from '@/components/AddressList/index.vue';
import SubmitBar from '@/components/SubmitBar/index.vue';
import Shopping from './Shopping.vue';
import Plat from './Plat.vue';
import { areaCodeToChinese } from '@/utils/areaCode';
import { getGoods, getSpecification } from '@/api/goods';
import { getAddress } from '@/api/address';
import { submitOrders } from '@/api/order';
export default {
  components: {
    RouterCell,
    Popup,
    AddressList,
    SubmitBar,
    Shopping,
    Field,
    CountDown,
    VanButton,
    Plat,
  },
  data () {
    return {
      isPopup: false,
      isPopupConfirm: false,
      isCheckboxShow: false,
      shopping: [
        // {
        //   id: 1,
        //   thumb: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
        //   title: '手机',
        //   desc: '12+256',
        //   price: 1000.22,
        //   freight: 0,
        //   num: 1
        // },
        // {
        //   id: 2,
        //   thumb: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
        //   title: '手机',
        //   desc: '12+256',
        //   price: 1000.22,
        //   freight: 0,
        //   num: 1
        // }
      ],
      message: '',
      price: 0,
      freight: 0,
      priceTotal: 0,
      list: [],
      addressIndex: null,
      addressId: null,
      time: 30 * 60 * 1000,
    }
  },
  created () {
    this.getGoodsData()
    this.getAddressData()
  },
  methods: {
    // 获取商品数据
    getGoodsData () {
      // 初始化
      this.shopping = []
      this.$store.getters.orderConfirm.forEach(element => {
        getGoods(element.goodsId).then((res) => {
          getSpecification(element.selectedSkuComb.id).then(result => {
            console.log(result);
            this.shopping.push({
              id: res.data.data.goods_id,
              cart_id: element.cart_id,
              thumb: res.data.data.goods_avatar,
              title: res.data.data.goods_name,
              specification_id: element.selectedSkuComb.id,
              desc: result.data.data.specification_value1 + ',' + result.data.data.specification_value2,
              price: result.data.data.goods_pic,
              freight: 0,
              num: element.selectedNum
            })
          })
        }).catch((err) => {
          console.log(err);
        });
      });
    },
    // 获取收货地址
    getAddressData () {
      this.list = []
      const u_id = this.$store.getters.userInfo.u_id
      getAddress(u_id).then(res => {
        console.log(res);
        res.data.data.forEach((item, index) => {
          if (item.isDefault) {
            this.addressIndex = index
            this.addressId = item.address_id
          }
          this.list.push({
            id: item.address_id,
            name: item.consignee,
            tel: item.telephone,
            address: areaCodeToChinese([item.province, item.city, item.district]) + ' ' + item.detail,
            province: item.province,
            city: item.city,
            district: item.district,
            detail: item.detail,
            zipcode: item.zipcode,
            isDefault: item.isDefault,
          })
        })
      }).catch(err => {
        console.log(err);
      })
    },
    onCellAddress () {
      this.isPopup = true
    },
    onAddAddress () {
      this.$router.push({
        path: '/addaddress'
      })
    },
    onEditAddress (item, index) {
      this.$router.push({
        path: '/editaddress',
        query: {
          id: item.id
        }
      })
    },
    // 选择的地址
    onclickItemAddress (item, index) {
      this.addressIndex = index
      this.addressId = item.id
      this.isPopup = false
    },
    // 小计
    subtotal (val) {
      this.priceTotal = val
    },
    // 提交订单
    onSubmitOrderConfirm () {
      this.isPopupConfirm = true
      const data = {
        u_id: this.$store.getters.userInfo.u_id,
        goods_amount_tatol: 0,
        order_amount_tatal: this.priceTotal,
        order_status: 1,
        pay_channel: null,
        coupon_id: null,
        zipcode: this.list[this.addressIndex].zipcode,
        consignee: this.list[this.addressIndex].name,
        telephone: this.list[this.addressIndex].tel,
        address_region: this.list[this.addressIndex].province + ',' + this.list[this.addressIndex].city + ',' + this.list[this.addressIndex].district,
        address_detailed: this.list[this.addressIndex].detail,
        note: this.message,
        order_freight: this.freight,
        orderGoods: []
      }
      this.shopping.forEach(item => {
        data.orderGoods.push({
          cart_id: item.cart_id,
          goods_id: item.id,
          goods_avatar: item.thumb,
          goods_name: item.title,
          specification_id: item.specification_id,
          goods_pic: item.price,
          goods_num: item.num,
        })
        data.goods_amount_tatol += (item.price *item.num)
      })
      submitOrders(data).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    },
    onClosedConfirm () {
      console.log('关闭');
      this.$router.replace({
        path: '/order'
      })
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
.van-address-list {
  overflow: auto;
  /deep/.van-address-list__bottom {
    background-color: transparent;
  }
  /deep/.empty-state {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    .van-empty__image {
      width: 66px;
      height: 66px;
    }
  }
}
.van-field {
  margin: 10px 0 0 0;
  /deep/.van-field__control {
    text-align: right;
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
    background-color: #ff6d6d;
    border: 1px solid #ff6d6d;
  }
  .plat {
    text-align: left;
    margin: 20px 0 0 0;
  }
}
</style>