<template>
  <div class="shopping-cart-content">
    <div v-if="!isEmptyState">
      <CheckboxList ref="CheckboxList"
                    @checkListData="checkListData">
        <swipe-cell v-for="(item,index) in shoppingCart"
                    :key="index"
                    :name="item.id"
                    :before-close="beforeClose">
          <div class="item">
            <checkbox :name="item.id">
            </checkbox>
            <GoodsCardRow :id="item.id"
                          :thumb="item.thumb"
                          :title="item.title"
                          :desc="item.desc"
                          :price="item.price"
                          :num="item.num"
                          @onClickCard="onClickCard"
                          @onChangeNum="onChangeNum"></GoodsCardRow>
          </div>
          <template #right>
            <van-button square
                        text="删除"
                        type="danger"
                        class="delete-button" />
          </template>
        </swipe-cell>
      </CheckboxList>
      <SubmitBar :resultLength="result.length"
                 :priceTotal="priceTotal"
                 :isCheckedAll="isCheckedAll"
                 @checkAll="checkAll"
                 @onSubmit="onSubmit"></SubmitBar>
    </div>
    <div class="show-empty-state"
         v-else>
      <EmptyState class="empty-state"
                  :image="require('@/assets/image/shoppingcartnull.webp')"
                  description="您的购物车空空如也～"></EmptyState>
      <div class="recommend">
        为你推荐
      </div>
      <Goods></Goods>
    </div>
  </div>
</template>

<script>
import { Checkbox, SwipeCell, Button as VanButton, Cell, Dialog, Toast } from 'vant';
import CheckboxList from '@/components/CheckboxList/index.vue';
import GoodsCardRow from '@/components/GoodsCardRow/index.vue';
import SubmitBar from '@/components/SubmitBar/index.vue';
import EmptyState from '@/components/EmptyState/index.vue';
import Goods from '@/views/home/component/Goods.vue';
import { getCart, updataCartNum, deleteCart } from '@/api/cart';
export default {
  components: {
    Checkbox,
    CheckboxList,
    GoodsCardRow,
    SubmitBar,
    EmptyState,
    Goods,
    SwipeCell,
    VanButton,
    Cell,
  },
  data () {
    return {
      result: [],
      isCheckedAll: false,
      isEmptyState: true,
      shoppingCart: [
        // {
        //   id: 1,
        //   thumb: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
        //   title: '手机',
        //   desc: '12+256',
        //   price: 1000.22,
        //   num: 1
        // }
      ],
      priceTotal: 0,
      onChangeCartNum: 0
    }
  },
  watch: {
    shoppingCart: {
      immediate: true,
      handler (val) {
        if (val.length > 0) {
          this.isEmptyState = false
        } else {
          this.isEmptyState = true
        }
      }
    }
  },
  created () {
    this.getCartData()
  },
  methods: {
    // 获取购物车数据
    getCartData () {
      // 初始化数据
      this.shoppingCart = []
      const u_id = this.$store.getters.userInfo.u_id
      getCart(u_id).then(res => {
        if (res.data.code === 200) {
          res.data.data.forEach(item => {
            this.shoppingCart.push({
              id: item.cart_id,
              goods_id: item.goods_id,
              specification_id: item.specification_id,
              thumb: item.goods_avatar,
              title: item.goods_name,
              desc: item.specification_value1 + ' ' + item.specification_value2,
              price: item.goods_pic,
              num: item.number
            })
          })
        }
      }).catch(err => {
        console.log(err);
      })
    },
    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose ({ name, position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？',
          }).then(() => {
            instance.close();
            deleteCart(name).then(res => {
              this.shoppingCart.map((item, index) => {
                if (item.id == name) {
                 return this.shoppingCart.splice(index,1)
                }
                return item
              })
            }).catch(err => {
              console.log(err);
            })
          }).catch(() => {
            console.log('取消');
          });
          break;
      }
    },
    // 点击购物车商品
    onClickCard (id) {
      this.shoppingCart.forEach(item => {
        if (item.id == id) {
          this.$router.push({
            path: '/goods',
            query: {
              id: item.goods_id
            }
          })
        }
      })
    },
    // 修改购物车商品数量
    onChangeNum (value, id) {
      Toast.loading({ forbidClick: true });
      clearTimeout(this.timer);
      const data = {
        cart_id: id,
        num: value
      }
      updataCartNum(data).then(res => {
        this.shoppingCart.map(item => {
          if (item.id == id) {
            return item.num = value
          }
          return item
        })
        Toast.clear();
      }).catch(err => {
        console.log(err);
        Toast.clear();
      })
    },
    // 选择列表
    checkListData (result) {
      this.priceTotal = 0
      this.result = result
      if (this.shoppingCart.length == result.length) {
        this.isCheckedAll = true
      } else {
        this.isCheckedAll = false
      }
      this.result.forEach(item1 => {
        this.shoppingCart.forEach(item2 => {
          if (item1 == item2.id) {
            this.priceTotal += (item2.price * item2.num)
          }
        })
      })
    },
    // 全选
    checkAll (checked) {
      if (this.result.length == 0) {
        this.$refs.CheckboxList.$refs.checkboxGroup.toggleAll(true)
      }
      else if (this.shoppingCart.length > this.result.length) {
        if (checked) {
          this.$refs.CheckboxList.$refs.checkboxGroup.toggleAll(checked)
        } else {
          return false
        }
      }
      else if (checked) {
        this.$refs.CheckboxList.$refs.checkboxGroup.toggleAll(checked)
      }
      else {
        this.$refs.CheckboxList.$refs.checkboxGroup.toggleAll(false)
      }

    },
    // 提交
    onSubmit () {
      const data = []
      this.shoppingCart.forEach(item => {
        this.result.forEach(item2 => {
          if (item.id == item2) {
            data.push({
              goodsId: item.goods_id,
              selectedNum: item.num,
              selectedSkuComb: {
                id: item.specification_id,
                s1: item.specification_id,
                s2: item.specification_id,
                price: item.price,
                properties: [],
              }
            })
          }
        })
      })
      this.$store.dispatch('orderConfirm', data)
      this.$router.push({
        path: '/orderconfirm'
      })
    }
  },
}
</script>

<style lang="less" scoped>
.shopping-cart-content {
  background-color: #fff;
  .item {
    display: flex;
    .van-checkbox {
      padding: 0 10px;
    }
  }
  .delete-button {
    height: 100%;
  }
  .van-submit-bar {
    bottom: 50px;
  }
  .show-empty-state {
    background-color: #f3f3f4;
    .empty-state {
      background-color: #fff;
    }
    .recommend {
      margin: 10px 10px 0 10px;
      font-size: 16px;
      font-weight: 500;
    }
  }
}
</style>