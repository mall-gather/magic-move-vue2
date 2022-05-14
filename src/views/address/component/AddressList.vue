<template>
  <AddressList :list="list"
               @onAdd="onAdd"
               @onEdit="onEdit"></AddressList>
</template>

<script>
import AddressList from '@/components/AddressList/index.vue';
export default {
  components: {
    AddressList,
  },
  data () {
    return {
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
      ],
    };
  },
  methods: {
    onAdd () {
      this.$router.push({
        path: '/addaddress'
      })
    },
    onEdit (item, index) {
      this.$router.push({
        path: '/editaddress',
        query: {
          index
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