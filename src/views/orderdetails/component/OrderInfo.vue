<template>
  <div class="order-info">
    <RouterCell title="订单信息"
                :isLink="false">
      <template #label>
        <div class="order-id">
          <span>订单编号</span>
          <span>{{orderInfoData.order_id}}</span>
        </div>
        <div class="create-time">
          <span>创建时间</span>
          <span>{{orderInfoData.create_time | orderTime}}</span>
        </div>
        <!-- <div class="finish-time">
          <span>完成时间</span>
          <span>{{orderInfoData.complete_time | orderTime}}</span>
        </div> -->
        <div class="order-notes">
          <span>订单备注</span>
          <span>{{orderInfoData.note?orderInfoData.note:'暂无'}}</span>
        </div>
      </template>
    </RouterCell>
  </div>
</template>

<script>
import RouterCell from '@/components/RouterCell/index.vue';
import { convertTime } from '@/utils/time';
export default {
  components: {
    RouterCell,
  },
  props: {
    orderInfoData: {
      type: Object,
      default: () => { }
    },
  },
  filters: {
    orderTime: function (value) {
      if (value) {
        return convertTime('yyyy-MM-dd hh:mm:ss', value);
      } else {
        return '暂无'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.order-info {
  margin: 10px 0 0 0;
  .van-cell {
    .van-cell__label {
      div {
        display: flex;
        justify-content: space-between;
        margin: 15px 0 0 0;
      }
    }
  }
}
</style>