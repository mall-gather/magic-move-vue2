<template>
  <goods-action>
    <goods-action-icon icon="chat-o"
                       text="客服"
                       @click="onClickService" />
    <goods-action-icon icon="cart-o"
                       text="购物车"
                       badge="5"
                       @click="onClickShoppingCart" />
    <goods-action-button type="warning"
                         text="加入购物车"
                         @click="onClickButton" />
    <goods-action-button type="danger"
                         text="立即购买"
                         @click="onClickButton" />
  </goods-action>
</template>

<script>
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
export default {
  components: {
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
  },
  methods: {
    onClickService () {
      
    },
    onClickShoppingCart () {
      this.$router.push({
        path:'/shoppingcart'
      })
    },
    onClickButton () {
      this.$emit('onClickButton',true)
    },
  },
}
</script>

<style>
</style>