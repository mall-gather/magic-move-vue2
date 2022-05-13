<template>
  <address-list
  v-model="chosenAddressId"
  :list="list"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
</template>

<script>
import { AddressList, Toast } from 'vant';
export default {
  components: {
    AddressList,
  },
  data () {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
        {
          id: '3',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
        {
          id: '4',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
        {
          id: '5',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
    };
  },
  methods: {
    onAdd () {
      this.$router.push({
        path:'/addaddress'
      })
    },
    onEdit (item, index) {
      Toast('编辑地址:' + index);
    },
  },
}
</script>

<style lang="less" scoped>
.van-address-list{
  background-color: #fff;
  .van-address-list__bottom{
    background-color: transparent;
  }
}
</style>