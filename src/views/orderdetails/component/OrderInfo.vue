<template>
  <div class="order-info">
    <RouterCell title="订单信息"
                :isLink="false">
      <template #label>
        <div class="order-id">
          <span>订单编号</span>
          <span>12389123718537183</span>
        </div>
        <div class="create-time">
          <span>创建时间</span>
          <span>2022-05-14 13:44:38</span>
        </div>
        <div class="finish-time">
          <span>完成时间</span>
          <span>2022-05-14 13:50:38</span>
        </div>
        <div class="order-notes">
          <span>订单备注</span>
          <span>无</span>
        </div>
      </template>
    </RouterCell>
  </div>
</template>

<script>
import RouterCell from '@/components/RouterCell/index.vue';
export default {
  components: {
    RouterCell,
  },
}
</script>

<style lang="less" scoped>
.order-info {
  margin: 10px 0 0 0;
  .van-cell{
    .van-cell__label{
      div{
        display: flex;
        justify-content: space-between;
        margin: 15px 0 0 0;
      }
    }
  }
}
</style>