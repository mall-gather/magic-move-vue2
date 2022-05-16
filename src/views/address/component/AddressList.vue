<template>
  <AddressList :list="list"
               @onAdd="onAdd"
               @onEdit="onEdit"></AddressList>
</template>

<script>
import AddressList from '@/components/AddressList/index.vue';
import { areaCodeToChinese } from '@/utils/areaCode';
import { getAddress } from '@/api/address';
export default {
  components: {
    AddressList,
  },
  data () {
    return {
      list: [
        // {
        //   id: '1',
        //   name: '张三',
        //   tel: '13000000000',
        //   address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        //   isDefault: true,
        // },
      ],
    };
  },
  created () {
    this.getAddressData()
  },
  methods: {
    // 获取收货地址
    getAddressData () {
      this.list = []
      const u_id = this.$store.getters.userInfo.u_id
      getAddress(u_id).then(res => {
        console.log(res);
        res.data.data.forEach((item, index) => {
          if (item.isDefault) {
            this.addressId = index
          }
          this.list.push({
            id: item.address_id,
            name: item.consignee,
            tel: item.telephone,
            address: areaCodeToChinese([item.province, item.city, item.district])+ ' ' + item.detail,
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
    onAdd () {
      this.$router.push({
        path: '/addaddress'
      })
    },
    onEdit (item, index) {
      this.$router.push({
        path: '/editaddress',
        query: {
          id:item.id
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.van-address-list {
  background-color: #fff;
  height: calc(100vh - 50px);
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