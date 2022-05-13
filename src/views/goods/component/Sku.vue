<template>
  <sku v-model="show"
       :sku="sku"
       :goods="goods"
       :goods-id="goodsId"
       :properties="properties"
       :hide-stock="sku.hide_stock"
       @closed="onCloseSku"
       @buy-clicked="onBuyClicked"
       @add-cart="onAddCartClicked" />
</template>

<script>
import { Sku, Toast } from 'vant';
export default {
  components: {
    Sku,
  },
  props: {
    isShowSku: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      show: false,
      goodsId: 1,
      quota: 2,
      quotaUsed: 5,
      properties: [
        // 商品属性
        {
          k_id: 123, // 属性id
          k: '加料', // 属性名
          is_multiple: false, // 是否可多选
          v: [
            {
              id: 1222, // 属性值id
              name: '珍珠', // 属性值名
              price: 1, // 属性值加价
            },
            {
              id: 1223,
              name: '椰果',
              price: 1,
            },
          ],
        },
      ],
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: '颜色', // skuKeyName：规格类目名称
            k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: '1', // skuValueId：规格值 id
                name: '红色', // skuValueName：规格值名称
              },
              {
                id: '2',
                name: '蓝色',
              }
            ],
            largeImageMode: false, //  是否展示大图模式
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2260, // skuId
            s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '2', // 规格类目 k_s 为 s2 的对应规格值 id
            price: 10000, // 价格（单位分）
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: 'https://img01.yzcdn.cn/1.jpg'
      },
    };
  },
  watch: {
    show: {
      handler (val) {
        this.$emit('update:isShowSku', val)
      }
    },
    isShowSku: {
      handler (val) {
        this.show = val
      }
    }
  },
  methods: {
    onBuyClicked () {
      console.log('立即购买');
    },
    onAddCartClicked () {
      console.log('加入购物车');
    },
    onCloseSku () {
      console.log('关闭');
    }
  },
}
</script>

<style>
</style>