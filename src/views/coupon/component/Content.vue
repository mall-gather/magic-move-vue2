<template>
  <div class="content">
    <Tabs @onChange="onChange">
      <tab v-for="item in tabList"
           :key="item.title"
           :title="item.title"
           :name="item.name">
        <CouponList :active="active"></CouponList>
      </tab>
    </Tabs>
  </div>
</template>

<script>
import { Tab } from 'vant';
import Tabs from '@/components/Tabs/index.vue';
import CouponList from './CouponList.vue';
export default {
  components: {
    Tab,
    Tabs,
    CouponList,
  },
  data () {
    return {
      tabList: [
        {
          title: '待使用',
          name: 0
        },
        {
          title: '待生效',
          name: 1
        },
        {
          title: '已使用',
          name: 2
        },
        {
          title: '已过期',
          name: 3
        },
      ],
      active: 0
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
.van-tab__pane{
  height: calc(100vh - 85px);
}
</style>