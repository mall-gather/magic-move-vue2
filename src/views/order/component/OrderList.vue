<template>
  <div class="order-list">
    <pull-refresh v-model="isLoading"
                  success-text="刷新成功"
                  @refresh="onRefresh">
      <div v-if="!isEmptyState">
        <GoodsCardRow v-for="item in orderList"
                      :key="item.id"
                      :id="item.id"
                      :thumb="item.thumb"
                      :title="item.title"
                      :desc="item.desc"
                      :price="item.price"
                      :num="item.num"
                      :isStepper="false"
                      @onClickCard="onClickCard"></GoodsCardRow>
      </div>
      <div v-else
           class="empty-state">
        <EmptyState :image="require('@/assets/image/ordernull.webp')"
                    description="暂无订单"></EmptyState>
      </div>
    </pull-refresh>
  </div>
</template>

<script>
import { PullRefresh } from 'vant';
import GoodsCardRow from '@/components/GoodsCardRow/index.vue';
import EmptyState from '@/components/EmptyState/index.vue';
import _ from 'lodash';
export default {
  components: {
    GoodsCardRow,
    EmptyState,
    PullRefresh,
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
      isEmptyState: false,
      orderList: [
        {
          id: 1,
          thumb: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机',
          desc: '12+256',
          price: 1000.22,
          num: 1
        }
      ],
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
        console.log(val.length);
        if (val.length > 0) {
          this.isEmptyState = false
        } else {
          this.isEmptyState = true
        }
      }
    }
  },
  methods: {
    // 刷新
    onRefresh () {
      setTimeout(() => {
        console.log('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
    // 点击订单
    onClickCard (val) {
      console.log(val);
    },
  },
}
</script>

<style lang="less" scoped>
.order-list {
  height: 100%;
  .van-pull-refresh {
    height: 100%;
    .empty-state {
      padding: 60px 0 30px 0;
    }
  }
}
</style>