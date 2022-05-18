<template>
  <div class="goods-info">
    <Swipe :goods_carousel="goodsData.goods_carousel"></Swipe>
    <GoodsDescription :title="goodsData.goods_name"
                      :pic="goodsData.goods_price"></GoodsDescription>
    <RouterCell class="choose-goods"
                title="请选择商品款式"
                @onCell="onCellSku"></RouterCell>
    <Sku :isShowSku="isShowSku"
    @updateShowSku="updateShowSku"
         v-if="JSON.stringify(goodsData) !== '{}'"
         :goodsData="goodsData"></Sku>
    <GoodsDetails :goods_details="goodsData.goods_details"></GoodsDetails>
    <GoodsAction :cartNUmber="cartNUmber" @onClickButton="onClickButton"></GoodsAction>
  </div>
</template>

<script>
import Swipe from './Swipe.vue';
import GoodsDescription from './GoodsDescription.vue';
import RouterCell from '@/components/RouterCell/index.vue';
import Sku from './Sku.vue';
import GoodsDetails from './GoodsDetails.vue';
import GoodsAction from './GoodsAction.vue';
import { getGoods } from '@/api/goods';
import { getCart } from '@/api/cart';
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
      isShowSku: false,
      goodsData: {},
      cartNUmber: 0
    }
  },
  created () {
    this.getGoodsData()
    this.getCartData()
  },
  methods: {
    // 获取数据
    getGoodsData () {
      getGoods(this.$route.query.id).then((res) => {
        console.log(res);
        this.goodsData = res.data.data
        this.goodsData.goods_carousel = this.goodsData.goods_carousel.split(',')
        this.goodsData.goods_details = this.goodsData.goods_details.split(',')
      }).catch((err) => {
        console.log(err);
      });
    },
    // 获取购物车数据
    getCartData () {
      const u_id = this.$store.getters.userInfo.u_id
      getCart(u_id).then(res => {
        console.log(res);
        this.cartNUmber = res.data.data.length
      }).catch(err => {
        console.log(err);
      })
    },
    onCellSku () {
      this.isShowSku = true
    },
    onClickButton (val) {
      this.isShowSku = val
    },
    updateShowSku(val){
      this.isShowSku = val
      this.getCartData()
    }
  },
}
</script>

<style lang="less" scoped>
.choose-goods {
  color: #9696a1;
}
</style>