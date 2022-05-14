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
    <Shopping :shopping="shopping"></Shopping>

    <SubmitBar :resultLength="list.length"
               :priceTotal="priceTotal"
               :isCheckboxShow="isCheckboxShow"
               @onSubmit="onSubmitOrderConfirm"></SubmitBar>
  </div>
</template>

<script>
import RouterCell from '@/components/RouterCell/index.vue';
import Popup from '@/components/Popup/index.vue';
import AddressList from '@/components/AddressList/index.vue';
import SubmitBar from '@/components/SubmitBar/index.vue';
import Shopping from './Shopping.vue';
export default {
  components: {
    RouterCell,
    Popup,
    AddressList,
    SubmitBar,
    Shopping,
  },
  data () {
    return {
      isPopup: false,
      isCheckboxShow: false,
      shopping: [
        {
          id: 1,
          thumb: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机',
          desc: '12+256',
          price: 1000.22,
          freight:0,
          num: 1
        },
        {
          id: 2,
          thumb: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机',
          desc: '12+256',
          price: 1000.22,
          freight:0,
          num: 1
        }
      ],
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
    }
  },
  mounted () {
    this.checkListData()
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
    // 商品总价
    checkListData () {
      this.priceTotal = 0
      this.shopping.forEach(item => {
        this.priceTotal += item.price
      })
    },
    // 提交订单
    onSubmitOrderConfirm () {
      console.log('提交订单');
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
</style>