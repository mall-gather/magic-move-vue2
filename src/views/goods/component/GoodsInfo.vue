<template>
  <div class="goods-info">
    <Swipe></Swipe>
    <GoodsDescription title="aa"
                      :pic="123"></GoodsDescription>
    <RouterCell class="choose-goods"
                title="请选择商品款式"
                @onCell="onCellSku"></RouterCell>
    <Sku :isShowSku.sync="isShowSku"></Sku>
    <GoodsDetails></GoodsDetails>
    <GoodsAction @onClickButton="onClickButton"></GoodsAction>
  </div>
</template>

<script>
import Swipe from './Swipe.vue';
import GoodsDescription from './GoodsDescription.vue';
import RouterCell from '@/components/RouterCell/index.vue';
import Sku from './Sku.vue';
import GoodsDetails from './GoodsDetails.vue';
import GoodsAction from './GoodsAction.vue';
export default {
  components: {
    Swipe,
    GoodsDescription,
    RouterCell,
    Sku,
    GoodsDetails,
    GoodsAction,
  },
  data () {
    return {
      isShowSku: false
    }
  },
  methods: {
    onCellSku () {
      this.isShowSku = true
    },
    onClickButton (val) {
      this.isShowSku = val
    }
  },
}
</script>

<style lang="less" scoped>
.choose-goods {
  color: #9696a1;
}
</style>