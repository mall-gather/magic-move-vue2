<template>
  <div class="order-confirm-content">
    <RouterCell v-if="list.length === 0"
                title="无收货地址，请点击前往设置"
                icon="location-o"
                @onCell="onCellAddress"></RouterCell>
    <RouterCell v-else
                :title="list[0].address"
                icon="location-o"
                @onCell="onCellAddress">
      <template #label>
        {{list[0].name}} {{list[0].tel}}
      </template>
    </RouterCell>
    <Popup :isPopup.sync="isPopup">
      <template>
        <AddressList :list="list"
                     :switchable="true"
                     addressId="1"
                     @onAdd="onAddAddress"
                     @onEdit="onEditAddress"
                     @onclickItem="onclickItemAddress"></AddressList>
      </template>
    </Popup>
    <!--  -->
    <Shopping :shopping="shopping"
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
      <div class="name">【原神】Q版表情包系列 珠光工艺徽章 Genshin Genshin</div>
      <div class="amount">
        <span>￥</span>
        <span class="pic">19.00</span>
      </div>
      <div class="remain-time">
        <span>剩余支付时间：</span>
        <count-down :time="time"
                    format="mm:ss" />
      </div>
      <div class="plat">
        <Plat></Plat>
      </div>
      <van-button type="primary" round block>确认支付</van-button>
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
      message: '',
      priceTotal: 0,
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
      ],
      time: 30 * 60 * 1000,
    }
  },
  methods: {
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
          index
        }
      })
    },
    // 选择的地址
    onclickItemAddress (item, index) {
      console.log(item, index);
    },
    // 小计
    subtotal (val) {
      this.priceTotal = val
    },
    // 提交订单
    onSubmitOrderConfirm () {
      this.isPopupConfirm = true
    },
    onClosedConfirm () {

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
  .van-button{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 90%;
    margin: 10px auto;
    background-color: #ff6d6d;
    border: 1px solid #ff6d6d;
  }
  .plat{
    text-align: left;
  }
}
</style>