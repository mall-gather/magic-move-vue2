<template>
  <sku v-model="show"
       :sku="sku"
       :goods="goods"
       :goods-id="goodsId"
       :quota="quota"
       :quota-used="quotaUsed"
       :hide-stock="sku.hide_stock"
       :custom-stepper-config="customStepperConfig"
       @buy-clicked="onBuyClicked"
       @add-cart="onAddCartClicked" />
</template>

<script>
import { Sku } from 'vant';
export default {
  components: {
    Sku,
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      sku: {
        // 数据结构见下方文档
      },
      goods: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
      },
    };
  },
}
</script>

<style>
</style>