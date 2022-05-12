<template>
  <div class="content">
    <Tabs @onChange="onChange">
      <tab v-for="item in tabList"
           :key="item.title"
           :title="item.title"
           :name="item.name">
        <OrderList :active="active"></OrderList>
      </tab>
    </Tabs>
  </div>
</template>

<script>
import { Tab } from 'vant';
import Tabs from '@/components/Tabs/index.vue';
import OrderList from './OrderList.vue';
export default {
  components: {
    Tab,
    Tabs,
    OrderList,
  },
  data () {
    return {
      tabList: [
        {
          title: '全部',
          name: 0
        },
        {
          title: '待支付',
          name: 1
        },
        {
          title: '待发货',
          name: 2
        },
        {
          title: '待收货',
          name: 3
        },
        {
          title: '售后',
          name: 4
        }
      ],
      active:0
    }
  },
  methods: {
    onChange (val) {
      this.active = val
    }
  },
}
</script>

<style lang="less" scoped>
/deep/.van-tab__pane{
  height: calc(100vh - 85px);
}
</style>